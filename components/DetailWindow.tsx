import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { FaTooth } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function DetailWindow({
  detail,
  doctorName,
  show,
  toggleDetail
}: {
  detail: any;
  doctorName: string;
  show: boolean
  toggleDetail : Function
}) {
  if(show) {
    return (
      <div className="w-[300px] border-2 border-gray-500 rounded-lg bg-white absolute right-4 top-12">
        <div className="flex justify-between p-2">
          <div className="mb-2 font-bold text-emerald-500 ">
            <p>นัดหมาย</p>
            <p>{doctorName}</p>
          </div>
          <div className="flex">
            <Image
              src="/blank-profile.png"
              alt="profile"
              width={50}
              height={50}
            />
            <button className="text-emerald-500 text-xl font-bold" onClick={() => toggleDetail()}>
              <IoClose />
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-6 bg-slate-500 mr-2"></div>
          <div className="flex gap-x-10">
            <div>
              <div className="flex">
                <p className="text-emerald-500">
                  <IoPersonSharp />
                </p>
                <p className="ml-2 relative bottom-1">{detail.name}</p>
              </div>
              <div className="flex">
                <p className="text-emerald-500">
                  <FaTooth />
                </p>
                <p className="ml-2 relative bottom-1">{detail.service}</p>
              </div>
              <div className="flex">
                <p className="text-emerald-500">
                  <FaPhoneAlt />
                </p>
                <p className="ml-2 relative bottom-1">{detail.tel}</p>
              </div>
              <div>
                <p className="relative bottom-1">ประเมินค่าใช้จ่าย 0.00</p>
              </div>
              <div className="flex">
                <p className="text-emerald-500">
                  <FaClock />
                </p>
                <p className="ml-2 relative bottom-1">{`${detail.start} - ${detail.finish}`}</p>
              </div>
            </div>
            <div className="text-emerald-500 flex items-end gap-x-2 text-xl pt-2">
              <FaPrint />
              <MdEdit />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!show){
    return
  }
}
