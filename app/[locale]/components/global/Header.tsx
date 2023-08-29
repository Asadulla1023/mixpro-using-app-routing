import React from "react";
import styles from "@/styles/header.module.css";
import Container from "./Container";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerSection}>
          <h1>MIXPRO</h1>
          <div className={styles.search}>
            <input type="text" placeholder="search" />
            <Image
              src="icon/search.svg"
              alt="search icon"
              width={22}
              height={22}
            />
          </div>
          <div className={styles.icon}>
            <Image src={"icon/noti.svg"} width={20} height={23} alt="noti" />
            <Image src={"icon/user.svg"} width={23} height={23} alt="noti" />
            <Image src={"icon/cart.svg"} width={26} height={23} alt="noti" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
