import { doctorData } from "@/data/doctor";
import Image from "next/image";

export default function ProfileChanger({
  changeProfileFromPicture,
  toggleProfileChanger,
  changer
}: {
  changeProfileFromPicture: Function;
  toggleProfileChanger: Function;
  changer: boolean
}) {
  function clickUpdateProfile(index: string) {
    toggleProfileChanger()
    changeProfileFromPicture(index)
  }
  if(changer) {
    return (
        <div className="absolute bg-slate-200 p-4 rounded-lg z-50 border-2 border-slate-500">
          {doctorData.map((doctor, index) => (
            <button
              className="bg-white m-2 rounded-full"
              key={`${doctor.name} - ${index}`}
              onClick={() => clickUpdateProfile(String(index + 1))}
            >
              <Image
                className="rounded-full size-16"
                src={doctor.profile}
                alt="profile pic"
                width={50}
                height={50}
              />
            </button>
          ))}
        </div>
      );
  } else {
    return <></>
  }
  
}
