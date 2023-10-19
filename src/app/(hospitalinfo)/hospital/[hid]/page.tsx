import getHospital from "@/libs/getHospital";
import Image from "next/image";

export default async function HospitalDetailPage({ params }: { params: { hid: string }}) {
  // const mockHospitalRepo = new Map();
  // mockHospitalRepo.set('001', { name: 'Chulalongkorn Hospital', image: '/image/chula.jpg' })
  // mockHospitalRepo.set('002', { name: 'Rajavithi Hospital', image: '/image/rajavithi.jpg' })
  // mockHospitalRepo.set('003', { name: 'Thammasat University Hospital', image: '/image/thammasat.jpg' })

  const hospitalDetail = await getHospital(params.hid);

  return (
    <main>
      <h1 className="text-lg font-medium text-center my-5">Hospital ID {hospitalDetail.data.id}</h1>
      <div className="flex flex-row my-5">
        <Image src={hospitalDetail.data.picture} 
          alt='Hospital Picture'
          width={9} height={0} sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5 text-left">
          <div className="mb-5">{hospitalDetail.data.name}</div>
          <div>Address: {hospitalDetail.data.address}</div>
          <div>District: {hospitalDetail.data.district}</div>
          <div>Province: {hospitalDetail.data.province}</div>
          <div>Postcode: {hospitalDetail.data.postalcode}</div>
          <div>Tel: {hospitalDetail.data.tel}</div>

        </div>
      </div>
    </main>
  )
}