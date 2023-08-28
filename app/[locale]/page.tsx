"use client"
import Image from 'next/image'
import styles from '@/styles/page.module.css'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <main className={styles.main}>
      <h1>{t("title")}</h1>
    </main>
  )
}
