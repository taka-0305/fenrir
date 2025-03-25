export async function POST(req: Request) {
  const HOTPEPPER_API_KEY = process.env.HOTPEPPER_API_KEY
  const HOTPEPPER_BASE_URL = process.env.HOTPEPPER_BASE_URL
  
  const body = await req.json()

  const { latitude, longitude, range = 3, keyword = '', start = 1 } = body

  const params = new URLSearchParams({
    key: HOTPEPPER_API_KEY || '',
    lat: String(latitude),
    lng: String(longitude),
    range: String(range),
    keyword: String(keyword),
    start: String(start),
    count: '10',
    format: 'json'
  })

  try {
    const response = await fetch(`${HOTPEPPER_BASE_URL}?${params.toString()}`)
    const data = await response.json()
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'API fetch failed' }), { status: 500 })
  }
}
