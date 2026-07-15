import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const substackUrl = searchParams.get('url') || 'sarafee.substack.com'
  const limit = parseInt(searchParams.get('limit') || '3', 10)

  try {
    // Fetch the RSS feed from Substack
    const rssUrl = `https://${substackUrl}/feed`
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PersonalWebsite/1.0)'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`)
    }

    const xmlText = await response.text()
    
    // Parse RSS XML (simple parser for Substack RSS format)
    const posts = parseSubstackRSS(xmlText, limit)

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching Substack feed:', error)
    return NextResponse.json(
      { error: 'Failed to fetch Substack feed', posts: [] },
      { status: 500 }
    )
  }
}

function parseSubstackRSS(xmlText: string, limit: number) {
  const posts: any[] = []
  
  try {
    // Extract items from RSS feed
    const itemRegex = /<item>(.*?)<\/item>/gs
    const items = xmlText.match(itemRegex) || []

    for (let i = 0; i < Math.min(items.length, limit); i++) {
      const item = items[i]
      
      // Extract title
      const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
      const title = titleMatch ? titleMatch[1] : 'Untitled'

      // Extract link
      const linkMatch = item.match(/<link>(.*?)<\/link>/)
      const url = linkMatch ? linkMatch[1] : ''

      // Extract description/subtitle
      const descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s)
      let subtitle = ''
      if (descMatch) {
        // Strip HTML tags and get first 150 characters
        const cleanText = descMatch[1].replace(/<[^>]*>/g, '').trim()
        subtitle = cleanText.substring(0, 150) + (cleanText.length > 150 ? '...' : '')
      }

      // Extract published date
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/)
      const publishedAt = pubDateMatch ? new Date(pubDateMatch[1]).toISOString() : new Date().toISOString()

      // Extract cover image (if available in enclosure or content)
      let coverImage: string | undefined
      const enclosureMatch = item.match(/<enclosure[^>]*url="([^"]*)"[^>]*\/>/)
      if (enclosureMatch) {
        coverImage = enclosureMatch[1]
      } else {
        // Try to find image in content
        const imgMatch = item.match(/<img[^>]*src="([^"]*)"[^>]*>/)
        if (imgMatch) {
          coverImage = imgMatch[1]
        }
      }

      // Generate unique ID from URL or index
      const id = url ? url.split('/').pop() || `post-${i}` : `post-${i}`

      posts.push({
        id,
        title,
        subtitle,
        url,
        publishedAt,
        coverImage
      })
    }
  } catch (error) {
    console.error('Error parsing RSS:', error)
  }

  return posts
}