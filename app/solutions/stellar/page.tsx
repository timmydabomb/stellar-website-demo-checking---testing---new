import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
import { solutions } from "@/components/solutions";

export const metadata: Metadata = { title: "Stellar Technical Services | Water Treatment" };

export default function StellarPage() {
  return <SolutionPage solution={solutions.stellar} />;
}
