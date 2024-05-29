"use client";

import { transactionTabs } from "@/utils";
import Info from "./info";
import Tab from "./tab";
import { useState } from "react";
import Details from "./details";
import DeveloperInfo from "./developer";
import Events from "./events";
import { useAtomValue, useSetAtom } from "jotai";
import { transactionTabAtom } from "@/store";

export default function TransactionDetails({ address }: { address: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const transactionTab = useAtomValue(transactionTabAtom);
  const setTransactionTab = useSetAtom(transactionTabAtom);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-10 md:px-3 lg:px-6 xl:px-20 2xl:px-64">
      <div className="w-full flex flex-col bg-[#1d1d1c] rounded-xl items-start py-14 px-4 md:px-8 gap-8">
        <h1 className="text-2xl text-white">Transaction</h1>
        <Info address={address} typeLabel="invoke" timestamp="May 29 2024" />
        <span className="w-full flex flex-row gap-8 scroll-smooth scrollbar">
          {transactionTabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              eventCount={tab.count}
              onClick={() => {
                setActiveTab(index);
                setTransactionTab(index);
              }}
              isActive={activeTab === index}
            />
          ))}
        </span>
        {transactionTab === 0 ? (
          <>
            <Details />
            <DeveloperInfo />
          </>
        ) : (
          <Events />
        )}
      </div>
    </main>
  );
}
