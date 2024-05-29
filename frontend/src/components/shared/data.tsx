import { ReactNode } from "react";
import { BsQuestionCircle } from "react-icons/bs";

interface IDataRow {
  label: string;
  children: ReactNode | string;
}

export default function DataRow({ label, children }: IDataRow) {
  return (
    <div className="min-w-[200px] grid grid-cols-[1.2fr] md:grid-cols-[1.2fr_2.5fr] lg:grid-cols-[1.2fr_3fr] xl:grid-cols-[1fr_3fr] gap-2 pt-1 mb-2 items-start text-neutral-400">
      <span className="uppercase flex flex-row text-sm text-neutral-200 items-center gap-2">
        <BsQuestionCircle />
        {label}:
      </span>
      <div className="w-full border-b border-neutral-700 pb-2 scroll-smooth scrollbar">
        {children}
      </div>
    </div>
  );
}
