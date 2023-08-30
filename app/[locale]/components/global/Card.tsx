import React from 'react'
import ICard from '@/interfaces/ICard'
import styles from "@/styles/card.module.css"
import Link from 'next/link'
import Image from "next/image"
const Card = () => {
    return (
        <Link href={`/detail/some-id`} className={styles.card}>
            <div className={styles.container}>
                <Image src={"/images/product.png"} alt='' width={308} height={308} />
                <h3>JBL JR 310BT</h3>
                <div className={styles.prices}>
                    <p className={styles.oldPrice}>400</p>
                    <p className={styles.price}>300</p>
                </div>
            </div>
        </Link>
    )
}

export default Card