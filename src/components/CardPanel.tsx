"use client";
import { useReducer } from "react";
import { ProductCard } from "./ProductCard";

export function CardPanel() {

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
        <ProductCard
          hospitalName="Chulalongkorn Hospital"
          imageUrl="/image/chula.jpg"
       
          hospitalMap={hospitalMap}
          onScoreChange={(hospital: string, score: number) => {
            dispatchScoreHospital({ type: "rating", hospital, score });
          }}
        />
        <ProductCard
          hospitalName="Rajavithi Hospital"
          imageUrl="/image/rajavithi.jpg"
        
          hospitalMap={hospitalMap}
          onScoreChange={(hospital: string, score: number) => {
            dispatchScoreHospital({ type: "rating", hospital, score });
          }}
        />
        <ProductCard
          hospitalName="Thammasat University Hospital"
          imageUrl="/image/thammasat.jpg"
          
          hospitalMap={hospitalMap}
          onScoreChange={(hospital: string, score: number) => {
            dispatchScoreHospital({ type: "rating", hospital, score });
          }}
        />
      </div>
   
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
  );
}
