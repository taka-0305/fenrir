export type Shop = {
  id: string
  name: string
  logo_image?: string
  name_kana?: string
  address: string
  station_name?: string
  ktai_coupon?: string
  large_service_area?: { code: string; name: string }
  service_area?: { code: string; name: string }
  large_area?: { code: string; name: string }
  middle_area?: { code: string; name: string }
  small_area?: { code: string; name: string }
  lat: number
  lng: number
  genre: {
    code?: string;
    name: string;
    catch: string
  }
  sub_genre?: { code?: string; name?: string }
  budget?: {
    code?: string
    name?: string
    average?: string
  }
  budget_memo? :string
  catch: string
  capacity?: number
  access: string
  mobile_access?: string
  urls: { pc: string }
  photo: {
    pc: { l: string; m: string; s: string }
    mobile?: { l?: string; s?: string }
  }
  open?: string
  close?: string
  party_capacity?: number
  wifi?: string
  wedding?: string
  course?: string
  free_drink?: string
  free_food?: string
  private_room?: string
  horigotatsu?: string
  tatami?: string
  card?: string
  non_smoking?: string
  charter?: string
  ktai?: string
  parking?: string
  barrier_free?: string
  other_memo?: string
  sommelier?: string
  open_air?: string
  show?: string
  equipment?: string
  karaoke?: string
  band?: string
  tv?: string
  english?: string
  pet?: string
  child?: string
  lunch?: string
  midnight?: string
  shop_detail_memo?: string
  coupon_urls?: {
    pc?: string
    sp?: string
  }
}
