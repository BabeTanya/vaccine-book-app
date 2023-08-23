import style from "@/components/Banner/banner.module.css"
import Image from "next/image"

export function Banner () {
    return (
        <div className={style.banner}>
            <Image src="/image/banner.jpg" alt="bannerImage" fill objectFit="cover" priority/>
            <div className={style.bannerText}>
                <h1>มหกรรม ฉีดวัคซีนช่วยชาติ ครั้งที่ 8</h1>
                <h3>สามารถจองโรงพยาบาลที่ท่านต้องการเข้ารับบริการฉีดวัคซีนด้านล่าง</h3>
            </div>
        </div>
    );
}