# SEO Setup Guide for Arstyn

## ✅ What Has Been Implemented

Your Next.js site now has comprehensive SEO optimization:

1. **robots.txt** - Allows search engines to crawl your site
2. **Dynamic sitemap.xml** - Helps Google discover all your pages
3. **Enhanced metadata** - Rich meta tags for search engines and social media
4. **Structured data (JSON-LD)** - Helps Google understand your business
5. **Open Graph & Twitter Cards** - Better social media sharing

---

## 🚀 Critical Next Steps

### 1. Submit Your Site to Google Search Console

**This is the MOST important step!**

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property" and enter: `https://www.arstyn.com`
3. Verify ownership using one of these methods:
    - **HTML file upload** (easiest)
    - **DNS TXT record**
    - **Meta tag** (already set up - see step 4)

### 2. Update Google Verification Code

In `src/app/layout.jsx`, replace this line:

```javascript
google: 'your-google-verification-code-here',
```

With your actual verification code from Google Search Console.

### 3. Submit Your Sitemap to Google

After verification:

1. In Google Search Console, go to "Sitemaps" (left sidebar)
2. Add your sitemap URL: `https://www.arstyn.com/sitemap.xml`
3. Click "Submit"

### 4. Request Indexing

In Google Search Console:

1. Go to "URL Inspection"
2. Enter: `https://www.arstyn.com`
3. Click "Request Indexing"

This tells Google to crawl your site immediately instead of waiting.

---

## 🌐 Environment Variables (Optional)

Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_SITE_URL=https://www.arstyn.com
```

This ensures consistent URLs across development and production.

---

## 🎨 Add Social Media Images

For better social sharing, create these images:

1. **og-image.png** (1200 × 630 pixels)

    - Place in: `public/og-image.png`
    - Used for Facebook, LinkedIn, Twitter
    - Should feature your logo and tagline

2. **logo.png** (Recommended: 500 × 500 pixels)
    - Place in: `public/logo.png`
    - Used in structured data for Google

---

## 📊 Monitor Your Progress

### Check if Google has indexed your site:

Search Google for: `site:www.arstyn.com`

Initially you'll see no results. After 1-7 days, your site should appear.

### Use Google Search Console to track:

-   **Coverage** - Which pages are indexed
-   **Performance** - Click-through rates, impressions, ranking
-   **Core Web Vitals** - Page performance metrics

---

## ⚡ Additional Optimizations

### 1. Add More Pages to Sitemap

As you add more pages/routes, update `src/app/sitemap.js`:

```javascript
export default function sitemap() {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arstyn.com';

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: \`\${baseUrl}/about\`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		// Add more pages here
	];
}
```

### 2. Submit to Other Search Engines

-   **Bing Webmaster Tools**: https://www.bing.com/webmasters/
-   **Yandex Webmaster**: https://webmaster.yandex.com/

### 3. Build Quality Backlinks

-   List your site in relevant directories
-   Create content that others want to link to
-   Guest post on industry blogs
-   Share on social media

### 4. Create a Blog

Adding a blog with regular content will:

-   Increase indexed pages
-   Target more keywords
-   Establish authority
-   Drive organic traffic

### 5. Optimize Page Speed

Use these tools to check and improve speed:

-   [Google PageSpeed Insights](https://pagespeed.web.dev/)
-   [GTmetrix](https://gtmetrix.com/)
-   Next.js Image optimization (already built-in)

### 6. Update Social Media Links

In `src/app/layout.jsx`, add your actual social profiles to the structured data:

```javascript
"sameAs": [
	"https://www.linkedin.com/company/arstyn",
	"https://twitter.com/arstyn",
	"https://github.com/arstyn"
],
```

---

## 📱 Mobile-Friendly Check

Ensure your site works perfectly on mobile:

-   [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## ⏱️ Timeline Expectations

-   **24-48 hours**: Google discovers your site
-   **3-7 days**: Site starts appearing in search results
-   **2-4 weeks**: Full indexing and initial rankings
-   **2-3 months**: Improved rankings as Google trusts your site
-   **6+ months**: Steady organic traffic growth

---

## 🔍 SEO Best Practices Going Forward

1. **Quality Content**: Write unique, valuable content
2. **Keywords**: Use relevant keywords naturally (already done in metadata)
3. **Internal Links**: Link between your pages
4. **Regular Updates**: Keep content fresh
5. **HTTPS**: Ensure SSL certificate is active (required for SEO)
6. **Page Speed**: Keep your site fast
7. **Mobile-First**: Design for mobile users first
8. **Alt Tags**: Add descriptive alt text to all images
9. **Schema Markup**: Expand structured data as needed
10. **Local SEO**: If serving specific regions, add local business schema

---

## 🆘 Troubleshooting

### Site still not showing after 2 weeks?

1. Check `robots.txt` is accessible: https://www.arstyn.com/robots.txt
2. Check `sitemap.xml` is accessible: https://www.arstyn.com/sitemap.xml
3. Verify site is actually deployed and accessible
4. Check Google Search Console for errors
5. Ensure no `noindex` meta tags anywhere
6. Verify DNS is properly configured

### Common Issues:

-   **Redirect Loop**: Make sure www and non-www versions redirect properly
-   **Duplicate Content**: Ensure canonical tags point to preferred version
-   **Slow Load Times**: Optimize images and enable caching
-   **Missing SSL**: Google favors HTTPS sites

---

## 📚 Additional Resources

-   [Google Search Central](https://developers.google.com/search)
-   [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)
-   [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
-   [Ahrefs SEO Basics](https://ahrefs.com/seo)

---

## 🎯 Quick Wins Checklist

-   [ ] Submit site to Google Search Console
-   [ ] Add Google verification code to layout.jsx
-   [ ] Submit sitemap in Google Search Console
-   [ ] Request indexing for homepage
-   [ ] Create og-image.png and logo.png
-   [ ] Create .env.local with NEXT_PUBLIC_SITE_URL
-   [ ] Add social media links to structured data
-   [ ] Test mobile-friendliness
-   [ ] Check page load speed
-   [ ] Set up Google Analytics (recommended)
-   [ ] Submit to Bing Webmaster Tools
-   [ ] Share site on social media for initial traffic

---

**Remember**: SEO is a marathon, not a sprint. It takes time for Google to discover, crawl, and rank your site. Focus on creating quality content and providing value to your users.

Good luck! 🚀
