import AppointMentBox from "./AppointMentBox";
import getTimeTable from "@/util/getTimeTable";
import { haveQueue } from "@/util/haveQueue";
import { Doctor } from "@/type";

export default function TimeTable({
  doctor,
  docName,
}: {
  doctor: Doctor[];
  docName: string;
}) {
  const timeTable = getTimeTable();
  return (
    <div className="mt-2 h-[750px] overflow-y-scroll">
      {timeTable.map((time, index) => {
        if (haveQueue(time, doctor).time) {
          return (
            <div
              key={`${time} - ${index}`}
              className="flex border-2 border-b-gray-100 bg-slate-100 gap-x-2 h-[45px]"
            >
              <div className="text-center w-20 relative top-[-5px]">{time}</div>
              <div className="flex-1 relative">
                <AppointMentBox
                  heightMultiply={haveQueue(time, doctor).time} //สูงเท่าไหร่
                  data={doctor[haveQueue(time, doctor).index].text} //text ในสีส้ม
                  doctorName={docName} // ชื่อหมอ
                  doctor={doctor}
                  time={time}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div
              key={`${time} - ${index}`}
              className="flex border-2 border-b-gray-100 bg-slate-100 gap-x-2 h-[45px]"
            >
              <div className="text-center w-20 relative top-[-5px]">{time}</div>
              <div className="flex-1"></div>
            </div>
          );
        }
      })}
    </div>
  );
}
