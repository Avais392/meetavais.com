import { siteConfig } from '@/lib/config';
import { projects } from '@/lib/data';

export async function GET() {
    const staticPages = ['/', '/projects', '/stack', '/about', '/contact'];
    
    const projectPages = projects.map(project => `/projects/${project.slug}`);

    const allPages = [...staticPages, ...projectPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages.map(url => `
    <url>
        <loc>${siteConfig.url}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`).join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
