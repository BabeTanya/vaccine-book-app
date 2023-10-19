'use client'
import Link from "next/link";
import { ProductCard } from "./ProductCard";

export default async function HospitalCatalog({ hospitalJson }: {hospitalJson: Object}) {
  const hospitalJsonReady = await hospitalJson
  return (
    <>
      <div style={{ margin: "20px", display: "flex",
        flexDirection: "row", alignContent: "space-around",
        justifyContent: "space-around", flexWrap: "wrap", "padding": "10px"}}>
          {
            hospitalJsonReady.data.map((hospitalItem: Object) => (
              <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                <ProductCard hospitalName={hospitalItem.name} imageUrl={hospitalItem.picture} hospitalMap={undefined} onScoreChange={undefined}></ProductCard>
              </Link>  
            ))
          }
        </div>
    </>
  )
}