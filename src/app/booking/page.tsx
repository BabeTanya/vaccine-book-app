"use client";
import { useEffect, useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interfaces";
import { createOrUpdateBooking } from "@/redux/features/bookSlice";
import dayjs from "dayjs";

export default function Booking() {
  const dispatch = useDispatch<AppDispatch>();

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [citizenId, setCitizenId] = useState<string>();

  const [reserveDate, setReserveDate] = useState(null);
  const [location, setLocation] = useState("BKK");
  const { data: session } = useSession();
  const [profile, setProfile] = useState<any>(null);

  const makeReservation = () => {
    if (firstName && lastName && citizenId && reserveDate && location) {
      const item: BookingItem = {
        firstName,
        lastName,
        citizenId,
        location,
        reserveDate: dayjs(reserveDate).format('YYYY/MM/DD'),
      }
      dispatch(createOrUpdateBooking(item));
    }
  }
  
  useEffect(() => {
    if (session) {
      getUserProfile(session?.user.token).then((profile) => setProfile(profile.data));
    }
  }, [])

  return (
    <main className="w-[100%] flex flex-col items-center space-y-10 ">
      <div className="text-xl font-medium mt-10">
        แบบฟอร์มลงทะเบียนรับวัคซีน
      </div>
      <div className="text-md text-left text-gray-600">
        <div>Name: {profile?.name}</div>
        <div>Email: {profile?.email}</div>
        <div>Tel: {profile?.tel}</div>
        <div>Member Since: {profile?.createdAt ? new Date(profile?.createdAt).toString() : null}</div>

        <div className="mt-4">ชื่อ</div>
        <TextField id="first-name" label="" variant="outlined" fullWidth onChange={(e) => setFirstName(e.target.value)} />
        <div className="mt-4">นามสกุล</div>
        <TextField id="last-name" label="" variant="outlined" fullWidth onChange={(e) => setLastName(e.target.value)} />
        <div className="mt-4">รหัสประจำตัวประชาชน</div>
        <TextField id="national-id" label="" variant="outlined" fullWidth onChange={(e) => setCitizenId(e.target.value)} />
        <div className="mt-4">สถานที่รับวัคซีน</div>
        <Select
          fullWidth
          name="location"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="h-[3.5em] w-[400px]"
        >
          <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
        </Select>
        <div className="mt-6">วันที่รับวัคซีน</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="bg-white w-[400px]"
            value={reserveDate}
            onChange={(value) => setReserveDate(value)}
          />
        </LocalizationProvider>
      </div>
      <button 
        className="block rounded-md bg-sky-600 hover:bg-sky-800 px-3 py-2 text-white shadow-sm w-[400px]"
        onClick={makeReservation}>
        ลงทะเบียน
      </button>
    </main>
  );
}
