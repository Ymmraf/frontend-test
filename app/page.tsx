"use client";
import QueueSection from "@/components/QueueSection";
import WorkingTime from "@/components/WorkingTime";
import DoctorHeading from "@/components/DoctorHeading";
import { useState } from "react";
import { doctor1, doctor2, doctor3 } from "@/data/doctorQueues";
import { doctorData } from "@/data/doctor";
import TimeTable from "@/components/TimeTable";
import Dropdown from "@/components/Dropdown";

export default function Home() {
  const [doctor, setDoctor] = useState(doctor1);
  const [select, setSelect] = useState("1");
  const [docName, setDocname] = useState("นายแพทย์ทดสอบ ที่หนึ่ง");
  const [changer, setChanger] = useState(false);

  function toggleProfileChanger() {
    console.log(changer)
    setChanger(() => !changer);
  }

  function changeDoctor(event: React.ChangeEvent<any>) {
    setSelect(() => event.target.value);
    if (event.target.value === "1") {
      setDoctor(() => doctor1);
      setDocname(() => "นายแพทย์ทดสอบ ที่หนึ่ง");
    } else if (event.target.value === "2") {
      setDoctor(() => doctor2);
      setDocname(() => "นายแพทย์ทดลอง ที่สอง");
    } else if (event.target.value === "3") {
      setDoctor(() => doctor3);
      setDocname(() => "แพทย์หญิงลองดู ที่สาม");
    }
  }

  function changeProfileFromPicture(number: string) {
    setSelect(() => number);
    if (number === "1") {
      setDoctor(() => doctor1);
      setDocname(() => "นายแพทย์ทดสอบ ที่หนึ่ง");
    } else if (number === "2") {
      setDoctor(() => doctor2);
      setDocname(() => "นายแพทย์ทดลอง ที่สอง");
    } else if (number === "3") {
      setDoctor(() => doctor3);
      setDocname(() => "แพทย์หญิงลองดู ที่สาม");
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 py-8 h-full">
        <div>
          <Dropdown
            doctorData={doctorData}
            select={select}
            changeDoctor={changeDoctor}
          />
          <div className="mt-2">
            <DoctorHeading
              doctorData={doctorData}
              select={select}
              changeProfileFromPicture={changeProfileFromPicture}
              toggleProfileChanger={toggleProfileChanger}
              changer={changer}
            />
            <WorkingTime />
          </div>
          <TimeTable doctor={doctor} docName={docName} />
        </div>
        <QueueSection />
      </div>
    </>
  );
}
