import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="footer-main">
          <Link className="brand footer-brand" href="#home" aria-label="Stellar Technical Services home"><Image src="/stellar-logo.png" alt="Stellar Technical Services LLC" width={799} height={252} /></Link>
          <p>Thoughtful technology for<br />better everyday environments.</p>
          <Link className="footer-back" href="#home">Back to top <ArrowUpRight size={15} /></Link>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Stellar Technical Services. All rights reserved.</span><span>Website concept · Replace all demo details before launch</span></div>
      </div>
    </footer>
  );
}
