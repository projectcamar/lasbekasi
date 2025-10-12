# 📊 Google Analytics Setup - Complete Guide

## ✅ **Setup Status: COMPLETE**

### GA4 Property Details:
```
Property Name: Bengkel Las Mandiri
Measurement ID: G-BR85RR2ZHX
Domain: lasbekasi.com
Status: ✅ Active
```

---

## 📋 **What's Configured:**

### 1. ✅ **Basic Tracking (Automatic)**
- Page views
- Session duration
- Bounce rate
- User demographics
- Device & browser info
- Traffic sources

### 2. ✅ **Enhanced Measurement (Enabled)**
- Scroll tracking (25%, 50%, 75%, 100%)
- Outbound link clicks
- Site search (when implemented)
- Video engagement (when implemented)
- File downloads

### 3. ✅ **Custom Event Tracking**
Implemented in `src/utils/analytics.ts`:

```typescript
// WhatsApp clicks
trackWhatsAppClick('location')

// Service page views
trackServiceView('Kanopi Bekasi')

// Portfolio views
trackPortfolioView('Item Name')

// Form submissions
trackFormSubmit('Contact Form')

// Phone clicks
trackPhoneClick()

// Button clicks
trackButtonClick('CTA Button', 'hero')

// Error tracking
trackError('Error message', '/page')
```

---

## 🔍 **Testing Analytics (After Deploy):**

### Step 1: Visit Live Site
```
https://lasbekasi.com
```

### Step 2: Check Real-Time in GA4
```
1. Open Google Analytics: https://analytics.google.com
2. Select property: Bengkel Las Mandiri
3. Go to: Reports → Real-time
4. You should see: 1 active user (yourself!)
```

### Step 3: Test Events
```
On the live site:
1. Click WhatsApp button
2. Scroll to bottom (triggers scroll event)
3. Click any external link (triggers outbound event)
4. Navigate to service page (triggers page_view)

In GA4 Real-time:
Check "Event count by Event name"
Should see:
- page_view
- contact_whatsapp
- scroll
- click (outbound)
```

---

## 📈 **How to Use Analytics:**

### Daily Metrics (Check Weekly):
```
Reports → Life Cycle → Acquisition → Traffic Acquisition

Look at:
- Users (unique visitors)
- Sessions (total visits)
- Engagement rate
- Top traffic sources:
  * Direct (typed URL)
  * Organic Search (Google)
  * Organic Social (Facebook, Instagram)
  * Referral (other websites)
```

### Popular Pages:
```
Reports → Life Cycle → Engagement → Pages and Screens

Shows:
- Most visited pages
- Time spent on each page
- Bounce rate per page
```

### User Demographics:
```
Reports → User → Demographics

Shows:
- Age groups
- Gender
- Location (cities in Indonesia)
- Device type (mobile vs desktop)
```

### Events:
```
Reports → Life Cycle → Engagement → Events

Custom events tracked:
- contact_whatsapp: WhatsApp button clicks
- button_click: CTA button clicks
- view_service: Service page views
- view_item: Portfolio views
- generate_lead: Form submissions
```

---

## 🎯 **Key Metrics to Monitor:**

### Weekly:
- **Total Users**: How many unique visitors?
- **Sessions**: How many visits total?
- **Engagement Rate**: % of engaged sessions
- **Top Pages**: Which pages get most views?
- **Traffic Sources**: Where do visitors come from?

### Monthly:
- **User Growth**: Month-over-month increase
- **Popular Services**: Which service pages are most viewed?
- **Conversion Events**: How many WhatsApp/phone clicks?
- **Device Split**: Mobile vs Desktop traffic
- **Location**: Which cities in Indonesia?

---

## 🔔 **Setting Up Alerts (Recommended):**

### 1. Weekly Email Reports
```
Admin → Property Settings → Email Reports
Set up:
- Weekly summary (every Monday)
- Include: Users, Sessions, Top Pages
```

### 2. Custom Alerts
```
Admin → Custom Alerts → Create Alert

Examples:
- Alert if daily users drop by 50%
- Alert if error events spike
- Alert if no data received for 24 hours
```

---

## 📊 **Events Currently Tracked:**

