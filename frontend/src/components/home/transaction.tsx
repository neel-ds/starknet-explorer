import Link from "next/link";
import { IoCopyOutline } from "react-icons/io5";
import { TbStackBackward } from "react-icons/tb";

export default function Transaction() {
  return (
    <div className="min-w-[700px] grid grid-cols-[100px_180px_150px_140px_120px] md:grid-cols-[1.2fr_2fr_2fr_2fr_1.5fr] lg:grid-cols-[1.2fr_2fr_2fr_2fr_1.5fr] xl:grid-cols-[1.2fr_1.8fr_2fr_2fr_1.2fr] pt-1 pb-3 items-center text-neutral-400 border-b border-neutral-600 mb-2">
      <TbStackBackward size={25} className="text-emerald-500" />
      <div className="flex flex-row items-center gap-3">
        <Link href={"/tx/"} className="text-indigo-300">
          0xnirv...944n
        </Link>
        <button>
          <IoCopyOutline className="text-neutral-500" />
        </button>
      </div>
      <span className="w-fit uppercase px-3 py-0.5 text-sm text-lime-200 bg-lime-400/10 border border-lime-600 rounded">
        declare
      </span>
      <div className="flex flex-row items-center gap-3">
        <Link href={"/tx/"} className="text-indigo-300">
          428593
        </Link>
        <button>
          <IoCopyOutline className="text-neutral-500" />
        </button>
      </div>
      <p className="text-white">2 minutes ago</p>
    </div>
  );
}
