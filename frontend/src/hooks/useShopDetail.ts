import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useShopContext } from '@/context/shopContext'
import { Shop } from '@/types/shop'

export const useShopDetail = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const { allShops } = useShopContext()

  const [shop, setShop] = useState<Shop | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError('店舗IDが指定されていません')
      setLoading(false)
      return
    }

    const cachedShop = allShops.find((s) => s.id === id)
    if (cachedShop) {
      setShop(cachedShop)
      setLoading(false)
      return
    }

    const fetchShop = async () => {
      try {
        const res = await fetch('/api/hotpepper', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        })

        if (!res.ok) throw new Error('店舗情報の取得に失敗しました')

        const json = await res.json()
        const shopData = json.results?.shop?.[0]

        if (!shopData) throw new Error('該当店舗が見つかりませんでした')

        setShop(shopData)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchShop()
  }, [id, allShops])

  return {
    shop,
    loading,
    error,
  }
}
