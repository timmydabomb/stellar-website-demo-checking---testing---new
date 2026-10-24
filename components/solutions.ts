export type Solution = {
  slug: "stellar" | "atmos" | "cosmic";
  name: string;
  subtitle: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  capabilities?: { title: string; description: string }[];
  serviceCards?: { title: string; description: string; image: string; imageAlt: string; inquirySolution: string; features?: string[]; ctaLabel?: string; imageFit?: "cover" | "contain" }[];
  note?: string;
  heroSummary?: { kicker: string; paragraphs: string[] };
  diffuserGallery?: { title: string; src: string; alt: string; width: number; height: number }[];
  fragranceNotes?: { description: string; cards: { name: string; family: string; notes: string; image: string; alt: string }[] };
};

export const solutions: Record<Solution["slug"], Solution> = {
  stellar: {
    slug: "stellar",
    name: "Stellar",
    subtitle: "Technical Services",
    title: "Water quality, thoughtfully managed.",
    intro: "Explore filtration, purification and water quality solutions shaped around your building, people and process.",
    image: "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Clear water moving through a modern water feature",
    serviceCards: [
      {
        title: "Kashyap Anti-Scale System",
        inquirySolution: "kashyap-anti-scale-system",
        description: "Electronic impulse technology designed to help manage mineral scale and rust in compatible water piping systems, without adding chemicals or salt.",
        image: "/kashyap-anti-scale.jpg",
        imageAlt: "Kashyap electronic anti-scale control unit fitted externally to a water pipe",
        imageFit: "contain",
        features: [
          "Electronic impulse technology",
          "Non-chemical scale-control approach",
          "Residential, commercial and industrial applications",
          "Compatibility depends on model and piping specifications",
        ],
        ctaLabel: "Explore Kashyap",
      },
      {
        title: "Electro Chlorination",
        inquirySolution: "electro-chlorination",
        description: "Electro chlorination uses electricity to generate chlorine-based disinfectants from salt-containing water for controlled disinfection in suitable water systems.",
        image: "/electro-chlorination-system.png",
        imageAlt: "Illustrative electro chlorination equipment with electrolysis cells, a brine tank and water-treatment piping",
        features: [
          "On-site generation of chlorine-based disinfectants",
          "Controlled water disinfection",
          "Applications in suitable industrial and water-treatment systems",
        ],
        ctaLabel: "Explore Solution",
      },
      { title: "Filtration Systems", inquirySolution: "filtration-system", description: "Find filtration options designed around your water source, system capacity and intended use.", image: "/industrial-filtration-system.png", imageAlt: "Industrial filtration vessels, pumps and stainless steel water-treatment pipework" },
      { title: "Chemical Dosing & Disinfection", inquirySolution: "chemical-dosing-and-disinfection", description: "Discuss dosing and disinfection systems chosen to support the needs and operating requirements of your installation.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85", imageAlt: "Engineer inspecting technical machinery" },
      { title: "Technical Services", inquirySolution: "technical-services", description: "Get support with technical products and systems selected to suit your site and project requirements.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85", imageAlt: "Technical specialist working with engineering equipment" },
      { title: "Swimming Pool Solutions", inquirySolution: "swimming-pool-solutions", description: "Explore equipment and water care options for pool circulation, filtration and everyday operation.", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=85", imageAlt: "Swimming pool beside a landscaped garden" },
      { title: "Non-Chlorine Water Treatment", inquirySolution: "non-chlorine-water-treatment", description: "Consider alternative water treatment approaches where suitable, based on the application and water quality needs.", image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1000&q=85", imageAlt: "Clear blue water in a swimming pool" },
      { title: "Water Features", inquirySolution: "water-features", description: "Explore water features designed to bring movement and a refined focal point to indoor and outdoor spaces.", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=85", imageAlt: "Water cascading over natural stone in a landscaped feature" },
    ],
    note: "Treatment and disinfection requirements depend on the application and water use. Non-chlorine approaches are not suitable for every system.",
  },
  atmos: {
    slug: "atmos",
    name: "Atmos",
    subtitle: "Nano Bubble Solutions",
    title: "A new perspective on pool water.",
    intro: "Discover nanobubble technology for swimming pools, with system options considered alongside your pool design and existing water care routine.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Bright blue swimming pool in a landscaped garden",
    capabilities: [
      { title: "Nanobubble technology", description: "Learn how fine bubbles can be introduced into a pool system as part of a considered water management approach." },
      { title: "Pool integration", description: "Explore equipment options and how they may fit with your pool’s circulation and filtration setup." },
      { title: "Balanced water care", description: "Discuss potential chemical use considerations alongside regular testing and appropriate disinfection." },
    ],
    note: "Nanobubble technology does not replace appropriate pool disinfection. Water treatment and chemical requirements depend on the specific installation and must follow applicable guidance.",
  },
  cosmic: {
    slug: "cosmic",
    name: "Cosmic",
    subtitle: "Scent Diffuser",
    title: "A signature atmosphere for every space.",
    intro: "Create a more welcoming feel with scent diffuser systems selected for homes, offices, hotels and commercial environments.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
    imageAlt: "Warm, refined interior with natural light and comfortable seating",
    capabilities: [
      { title: "For the home", description: "Bring a subtle, considered scent experience to living spaces and residences." },
      { title: "For hospitality", description: "Create a consistent welcome across hotel lobbies, guest areas and shared spaces." },
      { title: "For work and retail", description: "Explore diffuser options for offices, showrooms and other commercial environments." },
    ],
    heroSummary: {
      kicker: "About Cosmic",
      paragraphs: [
        "Cosmic brings scent marketing into the experience of a space. A distinctive fragrance can reinforce your brand identity, create a warm welcome and help customers form positive memories of the places they visit.",
        "We consider your brand story, your customers and the feeling you want to create, then pair a tailored fragrance with a diffuser suited to your environment. The result is a consistent scent identity that makes your space more recognisable and memorable.",
        "Fragrance oils are concentrated blends of volatile aroma compounds, often inspired by botanicals. Because smell is closely connected to emotion and memory, a carefully chosen scent can shape how a space feels long after someone leaves.",
      ],
    },
    diffuserGallery: [
      { title: "Small area diffusers", src: "/cosmic/diffusers/small.jpg", alt: "Compact aroma diffusers styled in a warm, neutral home interior", width: 1878, height: 839 },
      { title: "Medium area diffusers", src: "/cosmic/diffusers/medium-product.jpg", alt: "Medium-format freestanding scent diffusers in a warm luxury interior", width: 1877, height: 838 },
      { title: "Large area diffusers", src: "/cosmic/diffusers/large.jpg", alt: "Commercial scent diffuser units in an elegant hotel lobby", width: 1878, height: 839 },
    ],
    fragranceNotes: {
      description: "Explore fresh, floral, woody and classic fragrance profiles. We can help match a scent to the mood and identity you want your space to express.",
      cards: [
        { name: "Water Lily", family: "Fresh floral", notes: "Lotus · water notes · ozone", image: "/cosmic/fragrance/water-lily.jpg", alt: "Pink water lily floating on water" },
        { name: "Jasmine", family: "Fresh floral", notes: "Jasmine · tuberose · lily of the valley", image: "/cosmic/fragrance/jasmine.jpg", alt: "White jasmine blossoms and glossy leaves" },
        { name: "Rose Garden", family: "Floral", notes: "Grapefruit · blackberry · rose · violet · white musk", image: "/cosmic/fragrance/rose-garden.jpg", alt: "Red rose with blackberries and petals" },
        { name: "Ocean", family: "Fresh", notes: "Cyclamen · rose · citrus · pear · fruit", image: "/cosmic/fragrance/ocean.jpg", alt: "Bright citrus peel splashing through water" },
        { name: "Classic Cologne", family: "Classic", notes: "Bergamot · saffron · rose · geranium · patchouli · leather", image: "/cosmic/fragrance/classic-cologne.jpg", alt: "Bergamot, saffron and dark fragrance woods" },
        { name: "Lavender", family: "Floral", notes: "Lavender · soft herbal notes", image: "/cosmic/fragrance/lavender.jpg", alt: "Purple lavender flowers" },
      ],
    },
  },
};
