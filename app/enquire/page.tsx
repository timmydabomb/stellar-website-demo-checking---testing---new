import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "Make an Enquiry | Stellar Technical Services" };

export default function EnquiryPage() {
  return (
    <>
      <Navbar />
      <main><Contact /></main>
      <Footer />
    </>
  );
}
