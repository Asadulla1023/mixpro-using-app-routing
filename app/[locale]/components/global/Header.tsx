import React from 'react'
import { ADS_UZ, ADS_RU } from '@/constant'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
const Header = () => {
  const t = useTranslations()
  const path = usePathname()
  return (
    <div>
      {
        path === "/ru" ? ADS_RU.map((e)=> {
          return ""
        }): ADS_UZ.map((e)=> {
          return ""
        })
      }</div>
  )
}

export default Header