import Image from "next/image";
import { InteractiveCard } from "./InteractiveCard";
import Rating from "@mui/material/Rating";
import { SyntheticEvent, useEffect, useState } from "react";

export function ProductCard({
  hospitalName,
  imageUrl,
  hospitalMap,
  onScoreChange,
}: {
  hospitalName: string;
  imageUrl: string;
  hospitalMap: Map<string, number>;
  onScoreChange: Function;
}) {
  const [score, setScore] = useState<number | undefined>(0);
  useEffect(() => {
    setScore(hospitalMap.get(hospitalName));
  }, [hospitalMap]);
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
      <div className="w-full h-[15%] p-[10px]">
        <h4>{hospitalName}</h4>
      </div>
      <Rating
        name="simple-controlled"
        value={score}
        onClick={(e) => { 
          e.stopPropagation();
        }}
        onChange={(event: SyntheticEvent<Element, Event>, newValue: any) => {
          onScoreChange(hospitalName, newValue);
        }}
      />
    </InteractiveCard>
  );
}
