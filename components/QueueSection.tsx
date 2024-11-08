import { IoRefreshOutline } from "react-icons/io5";
import { adminQueues, cashierQueue, presentQueues } from "@/data/queues";
import ServiceBox from "@/components/ServiceBox";
import getThaiMonth from "@/util/getThaiMonth";

export default function QueueSection() {
  const date = new Date();
  const today = `${date.getDate()} ${getThaiMonth(date.getMonth())} ${
    date.getFullYear() + 543
  }`;

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <div>
          <p className="text-2xl">วันที่ {today}</p>
        </div>
        <div className="flex gap-x-4">
          <p className="text-2xl text-red-700 px-4 py-2 bg-red-300 rounded-lg">
            รายได้ทั้งหมด 0 บาท
          </p>
          <button className="bg-red-400 px-3 rounded-lg">
            <p className="text-xl text-white">
              <IoRefreshOutline />
            </p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4 h-5/6 pb-8">
        <ServiceBox
          heading="ห้องพิเศษ present(0)"
          bgColor="bg-blue-100"
          queues={presentQueues}
        />
        <ServiceBox
          heading="แอดมิน (1)"
          bgColor="bg-blue-100"
          queues={adminQueues}
        />
        <ServiceBox
          heading="จุดชำระเงิน (1)"
          bgColor="bg-emerald-200"
          queues={cashierQueue}
        />
      </div>
    </div>
  );
}
