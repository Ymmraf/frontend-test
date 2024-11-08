import Image from "next/image";
import { DoctorData } from "@/type";
import ProfileChanger from "./ProfileChanger";

export default function DoctorHeading({
  doctorData,
  select,
  changeProfileFromPicture,
  toggleProfileChanger,
  changer,
}: {
  doctorData: DoctorData[];
  select: string;
  changeProfileFromPicture: Function;
  toggleProfileChanger: Function;
  changer: boolean;
}) {
  function getDoctorProfile(select: string) {
    return Number(select) - 1;
  }
  return (
    <div className="flex justify-between items-center bg-blue-950 px-4 py-2 rounded-lg">
      <p className="text-white text-2xl font-bold">ทันตแพทย์</p>
      <div>
        <button onClick={() => toggleProfileChanger()} >
          <Image
            className="rounded-full size-16"
            src={doctorData[getDoctorProfile(select)].profile}
            alt="dentist_profile"
            width={50}
            height={50}
          />
        </button>
        <div>
          <ProfileChanger
            changeProfileFromPicture={changeProfileFromPicture}
            toggleProfileChanger={toggleProfileChanger}
            changer={changer}
          />
        </div>
      </div>
    </div>
  );
}
