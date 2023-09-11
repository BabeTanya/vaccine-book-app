import { Banner } from "@/components/Banner";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex justify-around m-[20px]">
        <ProductCard
          hospitalName="Chulalongkorn Hospital"
          imageUrl="/image/chula.jpg"
        />
        <ProductCard
          hospitalName="Rajavithi Hospital"
          imageUrl="/image/rajavithi.jpg"
        />
        <ProductCard
          hospitalName="Thammasat University Hospital"
          imageUrl="/image/thammasat.jpg"
        />
      </div>
    </main>
  );
}
