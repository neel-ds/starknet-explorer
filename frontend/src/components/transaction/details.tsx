import { IoCopyOutline } from "react-icons/io5";
import { DataRow } from "@/components/shared";

export default function Details() {
  return (
    <div className="w-full">
      <h1 className="text-2xl text-white mb-5">Transaction Details</h1>
      <DataRow label="Block Number">
        <span className="text-indigo-300">4285535</span>
      </DataRow>
      <DataRow label="Timestamp">
        <span className="text-neutral-100">17 hours ago</span>
      </DataRow>
      <DataRow label="Actual Fee">
        <span className="min-w-[600px] flex flex-row items-center text-neutral-100 gap-1.5">
          0.00000035840603850380 <p className="text-indigo-300">ETH</p>{" "}
          <IoCopyOutline className="text-neutral-500" /> ($0.00142) to:{" "}
          <p className="text-indigo-300">StarkWare: Sequencer</p>{" "}
          <IoCopyOutline className="text-neutral-500" />{" "}
        </span>
      </DataRow>
      <DataRow label="Max Fee">
        <span className="flex flex-row items-center text-neutral-100 gap-1.5">
          0.001 <p className="text-indigo-300">ETH</p>{" "}
          <IoCopyOutline className="text-neutral-500" /> ($3.25142)
        </span>
      </DataRow>
      <DataRow label="Gas Consumed">
        <span className="text-neutral-100">24</span>
      </DataRow>
      <DataRow label="Sender Address">
        <span className="text-indigo-300">
          0x03d5364237e2dddd3c3a53057cf2fce2503dc618e620282669efe1d5e988d573
        </span>
      </DataRow>
    </div>
  );
}
