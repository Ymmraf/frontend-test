import { FaRegClock } from "react-icons/fa";

export default function WorkingTime() {
  return (
    <div className=" bg-emerald-300 px-4 py-2 rounded-lg text-white text-2xl flex justify-center items-center">
      <FaRegClock />
      <p className="px-2 relative bottom-0.5"> เวลาเข้างาน 9:00 - 19:00 น.</p>
    </div>
  );
}
