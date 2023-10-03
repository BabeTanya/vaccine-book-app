import Image from "next/image";

export default function HospitalDetailPage({ params }: { params: { hid: string }}) {
  const mockHospitalRepo = new Map();
  mockHospitalRepo.set('001', { name: 'Chulalongkorn Hospital', image: '/image/chula.jpg' })
  mockHospitalRepo.set('002', { name: 'Rajavithi Hospital', image: '/image/rajavithi.jpg' })
  mockHospitalRepo.set('003', { name: 'Thammasat University Hospital', image: '/image/thammasat.jpg' })



  return (
    <main>
      <h1 className="text-lg font-medium text-center my-5">Hospital ID {params.hid}</h1>
      <div className="flex flex-row my-5">
        <Image src={(mockHospitalRepo.get(params.hid)).image} 
          alt='Hospital Picture'
          width={9} height={0} sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5">{(mockHospitalRepo.get(params.hid)).name}</div>
      </div>
    </main>
  )
}