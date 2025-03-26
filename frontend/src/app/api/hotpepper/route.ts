export async function POST(req: Request) {
  const HOTPEPPER_API_KEY = process.env.HOTPEPPER_API_KEY
  const HOTPEPPER_BASE_URL = process.env.HOTPEPPER_BASE_URL
  
  const body = await req.json()

  const {
    latitude,
    longitude,
    range = 3,
    keyword = '',
    count = 100,
    id,
  } = body

  const params = new URLSearchParams({
    key: HOTPEPPER_API_KEY || '',
    format: 'json'
  })

  if (id) {
    params.set('id', id)
  } else {
    params.set('lat', String(latitude))
    params.set('lng', String(longitude))
    params.set('range', String(range))
    params.set('keyword', keyword)
    params.set('count', String(count))
  }

  try {
    const response = await fetch(`${HOTPEPPER_BASE_URL}?${params.toString()}`)
    const data = await response.json()
    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'API fetch failed' }), { status: 500 })
  }
}
