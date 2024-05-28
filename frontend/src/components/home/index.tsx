"use client";

import { useState } from "react";
import Tab from "./tab";
import { Tabs } from "@/utils";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-10 md:px-20 2xl:px-64">
      <div className="w-full flex flex-col bg-[#1d1d1c] rounded-xl items-start py-14 px-8 gap-3">
        <h1 className="text-2xl text-white">Transactions</h1>
        <h3 className="text-neutral-400">A list of transactions on Starknet</h3>
        <span className="flex flex-row mt-5">
          {Tabs.map((tab, index) => (
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
      </div>
    </main>
  );
}