| Event | When It Fires | Parameters |
|-------|--------------|------------|
| `page_view` | Every page load | page_path, page_title |
| `contact_whatsapp` | WhatsApp button click | button_location |
| `contact_phone` | Phone number click | - |
| `view_service` | Service page view | service_name |
| `view_item` | Portfolio item view | item_name |
| `generate_lead` | Form submission | form_name |
| `button_click` | CTA button click | button_name, location |
| `scroll` | Scroll milestones | percent_scrolled |
| `click` (outbound) | External link click | link_url |

---

## 🚀 **Advanced Features (Optional):**

### 1. E-commerce Tracking (If Selling Online)
```typescript
import { trackEvent } from '@/utils/analytics'

// Add to cart
trackEvent('add_to_cart', {
  currency: 'IDR',
  value: 2500000,
  items: [{
    item_id: 'kanopi-01',
    item_name: 'Kanopi Alderon 4m²',
    price: 2500000,
    quantity: 1
  }]
})

// Purchase
trackEvent('purchase', {
  transaction_id: 'T12345',
  value: 2500000,
  currency: 'IDR',
  items: [...]
})
```

### 2. User ID Tracking (For Logged-in Users)
```typescript
// If you add user accounts later
gtag('config', 'G-BR85RR2ZHX', {
  user_id: 'user_12345'
})
```

### 3. Custom Dimensions
```typescript
// Track custom attributes
gtag('set', 'user_properties', {
  customer_type: 'residential', // or 'commercial'
  preferred_service: 'kanopi'
})
```

---

## 📱 **Mobile App Tracking (Future):**

If you build a mobile app later:

```
1. Add new Data Stream in GA4
2. Choose: Android app or iOS app
3. Follow integration guide
4. Use Firebase SDK for tracking
```

---

## 🔒 **Privacy & GDPR Compliance:**

### Current Settings:
✅ **IP Anonymization**: Enabled
✅ **Cookie Consent**: SameSite=None;Secure
✅ **Data Retention**: 14 months (default)

### For EU Visitors (Optional):
If you get European visitors, consider adding cookie consent banner:

```bash
npm install react-cookie-consent
```

Then implement consent banner before loading GA4.

---

## 🐛 **Troubleshooting:**

### Problem: No data showing in Real-time

**Solutions:**
1. Check browser console for errors
2. Verify `G-BR85RR2ZHX` is correct in code
3. Disable ad blockers (they block GA4)
4. Test in incognito mode
5. Wait 5-10 minutes (data can be delayed)

### Problem: Events not firing

**Solutions:**
1. Open browser console (F12)
2. Look for gtag errors
3. Check network tab for analytics requests
4. Verify event code is correct
5. Test on live site (not localhost)

### Problem: Wrong page titles

**Solutions:**
1. Update `<title>` tag in each page component
2. Or use `react-helmet-async` to set dynamic titles

---

## 📚 **Resources:**

- **GA4 Dashboard**: https://analytics.google.com
- **GA4 Documentation**: https://support.google.com/analytics
- **Event Builder**: https://ga-dev-tools.google/ga4/event-builder/
- **Debug View**: Enable in GA4 to see events in real-time

---

## ✅ **Next Steps:**

### Immediate:
1. [x] GA4 property created
2. [x] Tracking code added
3. [x] Custom events implemented
4. [ ] **Deploy to production** ← DO THIS NOW
5. [ ] Test on live site
6. [ ] Set up weekly email reports

### Within 1 Week:
- [ ] Review first week of data
- [ ] Set up custom alerts
- [ ] Create custom dashboard
- [ ] Analyze top traffic sources

### Within 1 Month:
- [ ] Compare to previous month (if data available)
- [ ] Identify top performing pages
- [ ] Optimize low-performing pages
- [ ] Set monthly reporting routine

---

## 🎯 **Success Metrics:**

Track these KPIs monthly:

1. **Traffic Growth**: +10% month-over-month
2. **Engagement Rate**: > 60%
3. **Avg Session Duration**: > 2 minutes
4. **WhatsApp Clicks**: Track conversion rate
5. **Service Page Views**: Which services are popular?
6. **Mobile Traffic**: Should be > 60% for Indonesia

---

**Status**: ✅ **READY TO DEPLOY**

**GA4 ID**: `G-BR85RR2ZHX`

**Last Updated**: 2025-10-12

---

## 🚀 Deploy Now!

```bash
cd bengkel-keluarga

git add .
git commit -m "feat: add Google Analytics with real GA4 tracking"
git push origin main
```

Then test in Real-time after 5 minutes! 📊

