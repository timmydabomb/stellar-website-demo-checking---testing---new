"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-visual">
        <Image src="/home-water.jpg" alt="Water flowing through a landscaped water treatment environment" fill priority sizes="100vw" className="hero-water-image" />
        <div className="hero-water-overlay" />
        <div className="hero-scent-panel" aria-hidden="true">
          <Image src="/home-scent.jpg" alt="" fill sizes="(max-width: 680px) 45vw, 40vw" className="hero-scent-image" />
          <div className="hero-scent-overlay" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
            <div className="eyebrow eyebrow-light"><span /> One provider. Complete environments.</div>
            <h1>Cleaner Water.<br /><em>Healthier Environments.</em><br />Better Living.</h1>
            <p>From water and environmental solutions to advanced air purification and innovative scenting systems, we create cleaner, safer and more comfortable spaces for everyday life.</p>
            <Link href="#solutions" className="button button-aqua">Explore our solutions <ArrowUpRight size={17} /></Link>
          </motion.div>
          <a className="scroll-cue" href="#solutions" aria-label="Scroll to our solutions"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </div>
        <div className="hero-index"><span>01</span><i /> 03</div>
      </div>
    </section>
  );
}
