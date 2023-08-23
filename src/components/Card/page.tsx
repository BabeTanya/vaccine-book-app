import style from "@/components/Card/card.module.css"
import Image from "next/image"

export function Card () {
    return (
        <div className={style.card}>
            <div  className={style.cardImage}>
                <Image src="/image/vaccine-covid-19.jpg" alt="bannerImage" fill objectFit="cover" priority/>
            </div>
            <div className={style.cardText}> 
                <h4>วัคซีน Covid-19</h4>
                <p style={{fontSize: "12px"}}>วัคซีนป้องกันโควิด-19 จะช่วยกระตุ้นให้ร่างกายสร้างภูมิคุ้มกันต่อเชื้อไวรัสนี้ขึ้นมา </p>
            </div>
        </div>
    );
}