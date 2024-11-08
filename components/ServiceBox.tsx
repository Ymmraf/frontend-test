import ServiceQueue from "./ServiceQueue";
import { Queue } from "@/type";

export default function ServiceBox({
  heading,
  bgColor,
  queues
}: {
  heading: string;
  bgColor: string;
  queues: Queue[];
}) {

  

  return (
    <div>
      <div className="bg-emerald-400 text-white rounded-t-lg text-center py-2 font-semibold">
        {heading}
      </div>
      <div className={bgColor + " rounded-b-lg p-3 h-full space-y-4"}>
        {
          queues.map((item, index) => 
            <div key={`${item.day}-${index}`} >
              <ServiceQueue 
                queue={index+1}
                name={item.name}
                id={item.id}
                day={item.day}
                number={item.number}
              />
            </div>
          )
        }
      </div>
    </div>
  );
}
