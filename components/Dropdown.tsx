import { DoctorData } from "@/type";
export default function Dropdown({doctorData, select, changeDoctor} : { doctorData: DoctorData[], select: string, changeDoctor: Function}) {
  return (
    <div>
      <select
        className="w-full h-10 border-2 border-black rounded-md px-2"
        onChange={(e) => changeDoctor(e)}
        value={select}
      >
        {doctorData.map((doctor, index) => (
          <option value={`${index + 1}`} key={`${doctor.name}-${index}`}>
            {doctor.name}
          </option>
        ))}
      </select>
    </div>
  );
}
