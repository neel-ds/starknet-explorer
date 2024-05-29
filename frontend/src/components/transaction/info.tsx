import { IoCopyOutline } from "react-icons/io5";
import { Badge } from "@/components/shared";
import { FaCheck } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";

interface IInfo {
  address: string;
  typeLabel: string;
  timestamp: string;
}

export default function Info({ address, typeLabel, timestamp }: IInfo) {
  return (
    <div className="flex flex-col w-full gap-8 mt-6">
      <div className="w-full">
        <span className="flex flex-row items-start justify-between">
          <h3 className="text-neutral-400 text-sm mb-1.5">HASH</h3>
          <IoCopyOutline
            size={18}
            className="text-neutral-500 flex md:hidden"
          />
        </span>
        <span className="scroll-smooth scrollbar flex flex-row text-white items-center gap-3">
          {address}{" "}
          <IoCopyOutline
            size={20}
            className="text-neutral-500 hidden md:flex"
          />
        </span>
      </div>
      <div className="flex flex-row gap-40 items-start justify-between md:justify-start">
        <span className="flex flex-col uppercase text-neutral-400 text-sm gap-1.5">
          <span className="flex flex-row items-center gap-2">
            Type <BsQuestionCircle />
          </span>
          <Badge label={typeLabel} color="emerald" />
        </span>
        <span className="flex flex-col uppercase text-neutral-400 text-sm gap-1.5">
          Timestamp
          <p className="text-[1.1rem] capitalize text-white">{timestamp}</p>
        </span>
      </div>
      <div>
        <p className="uppercase text-neutral-400 text-sm mb-2">Status</p>
        <div className="relative top-0 flex items-center">
          <div className="relative w-fit bg-green-700 border border-green-700 rounded-3xl px-4 py-1.5 flex flex-col justify-between">
            <div className="relative">
              <span className="flex flex-row gap-2 text-center text-sm text-white items-center">
                <FaCheck /> Received
              </span>
            </div>
          </div>
          <li className="flex w-[5%] items-center h-[1px] border-b border-green-700 border-[1px]"></li>
          <div className="relative w-fit bg-green-700 border border-green-700 rounded-3xl px-4 py-1.5 flex flex-col justify-between">
            <div className="relative">
              <span className="flex flex-row gap-2 text-center text-sm text-white items-center">
                <FaCheck /> Accepted on L2
              </span>
            </div>
          </div>
          <li className="flex w-[5%] items-center h-[1px] border-b border-neutral-700 border-[1px]"></li>
          <div className="relative w-fit border border-neutral-700 rounded-full p-1 flex flex-col">
            <div className="relative">
              <span className="text-center text-sm text-white">
                <svg
                  aria-hidden="true"
                  className="inline w-7 h-7 animate-spin text-neutral-600 fill-neutral-300"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
