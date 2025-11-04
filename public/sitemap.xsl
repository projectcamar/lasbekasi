<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - Bengkel Las Mandiri</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            font-size: 14px;
            color: #333;
            background: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          #header {
            background: #667eea;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          #header h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
            font-weight: 600;
          }
          #header p {
            margin: 0;
            font-size: 14px;
            opacity: 0.9;
          }
          #content {
            max-width: 1200px;
            margin: 30px auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .info-box {
            background: #f8f9fa;
            border-left: 4px solid #667eea;
            padding: 15px 20px;
            margin-bottom: 30px;
            border-radius: 4px;
          }
          .info-box p {
            margin: 5px 0;
            line-height: 1.6;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            background: #667eea;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #e9ecef;
          }
          tr:hover {
            background: #f8f9fa;
          }
          a {
            color: #667eea;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .url-col {
            max-width: 600px;
            word-break: break-all;
          }
          #footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 13px;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            flex-wrap: wrap;
          }
          .stat-box {
            flex: 1;
            min-width: 200px;
            background: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e9ecef;
          }
          .stat-number {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
          }
          .stat-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div id="header">
          <h1>XML Sitemap</h1>
          <p>This XML Sitemap is used by search engines to discover and index your content</p>
        </div>
        
        <div id="content">
          <div class="info-box">
            <p><strong>What is a sitemap?</strong></p>
            <p>A sitemap is a file that lists all the important pages on your website. Search engines like Google use this file to discover, crawl, and index your content more efficiently.</p>
            <p style="margin-top: 10px;"><strong>Learn more:</strong> <a href="https://www.sitemaps.org/" target="_blank">sitemaps.org</a></p>
          </div>

          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">
              <h2>Sitemap Index</h2>
              <p>This XML Sitemap Index file contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps</strong>.</p>
              
              <table>
                <thead>
                  <tr>
                    <th>Sitemap</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td class="url-col">
                        <a href="{sitemap:loc}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <div class="stats">
                <div class="stat-box">
                  <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                  <div class="stat-label">Total URLs</div>
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
                      <td class="url-col">
                        <a href="{sitemap:loc}">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:priority"/>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:changefreq"/>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </div>

        <div id="footer">
          <p>Generated by <strong>Bengkel Las Mandiri</strong> | <a href="https://lasbekasi.com" target="_blank">lasbekasi.com</a></p>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
