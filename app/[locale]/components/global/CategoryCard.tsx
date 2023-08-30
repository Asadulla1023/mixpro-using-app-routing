import React from "react";
import ICategoryCard from "@/interfaces/ICategoryCard";
import Container from "./Container";
import Image from "next/image";
import styles from "@/styles/CategoryCard.module.css";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { CATEGORYCARD_RU, CATEGORYCARD_UZ } from "@/constant";
import { v4 as uuidv4 } from "uuid";
const CategoryCard = () => {
  const t = useTranslations();
  const path = usePathname();
  return (
    <div className={styles.categoryCard}>
      <Container>
        <div className={styles.categoryCardSection}>
          {path === "/ru"
            ? CATEGORYCARD_RU.map((e: ICategoryCard) => {
                return (
                  <div key={uuidv4()} className={styles.card}>
                    <h4>{e.title}</h4>
                    <button>МАГАЗИН КОЛЛЕКЦИЯ</button>
                    <Image width={150} height={150} src={e.image} alt="iud" />
                  </div>
                );
              })
            : CATEGORYCARD_UZ.map((e: ICategoryCard, index) => {
                return (
                  <div key={uuidv4()} className="mazgi">
                    <h4>{e.title}</h4>
                    <button>SHOP COLLECTION</button>
                    <Image width={150} height={150} src={e.image} alt="iud" />
                  </div>
                );
              })}
        </div>
      </Container>
    </div>
  );
};

export default CategoryCard;
