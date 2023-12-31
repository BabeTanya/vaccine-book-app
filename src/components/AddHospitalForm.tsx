import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";

export default function AddHospitalForm() {

  const addHospital = async (addHospitalForm: FormData) => {
    "use server"
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name,
        address,
        district,
        province,
        postalcode,
        tel,
        picture,
      })
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <>
      <form action={addHospital}>
        <div className="text-xl text-blue-700">Create Hospital</div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
          <input type="text" required id="name" name="name" placeholder="Hospital name"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-4--"/>
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="address">Address</label>
          <input type="text" required id="address" name="address" placeholder="Hospital address"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-4--"/>
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="district">District</label>
          <input type="text" required id="district" name="district" placeholder="Hospital district"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-4--"/>
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="province">Province</label>
          <input type="text" required id="province" name="province" placeholder="Hospital province"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-4--"/>
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="postalcode">Postal code</label>
          <input type="text" required id="postalcode" name="postalcode" placeholder="Hospital postalcode"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-4--"/>
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Tel</label>
          <input type="text" required id="tel" name="tel" placeholder="Hospital tel"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-4--"/>
        </div>
        <div className="flex items-center w-1/2 my-2">
          <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">Picture Url</label>
          <input type="text" required id="picture" name="picture" placeholder="Hospital picture url"
            className="bg-white border-2 border-gray-200 rounded w-full p-2
            text-gray-700 focus:outline-none focus:border-blue-4--"/>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
          Add New Hospital
        </button>
      </form>
    </>
  )
}