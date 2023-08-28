import React from 'react'
import { ADS_UZ, ADS_RU } from '@/constant'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import ICard from '@/interfaces/ICard'
const Header = () => {
  const t = useTranslations()
  const path = usePathname()
  return (
    <div>
      {
        path === "/ru" ? ADS_RU.map((e: ICard)=> {
          return ""
        }): ADS_UZ.map((e: ICard)=> {
          return ""
        })
      }</div>
  )
}

export default Header