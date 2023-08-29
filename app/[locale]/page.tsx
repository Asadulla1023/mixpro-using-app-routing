"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import { useTranslations } from 'next-intl'
import Container from './components/global/Container'
import Ads from "./components/local/Ads"
export default function Home() {
  const t = useTranslations()
  return (
    <main className={styles.main}>
      <h1>{t("title")}</h1>
      <Ads/>
     
    </main>
  )
}
