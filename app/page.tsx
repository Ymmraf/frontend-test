"use client";
import QueueSection from "@/components/QueueSection";
import { FaRegClock } from "react-icons/fa";
import Image from "next/image";
import getTimeTable from "@/util/getTimeTable";
import DetailWindow from "@/components/DetailWindow";
import AppointMentBox from "@/components/AppointMentBox";
import { useEffect, useState } from "react";
import { doctor1, doctor2, doctor3 } from "@/data/doctorQueues";
import { haveQueue } from "@/util/haveQueue";

export default function Home() {
  const [doctor, setDoctor] = useState(doctor1)
  const [select, setSelect] = useState('doctor1')
  const timeTable = getTimeTable()

  function changeDoctor(event : React.ChangeEvent<any>){
    setSelect(() => event.target.value)
    if(event.target.value === 'doctor1') {
      setDoctor(() => doctor1)
    } else if(event.target.value === 'doctor2') {
      setDoctor(() => doctor2)
    } else if(event.target.value === 'doctor3') {
      setDoctor(() => doctor3)
    }
  }

  useEffect(() => {
    console.log('this is test')
  },[doctor])

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 py-8 h-full">
      <div>
        <div>
          <select
            className="w-full h-10 border-2 border-black rounded-md px-2"
            onChange={(e) => changeDoctor(e)}
            value={select}
          >
            <option value="doctor1">นายแพทย์ทดสอบ ที่หนึ่ง</option>
            <option value="doctor2">นายแพทย์ทดลอง ที่สอง</option>
            <option value="doctor3">แพทย์หญิงลองดู ที่สาม</option>
          </select>
        </div>
        <div className="mt-2">
          <div className="flex justify-between items-center bg-blue-950 px-4 py-2 rounded-lg">
            <p className="text-white text-2xl font-bold">ทันตแพทย์</p>
            <Image 
              src="/blank-profile.png"
              alt="dentist_profile"
              width={50}
              height={50}
            />
          </div>
          <div className=" bg-emerald-300 px-4 py-2 rounded-lg text-white text-2xl flex justify-center items-center">
            <FaRegClock />
            <p className="px-2 relative bottom-0.5"> เวลาเข้างาน 9:00 - 19:00 น.</p>
          </div>
        </div>
        <div className="mt-2 h-[750px] overflow-y-scroll">
          {
            timeTable.map((time,index) => {
              if(haveQueue(time, doctor).time) {
                return (
                  <div key={`${time} - ${index}`} className="flex border-2 border-b-gray-100 bg-slate-100 gap-x-2 h-[45px]">
                    <div className="text-center w-20 relative top-[-5px]">{time}</div>
                    <div className="flex-1 relative">
                      <AppointMentBox 
                        heightMultiply={haveQueue(time, doctor).time} 
                        index={haveQueue(time, doctor).index} 
                        data={doctor[haveQueue(time, doctor).index].text}
                      />
                      <DetailWindow />
                    </div>
                  </div>
                )
              } else {
                return (
                  <div key={`${time} - ${index}`} className="flex border-2 border-b-gray-100 bg-slate-100 gap-x-2 h-[45px]">
                    <div className="text-center w-20 relative top-[-5px]">{time}</div>
                    <div className="flex-1">
                    </div>
                  </div>
                )
              }
            }
              
            )
          }
        </div>
      </div>

      <QueueSection />
    </div>
    
    
    </>
  );
}
