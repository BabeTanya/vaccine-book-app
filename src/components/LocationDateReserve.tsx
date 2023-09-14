"use client";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function LocationDateReserve() {
  const [reserveDate, setReserveDate] = useState(null);
  const [location, setLocation] = useState("BKK");

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex-row justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={(value: any) => setReserveDate(value)}
        />
      </LocalizationProvider>
      <Select
        variant="standard"
        name="location"
        id="location"
        value={location}
        onChange={(e: any) => setLocation(e.target.value)}
        className="h-[2em] w-[200px]"
      >
        <MenuItem value="BKK">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="CNX">Rajavithi Hospital</MenuItem>
        <MenuItem value="HKT">Thammasat University Hospital</MenuItem>
      </Select>
    </div>
  );
}
