<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/1999/xhtml"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Bengkel Las Mandiri</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: #f5f5f5;
          }
          h1 {
            color: #1a1a1a;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }
          .intro {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .intro p {
            margin: 5px 0;
            color: #666;
          }
          .intro strong {
            color: #333;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
          }
          thead {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          th {
            text-align: left;
            padding: 15px;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.5px;
          }
          tbody tr {
            border-bottom: 1px solid #eee;
            transition: background 0.2s;
          }
          tbody tr:hover {
            background: #f8f9ff;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          td {
            padding: 12px 15px;
            font-size: 14px;
          }
          td a {
            color: #667eea;
            text-decoration: none;
            font-weight: 500;
          }
          td a:hover {
            text-decoration: underline;
          }
          .priority {
            font-weight: 600;
            color: #764ba2;
          }
          .changefreq {
            text-transform: capitalize;
            color: #28a745;
            font-weight: 500;
          }
          .date {
            color: #666;
            font-family: 'Courier New', monospace;
            font-size: 13px;
          }
          .footer {
            margin-top: 30px;
            padding: 20px;
            text-align: center;
            color: #999;
            font-size: 13px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .footer a {
            color: #667eea;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          .stat-box {
            background: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            flex: 1;
            min-width: 150px;
          }
          .stat-box strong {
            display: block;
            font-size: 24px;
            color: #667eea;
            margin-bottom: 5px;
          }
          .stat-box span {
            color: #666;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <h1>🗺️ XML Sitemap - Bengkel Las Mandiri</h1>
        <div class="intro">
          <p><strong>URL:</strong> <xsl:value-of select="sitemap:urlset/sitemap:url/sitemap:loc | sitemap:sitemapindex/sitemap:sitemap/sitemap:loc"/></p>
          <p><strong>Generated:</strong> <xsl:value-of select="concat(substring(sitemap:urlset/sitemap:url/sitemap:lastmod, 0, 11), ' ', substring(sitemap:urlset/sitemap:url/sitemap:lastmod, 12, 8)) | concat(substring(sitemap:sitemapindex/sitemap:sitemap/sitemap:lastmod, 0, 11), ' ', substring(sitemap:sitemapindex/sitemap:sitemap/sitemap:lastmod, 12, 8))"/></p>
          <p>This sitemap contains all pages available on <strong>lasbekasi.com</strong></p>
        </div>
        <xsl:choose>
          <xsl:when test="sitemap:urlset">
            <div class="stats">
              <div class="stat-box">
                <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong>
                <span>Total URLs</span>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Priority</th>
                  <th>Change Frequency</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="priority">
                      <xsl:value-of select="sitemap:priority"/>
                    </td>
                    <td class="changefreq">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td class="date">
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>
          <xsl:when test="sitemap:sitemapindex">
            <div class="stats">
              <div class="stat-box">
                <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong>
                <span>Total Sitemaps</span>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Sitemap URL</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <xsl:variable name="sitemapURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td class="date">
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>
        </xsl:choose>
        <div class="footer">
          <p>Generated by <a href="https://lasbekasi.com">Bengkel Las Mandiri</a> | 
          <a href="https://lasbekasi.com/sitemap.xml">View Sitemap Index</a></p>
          <p>This sitemap helps search engines discover and index all pages on our website.</p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

