"use client";

import { useState } from "react";
import { Tab } from "@/components/shared";
import { tabs, transactionHeaders } from "@/utils";
import Transaction from "./transaction";

export default function Transactions() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-10 md:px-3 lg:px-6 xl:px-20 2xl:px-64">
      <div className="w-full flex flex-col bg-[#1d1d1c] rounded-xl items-start py-14 px-4 md:px-8 gap-3">
        <h1 className="text-2xl text-white">Transactions</h1>
        <h3 className="text-neutral-400">A list of transactions on Starknet</h3>
        <span className="w-full flex flex-row mt-5 scroll-smooth scrollbar">
          {tabs.map((tab, index) => (
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
        <div className="w-full flex flex-col mt-5 rounded-2xl scroll-smooth scrollbar">
          <div className="min-w-[700px] grid grid-cols-[100px_180px_150px_140px_120px] md:grid-cols-[1.2fr_2fr_2fr_2fr_1.5fr] lg:grid-cols-[1.2fr_2fr_2fr_2fr_1.5fr] xl:grid-cols-[1.2fr_1.8fr_2fr_2fr_1.2fr] py-2.5 text-neutral-400 border-t border-b border-neutral-600 my-2">
            {transactionHeaders.map((header, index) => (
              <p key={index} className="uppercase">
                {header}
              </p>
            ))}
          </div>
          {transactionHeaders.map((header, index) => (
            <Transaction key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
