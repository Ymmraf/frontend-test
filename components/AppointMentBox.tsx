"use client";

import { Doctor } from "@/type";
import { haveQueue } from "@/util/haveQueue";
import DetailWindow from "./DetailWindow";
import { useState } from "react";

export default function AppointMentBox({
  heightMultiply,
  data,
  doctorName,
  doctor,
  time,
}: {
  heightMultiply: number;
  data: string;
  doctorName: string;
  doctor: Doctor[];
  time: string;
}) {
  const [show, setShow] = useState(false);
  const multiply = Number(heightMultiply);
  const height = 45 * (multiply / 15);
  const classname = `flex w-[500px] rounded-lg h-[${height}px] cursor-pointer hover:scale-[101%] duration-300`;

  function toggleDetail() {
    setShow(() => !show);
  }

  return (
    <div className="relative">
      <div className={classname} onClick={() => toggleDetail()}>
        <div className="w-6 bg-slate-400 rounded-l-lg"></div>
        <div className="bg-orange-400 p-2 rounded-r-lg flex flex-col justify-between">
          <p>{data} </p>
          <p className="text-orange-900">*คลิกเพื่อดูรายละเอียด</p>
        </div>
      </div>
      <DetailWindow
        detail={doctor[haveQueue(time, doctor).index]}
        doctorName={doctorName}
        show={show}
        toggleDetail={toggleDetail}
      />
    </div>
  );
}
