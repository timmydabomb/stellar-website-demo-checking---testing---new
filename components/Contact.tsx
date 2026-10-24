"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";

const interestGroups = {
  stellar: {
    label: "Stellar Technical Solutions",
    options: [
      { value: "kashyap-anti-scale-system", label: "Kashyap Anti-Scale System" },
      { value: "electro-chlorination", label: "Electro Chlorination" },
      { value: "filtration-system", label: "Filtration System" },
      { value: "chemical-dosing-and-disinfection", label: "Chemical Dosing and Disinfection" },
      { value: "technical-services", label: "Technical Services" },
      { value: "swimming-pool-solutions", label: "Swimming Pool Solutions" },
      { value: "non-chlorine-water-treatment", label: "Non-Chlorine Water Treatment" },
      { value: "water-features", label: "Water Features" },
    ],
  },
  atmos: {
    label: "Atmos Nanobubble Solutions",
    options: [
      { value: "agriculture-smart-irrigation", label: "Agriculture and Smart Irrigation" },
      { value: "agriculture-fish-farming", label: "Agriculture and Fish Farming" },
      { value: "poultry-water-hygiene", label: "Poultry and Water Hygiene" },
      { value: "industrial-water-treatment", label: "Industrial Water Treatment" },
      { value: "non-chlorine-swimming-pool-treatment", label: "Non-Chlorine Swimming Pool Treatment" },
      { value: "non-chlorine-water-treatment", label: "Non-Chlorine Water Treatment" },
    ],
  },
  cosmic: {
    label: "Cosmic Scent Diffuser",
    options: [
      { value: "retail-home-use", label: "Retail and Home Use" },
      { value: "commercial-use", label: "Commercial Use" },
      { value: "odor-serve", label: "Odor Serve" },
    ],
  },
} as const;

type InterestCategory = keyof typeof interestGroups;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState<InterestCategory | "">("");
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    const solutionParam = params.get("solution");

    if (categoryParam && solutionParam && Object.hasOwn(interestGroups, categoryParam)) {
      const selectedCategory = categoryParam as InterestCategory;
      const isValidSolution = interestGroups[selectedCategory].options.some((option) => option.value === solutionParam);
      if (isValidSolution) {
        setCategory(selectedCategory);
        setInterest(solutionParam);
      }
      return;
    }

    // Keep the existing division-level enquiry links working.
    if (solutionParam === "stellar" || solutionParam === "atmos" || solutionParam === "cosmic") {
      setCategory(solutionParam);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selectedCategoryId = String(formData.get("category") ?? "");
    const selectedCategory = Object.hasOwn(interestGroups, selectedCategoryId)
      ? interestGroups[selectedCategoryId as InterestCategory]
      : null;
    const selectedSolution = selectedCategory?.options.find((option) => option.value === formData.get("interest"))?.label ?? "";
    const subject = `Website enquiry — ${selectedCategory?.label ?? ""} — ${selectedSolution}`;
    const body = [
      `Name: ${formData.get("name") ?? ""}`,
      `Email: ${formData.get("email") ?? ""}`,
      `Category: ${selectedCategory?.label ?? ""}`,
      `Interested in: ${selectedSolution}`,
      "",
      "Project details:",
      `${formData.get("message") ?? ""}`,
    ].join("\r\n");
    window.location.href = `mailto:tech_sol@eim.ae?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section className="contact-section section" id="contact">
      <div className="page-width contact-layout">
        <div className="contact-copy">
          <div className="eyebrow eyebrow-light"><span /> Project enquiry</div>
          <h2>Let’s make your<br /><em>space</em> feel different.</h2>
          <p>Tell us a little about your project. We’ll help you find a thoughtful place to start.</p>
          <div className="contact-details contact-details-spaced">
            <a href="tel:+971558455038"><span><Phone size={17} /></span><div><small>Mobile</small><strong>+971 55-8455038</strong></div></a>
            <div><span><Phone size={17} /></span><div><small>Immediate contacts</small><div className="contact-phones"><a href="tel:0555546541">055-5546541</a><a href="tel:0505540541">050-5540541</a></div></div></div>
            <a href="tel:+97142204041"><span><Phone size={17} /></span><div><small>Landline</small><strong>+971 -4-2204041</strong></div></a>
            <a href="mailto:tech_sol@eim.ae"><span><Mail size={17} /></span><div><small>Email</small><strong>tech_sol@eim.ae</strong></div></a>
            <div><span><MapPin size={17} /></span><div><small>Find us</small><strong>Dubai, United Arab Emirates</strong></div></div>
          </div>
          <p className="placeholder-note">Location shown is a placeholder for this demo.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>01 — 03</span><p>Tell us about your project</p></div>
          <label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="e.g. Alex Morgan" required />
          <label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@company.com" required />
          <label htmlFor="category">Solution division</label>
          <select id="category" name="category" value={category} onChange={(event) => { setCategory(event.target.value as InterestCategory | ""); setInterest(""); }} required>
            <option value="" disabled>Select a division</option>
            {Object.entries(interestGroups).map(([value, group]) => <option key={value} value={value}>{group.label}</option>)}
          </select>
          <label htmlFor="interest">I’m interested in</label>
          <select id="interest" name="interest" value={interest} onChange={(event) => setInterest(event.target.value)} required disabled={!category}>
            <option value="" disabled>Select a solution</option>
            {category && interestGroups[category].options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
          <label htmlFor="message">A little about your project</label><textarea id="message" name="message" rows={3} placeholder="Share whatever you have in mind…" required />
          <button className="button button-aqua form-submit" type="submit">Send enquiry <ArrowUpRight size={17} /></button>
          {submitted && <p className="form-confirmation" role="status"><Check size={16} /> Your email app should open with the enquiry ready to review and send.</p>}
          <small className="form-privacy">Your email app will open so you can review and send this enquiry to tech_sol@eim.ae.</small>
        </form>
      </div>
    </section>
  );
}
