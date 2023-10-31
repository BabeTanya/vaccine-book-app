'use client'
import { cancelBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux";

export default function MyBooking() {
  const dispatch = useDispatch<AppDispatch>();

  const bookItem = useAppSelector((state) => state.bookSlice.bookItem)

  const handleCancelBooking = () => {
    dispatch(cancelBooking())
  }

  return (
    <main className="w-[100%] flex flex-col items-center space-y-10 ">
      <div className="text-xl font-medium mt-10">
        การจองของฉัน
      </div>
      <div>
        {bookItem ? (
          <div className="space-y-4">
            <div>ชื่อ: {bookItem.firstName}</div>
            <div>นามสกุล: {bookItem.lastName}</div>
            <div>รหัสประจำตัวประชาชน: {bookItem.citizenId}</div>
            <div>สถานที่รับวัคซีน: {bookItem.location}</div>
            <div>วันที่รับวัคซีน: {bookItem.reserveDate}</div>

            <button 
              className="block rounded-md bg-sky-600 hover:bg-sky-800 px-3 py-2 text-white shadow-sm w-[400px]"
              onClick={handleCancelBooking}>
              ยกเลิกการจอง
            </button>
          </div>
          ) : (<>No Vaccine Booking</>)}
      </div>
    </main>
  )
}