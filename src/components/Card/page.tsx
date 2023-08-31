import style from "@/components/Card/card.module.css"
import Image from "next/image"

interface Props {
    hospitalName: string;
    imageUrl: string;

}

export function Card ({ hospitalName, imageUrl }: Props) {
    return (
        <div className="w-1/5 h-[300px] rounded-lg shadow-lg">
            <div  className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imageUrl} alt="bannerImage" fill className="object-cover rounded-t-lg"/>
            </div>
            <div className="w-full h-[30%] p-[10px]"> 
                <h4>{hospitalName}</h4>
            </div>
        </div>
    );
}