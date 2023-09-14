"use client";
import { useState } from "react";
import style from "@/components/banner.module.css";
import Image from "next/image";

export default function Banner() {
  const cover = [
    "/image/banner.jpg",
    "/image/banner2.jpg",
    "/image/banner3.jpg",
    "/image/banner4.jpg",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className={style.banner} onClick={() => setIndex(index + 1)}>
      <Image
        src={cover[index % 4]}
        alt="bannerImage"
        fill
        objectFit="cover"
        priority
      />
      <div className={style.bannerText}>
        <h1 className="text-4xl font-medium">
          มหกรรม ฉีดวัคซีนช่วยชาติ ครั้งที่ 8
        </h1>
        <h3 className="text-xl font-serif">
          สามารถจองโรงพยาบาลที่ท่านต้องการเข้ารับบริการฉีดวัคซีนด้านล่าง
        </h3>
      </div>
    </div>
  );
}
