import Image from "next/image";
import { InteractiveCard } from "./InteractiveCard";

interface Props {
  hospitalName: string;
  imageUrl: string;
}

export function ProductCard({ hospitalName, imageUrl }: Props) {
  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imageUrl}
          alt="bannerImage"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[10px]">
        <h4>{hospitalName}</h4>
      </div>
    </InteractiveCard>
  );
}
