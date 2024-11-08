import Image from "next/image";

export default function ServiceQueue({
  name,
  id,
  day,
  number,
  queue
}: {
  name: string;
  id: string;
  day: string;
  number: string;
  queue: number
}) {
  return (
    <div className="shadow-lg bg-white rounded-lg grid grid-cols-1">
      <div className="flex">
        <div>
          <div className="bg-emerald-500 rounded-tl-lg min-w-8">
            <p className="text-white text-center">{queue}</p>
          </div>
          <div>
            <Image
              className="size-10"
              src="/blank-profile.png"
              alt="profile_img"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="flex-1 px-1">
          <p className="font-semibold text-blue-900 text-sm">{name}</p>
          <p className="font-semibold text-blue-900 text-sm">{id}</p>
        </div>
        <div className="">
          <div className="px-2 py-1 bg-blue-950 rounded-tr-md">
            <p className="text-white font-bold min-w-5 text-center">{number}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-gray-600">{day} วัน</p>
      </div>
    </div>
  );
}
