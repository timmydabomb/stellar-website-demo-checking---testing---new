import type { Metadata } from "next";
import SolutionPage from "@/components/SolutionPage";
import { solutions } from "@/components/solutions";

export const metadata: Metadata = { title: "Cosmic | Scent Diffuser Systems" };

export default function CosmicPage() {
  return <SolutionPage solution={solutions.cosmic} />;
}
