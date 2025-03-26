'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export const useSearchForm = () => {
  const router = useRouter()

  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [keyword, setKeyword] = useState('')
  const [range, setRange] = useState<number | "">("");
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatitude(pos.coords.latitude)
          setLongitude(pos.coords.longitude)
        },
        () => setError('位置情報の取得に失敗しました')
      )
    } else {
      setError('このブラウザでは位置情報が使えません')
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!latitude || !longitude) {
      setError('現在地が取得できていません')
      return
    }

    const params = new URLSearchParams({
      keyword,
      range: range.toString(),
      lat: latitude.toString(),
      lng: longitude.toString(),
    })

    router.push(`/results?${params.toString()}`)
  }

  return {
    keyword,
    setKeyword,
    range,
    setRange,
    error,
    handleSearch,
  }
}
