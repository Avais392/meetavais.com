import { siteConfig } from "@/lib/config";

export async function GET() {
    const robots = `
User-agent: *
Allow: /

Sitemap: ${siteConfig.url}/sitemap.xml
`.trim();

    return new Response(robots, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
