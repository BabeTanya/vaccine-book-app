"use client";
import { useState } from "react";
import style from "@/components/banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const cover = [
    "/image/banner.jpg",
    "/image/banner2.jpg",
    "/image/banner3.jpg",
    "/image/banner4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

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
      {
        session ? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-500 text-xl">
          Hello {session.user?.name} </div> : null
      }
      <button className="bg-white text-cyan-600 border border-cyan-600
      font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
      hover:bg-cyan-600 hover:text-white hover:border-transparent"
      onClick={(e) => { e.stopPropagation(); router.push('/hospital')}}>
        Select Your Hospital
      </button>
    </div>
  );
}
