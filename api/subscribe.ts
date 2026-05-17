import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// In-memory storage for IP visit tracking per page
const ipPageVisits = new Map<string, number>();

async function getGeolocation(ip: string) {
  try {
    if (!ip || ip === 'unknown' || ip === '::1' || ip.startsWith('127.') || ip.startsWith('10.') || ip.startsWith('192.168.')) {
      return null;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`, {
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    const data = await response.json();
    return data.status === 'success' ? {
      country: data.country,
      city: data.city,
      region: data.regionName,
      isp: data.isp,
      zip: data.zip,
      timezone: data.timezone,
      lat: data.lat,
      lon: data.lon,
      org: data.org,
      countryCode: data.countryCode
    } : null;
  } catch (error) {
    console.error('Geolocation error:', error instanceof Error ? error.message : 'Unknown');
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    firstName, email, whatsapp, notificationType,
    productName, productPrice, productCategory, productUrl,
    chatMessage, language, whatsappClickData, pageName, pageUrl,
    catalogLanguage
  } = req.body;

  console.log(`[SUBSCRIPTION] Type: ${notificationType}, Email: ${email}, Name: ${firstName}, Lang: ${catalogLanguage || 'N/A'}`);

  const forwarded = req.headers['x-forwarded-for'];
  const clientIP = (typeof forwarded === 'string' ? forwarded.split(',')[0] : 'unknown').trim();
  const geolocation = await getGeolocation(clientIP);

  console.log(`[SUBSCRIPTION] IP: ${clientIP}, Geolocation: ${geolocation ? 'Found' : 'Not Found'}`);

  // Track visits
  const visitKey = `${clientIP}-${pageName || 'unknown'}`;
  const visitNumber = (ipPageVisits.get(visitKey) || 0) + 1;
  ipPageVisits.set(visitKey, visitNumber);

  let totalVisits = 0;
  ipPageVisits.forEach((count, key) => { if (key.startsWith(clientIP)) totalVisits += count; });

  const isCatalog = notificationType === 'catalog_download';

  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      console.error('[SUBSCRIPTION] RESEND_API_KEY is missing!');
      return res.status(500).json({ error: 'Email configuration missing' });
    }

    const resend = new Resend(RESEND_API_KEY);

    let subject = '';
    let html = '';

    const loc = geolocation ? `${geolocation.city}, ${geolocation.region}, ${geolocation.country} (${geolocation.countryCode})` : 'Unknown';
    const time = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }) + ' WIB';

    const renderCommonDetails = () => `
      <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
        <h3 style="color: #FF5E14; margin-bottom: 10px;">📍 Visitor IP Address</h3>
        <p style="margin: 5px 0;"><strong>Client IP:</strong> ${clientIP}</p>
        <p style="margin: 5px 0; color: #666; font-size: 13px;"><strong>Full Chain:</strong> ${req.headers['x-forwarded-for'] || clientIP}</p>
        
        <h3 style="color: #FF5E14; margin-bottom: 10px; margin-top: 20px;">🌍 Visitor Geolocation</h3>
        <p style="margin: 5px 0;"><strong>📍 Location:</strong> ${loc}</p>
        <p style="margin: 5px 0;"><strong>📮 ZIP:</strong> ${geolocation?.zip || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>🕐 Timezone:</strong> ${geolocation?.timezone || 'N/A'}</p>
        <p style="margin: 5px 0;"><strong>📌 Coordinates:</strong> ${geolocation?.lat}, ${geolocation?.lon}</p>
        <p style="margin: 5px 0;"><strong>🌐 ISP:</strong> ${geolocation?.isp || 'Unknown'}</p>
        <p style="margin: 5px 0;"><strong>🏢 Organization:</strong> ${geolocation?.org || 'N/A'}</p>
        
        <h3 style="color: #FF5E14; margin-bottom: 10px; margin-top: 20px;">🕐 Timestamp</h3>
        <p style="margin: 5px 0;">${time}</p>
        
        <h3 style="color: #FF5E14; margin-bottom: 10px; margin-top: 20px;">🖥️ User Agent</h3>
        <p style="margin: 5px 0; font-size: 13px; color: #666;">${req.headers['user-agent']}</p>
        
        <h3 style="color: #FF5E14; margin-bottom: 10px; margin-top: 20px;">📱 Device Information</h3>
        <p style="margin: 5px 0;"><strong>Referrer:</strong> ${req.headers['referer'] || pageUrl || 'Direct'}</p>
        <p style="margin: 5px 0;"><strong>Accept Language:</strong> ${req.headers['accept-language'] || 'Unknown'}</p>
      </div>
      <div style="margin-top: 30px; border-top: 2px solid #FF5E14; padding-top: 15px; font-size: 12px; color: #777;">
        <p>This is an automated notification from lasbekasi.com</p>
        <p>You're receiving this because a visitor interacted with your website.</p>
      </div>
    `;

    if (isCatalog || notificationType === 'order_now' || notificationType === 'whatsapp_click' || notificationType === 'chatbot_lead' || notificationType === 'chatbot_message' || notificationType === 'subscription') {
      subject = `Mandiri Steel Notification: ${notificationType.replace('_', ' ').toUpperCase()}`;
      html = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 25px; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #FF5E14; border-bottom: 2px solid #FF5E14; padding-bottom: 10px;">🔔 New ${notificationType.replace('_', ' ').toUpperCase()}</h2>
          <div style="margin-top: 20px;">
            <p style="font-size: 16px;"><strong>Name:</strong> ${firstName || 'Visitor'}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email || 'N/A'}</p>
            ${whatsapp ? `<p style="font-size: 16px;"><strong>WhatsApp:</strong> ${whatsapp}</p>` : ''}
            ${catalogLanguage ? `<p style="font-size: 16px; color: #FF5E14;"><strong>Catalog Language:</strong> ${catalogLanguage.toUpperCase()}</p>` : ''}
            ${productName ? `<p style="font-size: 16px;"><strong>Service/Product:</strong> ${productName}</p>` : ''}
            ${chatMessage ? `<p style="font-size: 16px; background: #f9f9f9; padding: 10px; border-radius: 4px; border-left: 4px solid #FF5E14;"><strong>Message:</strong><br/>${chatMessage}</p>` : ''}
          </div>
          
          ${renderCommonDetails()}
        </div>
      `;
    }

    if (!subject) {
      console.warn(`[SUBSCRIPTION] Invalid notification type: ${notificationType}`);
      return res.status(400).json({ error: 'Invalid notification type' });
    }

    const recipients = ['projectcamar@gmail.com'];
    const results = [];

    // 1. Send Admin Notification
    for (const recipient of recipients) {
      console.log(`[SUBSCRIPTION] Attempting to send notification to admin: ${recipient}`);
      try {
        const { data, error } = await resend.emails.send({
          from: 'Mandiri Steel <info@lasbekasi.com>',
          to: recipient,
          subject: subject,
          html: html,
        });

        if (error) {
          console.error(`[SUBSCRIPTION] Resend notification error for ${recipient}:`, error);
          results.push({ recipient, success: false, error });
        } else {
          console.log(`[SUBSCRIPTION] Notification sent to ${recipient} successfully:`, data?.id);
          results.push({ recipient, success: true, id: data?.id });
        }
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Unknown error';
        results.push({ recipient, success: false, error: errorMsg });
      }
    }

    // 2. Send Catalog Delivery Email to User
    if ((isCatalog || notificationType === 'subscription') && email && email.includes('@')) {
      console.log(`[SUBSCRIPTION] Attempting to send catalog to customer: ${email}`);

      const pdfBaseUrl = 'https://lasbekasi.com/fonts/Mandiri-Steel-Catalog-2026';
      const langSuffix = catalogLanguage && catalogLanguage !== 'en' && catalogLanguage !== 'id'
        ? `-${catalogLanguage.toUpperCase()}`
        : '';
      const catalogUrl = `${pdfBaseUrl}${langSuffix}.pdf`;

      const lang = catalogLanguage || 'id';

      const emailTranslations: Record<string, {
        subject: string;
        greeting: (name: string) => string;
        intro: string;
        downloadCta: string;
        fallbackText: string;
        showcaseHeading: string;
        showcaseDesc: string;
        viewDetails: string;
        viewAll: string;
        bestRegards: string;
        team: string;
        contactRemarks: string;
      }> = {
        id: {
          subject: 'Katalog Layanan Mandiri Steel 2026 Anda',
          greeting: (name) => `Yth. ${name},`,
          intro: 'Terima kasih telah menyatakan minat pada jasa las Mandiri Steel. Sesuai permintaan Anda, berikut adalah tautan untuk mengunduh Katalog Premium Bengkel Las Mandiri Steel 2026 kami.',
          downloadCta: 'UNDUH KATALOG PDF',
          fallbackText: 'Jika tombol di atas tidak berfungsi, salin dan tempel tautan ini ke browser Anda:',
          showcaseHeading: 'Layanan Unggulan Kami',
          showcaseDesc: 'Jelajahi koleksi pengerjaan besi dan fabrikasi baja kualitas terbaik dengan standar kekuatan tinggi.',
          viewDetails: 'Lihat Detail Layanan',
          viewAll: 'Lihat Semua Layanan',
          bestRegards: 'Salam Hangat,',
          team: 'Tim Mandiri Steel',
          contactRemarks: 'Jika Anda memiliki pertanyaan atau ingin survey gratis, silakan hubungi kami di info@lasbekasi.com. Mohon jangan membalas email no-reply ini.'
        },
        en: {
          subject: 'Your Mandiri Steel 2026 Catalog',
          greeting: (name) => `Dear ${name},`,
          intro: 'Thank you for your interest in our services. As requested, here is the link to download our Mandiri Steel 2026 Premium Catalog.',
          downloadCta: 'DOWNLOAD PDF CATALOG',
          fallbackText: 'If the button above doesn\'t work, copy and paste this link into your browser:',
          showcaseHeading: 'Related Premium Services',
          showcaseDesc: 'Explore our collection of premium steel fabrication and welding services designed to meet high quality standards.',
          viewDetails: 'View Service Details',
          viewAll: 'View All Services',
          bestRegards: 'Best Regards,',
          team: 'Mandiri Steel Team',
          contactRemarks: 'If you have any questions, please contact us at info@lasbekasi.com. Please do not reply to this no-reply email.'
        }
      };

      const t = emailTranslations[lang] || emailTranslations['id'];

      const allProducts = [
        { name: 'Kanopi Minimalis Alderon', slug: 'kanopi-minimalis-alderon', price: 'Mulai Rp 450rb/m2', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
        { name: 'Pagar Minimalis Modern', slug: 'pagar-minimalis-modern', price: 'Mulai Rp 550rb/m2', img: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80' },
        { name: 'Konstruksi Baja WF', slug: 'konstruksi-baja-wf', price: 'Hubungi Kami', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' }
      ];

      const selected = allProducts.sort(() => 0.5 - Math.random()).slice(0, 3);
      const showcaseHtml = selected.map(p => `
        <div style="border: 1px solid #eee; border-radius: 8px; margin-bottom: 20px; overflow: hidden; background: #fff;">
          <img src="${p.img}" alt="${p.name}" style="width: 100%; height: auto; display: block;" />
          <div style="padding: 15px;">
            <p style="margin: 0; color: #999; font-size: 10px; text-transform: uppercase;">MANDIRI STEEL SERVICE</p>
            <h3 style="margin: 5px 0; color: #333; font-size: 18px;">${p.name}</h3>
            <p style="margin: 0; color: #FF5E14; font-weight: bold;">${p.price}</p>
            <div style="margin-top: 15px;">
              <a href="https://lasbekasi.com/product/${p.slug}" style="color: #FF5E14; text-decoration: none; font-weight: bold; font-size: 14px; border-bottom: 1px solid #FF5E14;">
                ${t.viewDetails} &rarr;
              </a>
            </div>
          </div>
        </div>
      `).join('');

      const userHtml = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 12px; background-color: #fcfcfc;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #FF5E14; margin: 0; letter-spacing: 2px;">MANDIRI STEEL</h1>
            <p style="color: #999; text-transform: uppercase; font-size: 12px; margin-top: 5px;">Bengkel Las & Fabrikasi Baja Terpercaya</p>
          </div>
          
          <h2 style="color: #444; border-bottom: 1px solid #f0f0f0; padding-bottom: 15px;">${t.greeting(firstName || 'Visitor')}</h2>
          
          <p style="font-size: 16px;">
            ${t.intro}
          </p>

          <div style="text-align: center; margin: 40px 0;">
            <a href="${catalogUrl}" style="background-color: #FF5E14; color: white; padding: 15px 35px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
              ${t.downloadCta}
            </a>
          </div>

          <p style="font-size: 14px; color: #666; font-style: italic;">
            ${t.fallbackText}
            <br/>
            <a href="${catalogUrl}" style="color: #FF5E14; text-decoration: none; word-break: break-all;">${catalogUrl}</a>
          </p>

          <div style="margin-top: 50px; padding-top: 30px; border-top: 2px solid #eee;">
             <h2 style="color: #333; margin-bottom: 10px; text-align: center;">${t.showcaseHeading}</h2>
             <p style="color: #666; font-size: 14px; text-align: center; margin-bottom: 30px;">${t.showcaseDesc}</p>
             ${showcaseHtml}
             <div style="text-align: center; margin-top: 10px;">
               <a href="https://lasbekasi.com/products" style="color: #FF5E14; text-decoration: none; font-weight: bold;">
                 ${t.viewAll} &rarr;
               </a>
             </div>
          </div>

          <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #f0f0f0;">
            <p style="margin-bottom: 10px; color: #666; font-size: 13px;">${t.contactRemarks}</p>
            <p style="margin-bottom: 5px; font-size: 14px;"><strong>Hubungi Kami:</strong></p>
            <p style="margin: 0; font-size: 13px;">WhatsApp: <a href="https://wa.me/6285212078467" style="color: #FF5E14; text-decoration: none;">+62 852 1207 8467</a></p>
            <p style="margin: 0; font-size: 13px;">Email: <a href="mailto:info@lasbekasi.com" style="color: #FF5E14; text-decoration: none;">info@lasbekasi.com</a></p>
            
            <div style="margin-top: 30px;">
              <p style="margin-bottom: 5px;"><strong>${t.bestRegards}</strong></p>
              <p style="margin-top: 0; color: #FF5E14;"><strong>${t.team}</strong></p>
              <p style="font-size: 12px; color: #999;">
                Jl. Raya Setu, Bekasi, Jawa Barat, Indonesia<br/>
                <a href="https://lasbekasi.com" style="color: #999; text-decoration: none;">www.lasbekasi.com</a>
              </p>
            </div>
          </div>
        </div>
      `;

      try {
        await resend.emails.send({
          from: 'Mandiri Steel <no-reply@lasbekasi.com>',
          to: email,
          subject: t.subject,
          html: userHtml,
        });

        console.log(`[SUBSCRIPTION] Catalog delivered to user: ${email}`);
      } catch (err) {
        console.error(`[SUBSCRIPTION] User delivery crash:`, err);
      }
    }

    const success = results.some(r => r.success);
    return res.status(success ? 200 : 500).json({ success, results });

  } catch (error) {
    console.error('[SUBSCRIPTION] Handler crash:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
