"use client";
import { useReducer } from "react";
import { ProductCard } from "./ProductCard";
import Link from "next/link";

export function CardPanel() {
  const mockHospitalRepo = [
    {
      hid: '001',
      name: 'Chulalongkorn Hospital',
      image: '/image/chula.jpg'
    },
    {
      hid: '002',
      name: 'Rajavithi Hospital',
      image: '/image/rajavithi.jpg'
    },
    {
      hid: '003',
      name: 'Thammasat University Hospital',
      image: '/image/thammasat.jpg'
    }
  ]
  const scoreReducer = (
    hospitalMap: Map<string, number>,
    action: { type: string; hospital: string; score: number }
  ) => {
    switch (action.type) {
      case "rating": {
        hospitalMap.set(action.hospital, action.score);
        return new Map(hospitalMap);
      }
      case "remove": {
        hospitalMap.delete(action.hospital);
        return new Map(hospitalMap);
      }
      default:
        return hospitalMap;
    }
  };

  const [hospitalMap, dispatchScoreHospital] = useReducer(
    scoreReducer,
    new Map()
  );

 
  return (
    <div>
      <div className="flex justify-around m-[20px]">
        {
          mockHospitalRepo.map((hospitalItem) => (
            <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
              <ProductCard
                hospitalName={hospitalItem.name}
                imageUrl={hospitalItem.image}
            
                hospitalMap={hospitalMap}
                onScoreChange={(hospital: string, score: number) => {
                  dispatchScoreHospital({ type: "rating", hospital, score });
                }}
              />
            </Link>
          ))
        }
      </div>
   
      <div className="text-center">
        {Array.from(hospitalMap.keys()).map((hospital) => (
          <div
            key={hospital}
            onClick={() =>
              dispatchScoreHospital({
                type: "remove",
                hospital,
                score: 0,
              })
            }
          >
            {hospital} {hospitalMap.get(hospital)}
          </div>
        ))}
      </div>
    </div>
  );
}
