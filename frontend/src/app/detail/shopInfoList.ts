import { Shop } from '@/types/shop'

export const getShopInfoList = (shop: Shop) => [
  { label: '住所', value: shop.address },
  { label: 'アクセス', value: shop.access },
  { label: '営業時間', value: shop.open },
  { label: '定休日', value: shop.close },
  { label: '平均予算', value: shop.budget?.average },
  { label: 'カード利用', value: shop.card },
  { label: 'WiFi', value: shop.wifi },
  {
    label: '最大収容人数',
    value: shop.party_capacity ? `${shop.party_capacity} 名` : undefined,
  },
  { label: 'その他', value: shop.shop_detail_memo },
]
