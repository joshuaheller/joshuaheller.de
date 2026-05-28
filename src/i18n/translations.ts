export type Lang = 'de' | 'en';

export type NavItem = { label: string; href: string; desc?: string };
export type MegaMenuColumn = { title: string; items: NavItem[] };

export const translations = {
  de: {
    layout: {
      skipLink: 'Zum Inhalt springen',
      homeLabel: 'Joshua Heller — Startseite',
    },
    nav: {
      services: 'Leistungen',
      resources: 'Ressourcen',
      about: 'Über mich',
      cta: 'Erstgespräch vereinbaren',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
    },
    megaMenu: [
      {
        title: 'Ich brauche KI-Verständnis',
        items: [
          { label: 'KI-Workshop', href: '/ki-workshop', desc: 'Vom Buzzword zur Roadmap' },
          { label: 'KI-Sparring', href: '/ki-sparring', desc: 'Externer Sparringspartner für Tech & Strategie' },
        ],
      },
      {
        title: 'Ich brauche einen KI-Engineer',
        items: [
          { label: 'Forward Deployed Engineer', href: '/forward-deployed-engineer', desc: 'Ich baue in deiner Codebase' },
          { label: 'MVP-Service', href: '/mvp', desc: 'Vom Prototyp zum Produkt in 2–6 Wochen' },
        ],
      },
      {
        title: 'Ich brauche KI-Führung',
        items: [
          { label: 'Fractional CAIO', href: '/fractional-caio', desc: 'KI-Führung auf Teilzeit' },
        ],
      },
    ] as MegaMenuColumn[],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'KI-Glossar', href: '/ki-glossar' },
    ] as NavItem[],
    footer: {
      tagline: 'AI Engineer & Fractional CAIO. Vom Prototyp zum Produkt — direkt in deiner Codebase.',
      col1: 'KI-Verständnis',
      col2: 'Engineering & Führung',
      col3: 'Mehr',
      links: {
        about: { label: 'Über mich', href: '/ueber-mich' },
        blog: { label: 'Blog', href: '/blog' },
        glossar: { label: 'KI-Glossar', href: '/ki-glossar' },
        contact: { label: 'Kontakt', href: '/kontakt' },
        impressum: { label: 'Impressum', href: '/impressum' },
        datenschutz: { label: 'Datenschutz', href: '/datenschutz' },
        fde: { label: 'Forward Deployed Engineer', href: '/forward-deployed-engineer' },
        mvp: { label: 'MVP-Service', href: '/mvp' },
        caio: { label: 'Fractional CAIO', href: '/fractional-caio' },
        workshop: { label: 'KI-Workshop', href: '/ki-workshop' },
        sparring: { label: 'KI-Sparring', href: '/ki-sparring' },
      },
      credit: 'Joshua Heller ist Geschäftsführer der',
      logos: 'Logos der jeweiligen Markeninhaber.',
    },
    logoWall: {
      trustedBy: 'Vertraut von Teams bei',
      partners: 'Partner & Förderung',
    },
    stats: [
      { value: '350k+', label: 'Nutzer auf eigenen SaaS-Produkten' },
      { value: '5+', label: 'Jahre als Software-Engineer' },
      { value: '3', label: 'Jahre als AI-Engineer' },
      { value: '1M+', label: 'LinkedIn-Impressionen / Jahr' },
    ],
    cta: {
      button: 'Erstgespräch vereinbaren →',
      emailPrefix: 'Lieber erstmal schreiben?',
      contactHref: '/kontakt',
    },
    steps: {
      defaultHeading: 'So läuft eine Zusammenarbeit ab',
    },
    seo: {
      locale: 'de_DE',
    },
  },

  en: {
    layout: {
      skipLink: 'Skip to content',
      homeLabel: 'Joshua Heller — Home',
    },
    nav: {
      services: 'Services',
      resources: 'Resources',
      about: 'About',
      cta: 'Book a Call',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    megaMenu: [
      {
        title: 'I need AI understanding',
        items: [
          { label: 'AI Workshop', href: '/en/ai-workshop', desc: 'From buzzword to roadmap' },
          { label: 'AI Sparring', href: '/en/ai-sparring', desc: 'External sparring partner for tech & strategy' },
        ],
      },
      {
        title: 'I need an AI engineer',
        items: [
          { label: 'Forward Deployed Engineer', href: '/en/forward-deployed-engineer', desc: 'I build inside your codebase' },
          { label: 'MVP Service', href: '/en/mvp', desc: 'From prototype to product in 2–6 weeks' },
        ],
      },
      {
        title: 'I need AI leadership',
        items: [
          { label: 'Fractional CAIO', href: '/en/fractional-caio', desc: 'Part-time AI leadership' },
        ],
      },
    ] as MegaMenuColumn[],
    resources: [
      { label: 'Blog', href: '/en/blog' },
      { label: 'AI Glossary', href: '/en/glossary' },
    ] as NavItem[],
    footer: {
      tagline: 'AI Engineer & Fractional CAIO. From prototype to product — directly in your codebase.',
      col1: 'AI Understanding',
      col2: 'Engineering & Leadership',
      col3: 'More',
      links: {
        about: { label: 'About', href: '/en/about' },
        blog: { label: 'Blog', href: '/en/blog' },
        glossar: { label: 'AI Glossary', href: '/en/glossary' },
        contact: { label: 'Contact', href: '/en/contact' },
        impressum: { label: 'Legal Notice', href: '/impressum' },
        datenschutz: { label: 'Privacy Policy', href: '/datenschutz' },
        fde: { label: 'Forward Deployed Engineer', href: '/en/forward-deployed-engineer' },
        mvp: { label: 'MVP Service', href: '/en/mvp' },
        caio: { label: 'Fractional CAIO', href: '/en/fractional-caio' },
        workshop: { label: 'AI Workshop', href: '/en/ai-workshop' },
        sparring: { label: 'AI Sparring', href: '/en/ai-sparring' },
      },
      credit: 'Joshua Heller is CEO of',
      logos: 'Logos are property of their respective owners.',
    },
    logoWall: {
      trustedBy: 'Trusted by teams at',
      partners: 'Partners & Sponsors',
    },
    stats: [
      { value: '350k+', label: 'Users on own SaaS products' },
      { value: '5+', label: 'Years as Software Engineer' },
      { value: '3', label: 'Years exclusively in AI' },
      { value: '1M+', label: 'LinkedIn Impressions / Year' },
    ],
    cta: {
      button: 'Book a Call →',
      emailPrefix: 'Prefer to write first?',
      contactHref: '/en/contact',
    },
    steps: {
      defaultHeading: 'How we work together',
    },
    seo: {
      locale: 'en_US',
    },
  },
} as const;
