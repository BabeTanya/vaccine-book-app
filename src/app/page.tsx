import { Banner } from '@/components/Banner/page'
import { Card } from '@/components/Card/page'

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{margin: "20px"}}> 
        <Card />
      </div>
    </main>
  )
}
