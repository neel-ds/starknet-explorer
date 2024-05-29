import { IoCopyOutline } from "react-icons/io5";
import { eventTabs } from "@/utils";

export default function Events() {
  return (
    <div className="w-full flex flex-col scroll-smooth scrollbar">
      <div className="min-w-[400px] grid grid-cols-[10fr_10fr_6fr] p-2.5 text-sm text-neutral-400 border-t border-b border-neutral-600">
        {eventTabs.map((header, index) => (
          <p key={index} className="uppercase">
            {header}
          </p>
        ))}
      </div>
      <div className="min-w-[400px] grid grid-cols-[10fr_10fr_6fr] p-2.5 text-sm text-neutral-100 border-b border-neutral-600 items-center">
        <p className="text-indigo-300">64428942_92_1</p>
        <span className="flex flex-row gap-2 items-center text-indigo-300">
          6444032 <IoCopyOutline className="text-neutral-500" />
        </span>
        <p>a day ago</p>
      </div>
    </div>
  );
}
