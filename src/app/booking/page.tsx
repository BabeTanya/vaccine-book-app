"use client";
import { MenuItem, Select, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Booking() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-10 ">
      <div className="text-xl font-medium mt-10">
        แบบฟอร์มลงทะเบียนรับวัคซีน
      </div>
      <div className="text-md text-left text-gray-600">
        <div className="mt-4">ชื่อ</div>
        <TextField id="first-name" label="" variant="outlined" fullWidth />
        <div className="mt-4">นามสกุล</div>
        <TextField id="last-name" label="" variant="outlined" fullWidth />
        <div className="mt-4">รหัสประจำตัวประชาชน</div>
        <TextField id="national-id" label="" variant="outlined" fullWidth />
        <div className="mt-4">สถานที่รับวัคซีน</div>
        <Select
          fullWidth
          name="location"
          id="location"
          className="h-[3.5em] w-[400px]"
        >
          <MenuItem value="BKK">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="CNX">Rajavithi Hospital</MenuItem>
          <MenuItem value="HKT">Thammasat University Hospital</MenuItem>
        </Select>
        <div className="mt-6">วันที่รับวัคซีน</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker className="bg-white w-[400px]" />
        </LocalizationProvider>
      </div>
      <button className="block rounded-md bg-sky-600 hover:bg-sky-800 px-3 py-2 text-white shadow-sm w-[400px]">
        ลงทะเบียน
      </button>
    </main>
  );
}
