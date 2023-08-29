import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { ADS_UZ, ADS_RU } from "@/constant";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import ICard from "@/interfaces/ICard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import styles from "@/styles/ads.module.css";
// import {
//     arrow,
//     customers_1,
//     customers_2,
//     blog_post_middle,
//     avatar,
// } from "@assets/index";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../global/Container";
import Link from "next/link";

const Ads = () => {
  const t = useTranslations();
  const path = usePathname();
  return (
    <Container>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {path === "/ru"
          ? ADS_RU.map((e: ICard, index) => {
              return (
                <SwiperSlide key={uuidv4()}>
                  <Link href={e.url} className={styles.adsSection}>
                    <div>
                      <div className={styles.left}>
                        <h4>{e.manifacturer}</h4>
                        <h1>{e.title}</h1>
                        <p>{e.desc}</p>
                        <button>shop now</button>
                      </div>
                      <div className={styles.right}>
                        <Image
                          width={643}
                          height={643}
                          src={e.images[0]}
                          alt="ferfr"
                        />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })
          : ADS_UZ.map((e: ICard) => {
              return (
                <SwiperSlide key={uuidv4()}>
                  <Link href={e.url} className={styles.adsSection}>
                    <div>
                      <div className="left">
                        <h4>{e.manifacturer}</h4>
                        <h1>{e.title}</h1>
                        <p>{e.desc}</p>
                        <button>shop now</button>
                      </div>
                      <div className="right">
                        <Image
                          width={643}
                          height={643}
                          src={e.images[0]}
                          alt="ferfr"
                        />
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </Container>
  );
};

export default Ads;
