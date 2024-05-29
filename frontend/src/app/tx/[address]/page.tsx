import { TransactionDetails } from "@/components";
import { Metadata } from "next";

type Props = {
  params: {
    address: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Transaction ${params.address}`,
    icons: "/voyager.svg",
  };
}

export default function Transaction({ params }: Props) {
  return <TransactionDetails address={params.address} />;
}
