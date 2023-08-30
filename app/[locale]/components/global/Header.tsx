import React from "react";
import styles from "@/styles/header.module.css";
import Container from "./Container";
import Image from "next/image";
import { ADS_UZ, ADS_RU } from "@/constant";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import ICard from "@/interfaces/ICard";
const Header = () => {
  const t = useTranslations();
  const path = usePathname();
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerSection}>
          <h1>MIXPRO</h1>
          <div className={styles.search}>
            <input type="text" placeholder="search" />
            <Image
              src="/icons/search.svg"
              alt="search icon"
              width={22}
              height={22}
            />
          </div>
          <div className={styles.icon}>
            <Image src={"icons/noti.svg"} width={20} height={23} alt="noti" />
            <Image src={"icons/user.svg"} width={23} height={23} alt="noti" />
            <Image src={"icons/cart.svg"} width={26} height={23} alt="noti" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
