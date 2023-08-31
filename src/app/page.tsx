import { Banner } from '@/components/Banner/page'
import { Card } from '@/components/Card/page'

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex justify-around m-[20px]"> 
        <Card hospitalName='Chulalongkorn Hospital' imageUrl='/image/chula.jpg'/>
        <Card hospitalName='Rajavithi Hospital' imageUrl='/image/rajavithi.jpg'/>
        <Card hospitalName='Thammasat University Hospital' imageUrl='/image/thammasat.jpg'/>
      </div>
    </main>
  )
}
