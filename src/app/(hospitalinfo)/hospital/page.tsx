import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function Hospital() {
  const hospitals = getHospitals();
  const session = await getServerSession(authOptions)
  const profile = session?.user ? await getUserProfile(session?.user.token!) : null;

  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select your hospital</h1>
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <HospitalCatalog hospitalJson={hospitals}/>
      </Suspense>
      {profile?.data.role == "admin" ? <AddHospitalForm/> : null }
    </main>
  );
}