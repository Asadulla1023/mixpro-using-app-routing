"use client";
import Image from "next/image";
import styles from "@/styles/page.module.css";
import { useTranslations } from "next-intl";
import Container from "./components/global/Container";
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import Footer from "./components/global/Footer";
import Ads from "./components/local/Ads"
import CategoryCard from "./components/global/CategoryCard";
export default function Home() {
  const t = useTranslations();
  return (
    <main className={styles.main}>
      <TopHeader />
      <Header />
      <Categories />
      <Ads />
      <CategoryCard/>
      <Footer />
      <h1>{t("title")}</h1>

    </main>
  );
}
