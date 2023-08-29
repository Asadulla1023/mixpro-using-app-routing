"use client";
import Image from "next/image";
import styles from "@/styles/page.module.css";
import { useTranslations } from "next-intl";
import Container from "./components/global/Container";
import Header from "./components/global/Header";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import Footer from "./components/global/Footer";

export default function Home() {
  const t = useTranslations();
  return (
    <main className={styles.main}>
      <TopHeader />
      <Header />
      <Categories />
      <h1 style={{ marginTop: 140 }}>{t("title")}</h1>
      <Container>
        <div>
          <h1>title</h1>
          <p>description</p>
        </div>
      </Container>
      <div className={styles.container}>
        <div>ewfwef</div>
      </div>
      <Container>
        <div>
          <h1>title</h1>
          <p>description</p>
        </div>
      </Container>
        <Footer />

    </main>
  );
}
