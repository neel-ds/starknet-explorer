import { IoCopyOutline } from "react-icons/io5";
import { Badge, Tab, DataRow } from "@/components/shared";
import { calldataTabs, developerInfoTabs } from "@/utils";
import { useState } from "react";

export default function DeveloperInfo() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full">
      <h1 className="text-2xl text-white mb-5">Developer Info</h1>
      <DataRow label="Unix timestamp">
        <span className="flex flex-row items-center text-neutral-100 gap-1.5">
          13908035038
          <IoCopyOutline className="text-neutral-500" />
        </span>
      </DataRow>
      <DataRow label="Nonce">
        <span className="text-neutral-100">5</span>
      </DataRow>
      <DataRow label="Position">
        <span className="text-neutral-100">94</span>
      </DataRow>
      <DataRow label="Version">
        <span className="text-neutral-100">1</span>
      </DataRow>
      <DataRow label="Execution Resources">
        <div className="flex flex-col gap-1 items-start">
          <Badge label="8369 Steps" color="emerald" />
          <span className="flex flex-row items-center gap-2">
            <Badge label="33 PEDERSEN_BUILTIN" color="orange" />
            <Badge label="185 RANGE_CHECK_BUILTIN" color="orange" />
            <Badge label="6 EC_OP_BUILTIN" color="orange" />
          </span>
        </div>
      </DataRow>
      <DataRow label="Call Data">
        <div className="w-full flex flex-col bg-neutral-800 p-5 my-5 gap-4">
          <span className="flex flex-row items-center gap-2 text-neutral-200">
            <p className="text-fuchsia-500/90">_ _exexute_ _</p>{" "}
            <IoCopyOutline className="text-neutral-500" />({" "}
            <p className="text-red-700 tracking-wide">calls</p>){" "}
            <p className="text-indigo-600">→</p> 0x24g4...244vr{" "}
            <IoCopyOutline className="text-neutral-500" />
          </span>
          <span className="max-w-[300px] flex flex-row items-center gap-2 text-neutral-200">
            Address: <p className="text-indigo-300/80">0x03d...8d573</p>{" "}
            <IoCopyOutline className="text-neutral-500" />
          </span>
          <span className="w-full flex flex-row scroll-smooth scrollbar">
            {developerInfoTabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab}
                onClick={() => {
                  setActiveTab(index);
                }}
                isActive={activeTab === index}
              />
            ))}
          </span>
          <div className="w-full flex flex-col scroll-smooth scrollbar">
            <div className="min-w-[700px] lg:min-w-[710px] xl:min-w-full grid grid-cols-[2fr_12fr_0.5fr] p-3 text-sm text-neutral-400 bg-neutral-900 border-t border-b border-neutral-600">
              {calldataTabs.map((header, index) => (
                <p key={index} className="uppercase">
                  {header}
                </p>
              ))}
            </div>
            <div className="min-w-[700px] lg:min-w-[710px] xl:min-w-full grid grid-cols-[2fr_12fr_0.5fr] p-3 text-sm text-neutral-400 bg-neutral-900 border-b border-neutral-600 items-center">
              <p className="text-amber-500/80">0</p>
              <p className="text-teal-400">&quot;0x01&quot;</p>
              <IoCopyOutline className="text-neutral-500" />
            </div>
          </div>
        </div>
      </DataRow>
      <DataRow label="Signature(s)">
        <div className="min-w-[650px] flex flex-col gap-2 items-start">
          <span className="w-full flex flex-row items-center justify-between text-amber-500/80 pb-2 border-b border-neutral-700">
            0x03d5364237e2dddd3c3a53057cf2fce2503dc618e620282669efe1d5e988d573{" "}
            <IoCopyOutline className="text-neutral-500" />
          </span>
          <span className="w-full flex flex-row items-center justify-between text-amber-500/80">
            0x03d5364237e2dddd3c3a53057cf2fce2503dc618e620282669efe1d5e988d573{" "}
            <IoCopyOutline className="text-neutral-500" />
          </span>
        </div>
      </DataRow>
    </div>
  );
}
