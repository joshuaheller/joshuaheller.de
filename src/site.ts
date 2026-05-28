export const SITE = {
  name: 'Joshua Heller',
  url: 'https://joshuaheller.de',
  title: 'Joshua Heller — AI Engineer & Fractional CAIO | DACH',
  description:
    'Forward Deployed Engineer und Fractional CAIO für KI-Projekte im DACH-Raum — Mittelstand, Konzerne, Scaleups, Private Equity. Vom Prototyp zum Produkt, direkt in deiner Codebase. Ab 200 €/h.',
  email: 'joshuaheller@theaisoftwarecompany.com',
  linkedin: 'https://www.linkedin.com/in/heller-joshua',
  taisc: 'https://theaisoftwarecompany.com',
  // Karlsruhe primär; Pforzheim + Großraum Stuttgart / Baden-Württemberg für SEO & Aktionsradius
  location: 'Karlsruhe & Pforzheim · Großraum Stuttgart · Baden-Württemberg · DACH',
};

export type NavLink = { label: string; href: string; desc?: string };

export const MEGA_MENU: { title: string; items: NavLink[] }[] = [
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
      {
        label: 'Forward Deployed Engineer',
        href: '/forward-deployed-engineer',
        desc: 'Ich baue in deiner Codebase',
      },
      { label: 'MVP-Service', href: '/mvp', desc: 'Vom Prototyp zum Produkt in 2–6 Wochen' },
    ],
  },
  {
    title: 'Ich brauche KI-Führung',
    items: [{ label: 'Fractional CAIO', href: '/fractional-caio', desc: 'KI-Führung auf Teilzeit' }],
  },
];

export const RESOURCES: NavLink[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'KI-Glossar', href: '/ki-glossar' },
];

export const STATS = [
  { value: '350k+', label: 'Nutzer auf eigenen SaaS-Produkten' },
  { value: '5+', label: 'Jahre als Software-Engineer' },
  { value: '3', label: 'Jahre als AI-Engineer' },
  { value: '1M+', label: 'LinkedIn-Impressionen / Jahr' },
];

export const SERVICES = [
  {
    slug: 'forward-deployed-engineer',
    name: 'Forward Deployed Engineer',
    tagline: 'Ich baue in deiner Codebase',
    price: 'ab 200 €/h',
    intent: 'engineer',
  },
  {
    slug: 'mvp',
    name: 'MVP-Service',
    tagline: 'Vom Prototyp zum Produkt in 2–6 Wochen',
    price: 'ab 8.000 €',
    intent: 'engineer',
  },
  {
    slug: 'fractional-caio',
    name: 'Fractional CAIO',
    tagline: 'KI-Führung auf Teilzeit',
    price: 'ab 3.000 €/Monat',
    intent: 'fuehrung',
  },
  {
    slug: 'ki-workshop',
    name: 'KI-Workshop',
    tagline: 'Vom Buzzword zur Roadmap',
    price: 'ab 3.000 €',
    intent: 'verstaendnis',
  },
  {
    slug: 'ki-sparring',
    name: 'KI-Sparring',
    tagline: 'Externer Sparringspartner',
    price: 'ab 300 €/h',
    intent: 'verstaendnis',
  },
] as const;

// Kunden / Stationen für die Logo-Wand — echte Logos in public/images/logos
// color: nicht graustufen (z. B. farbiges S-IT-Shutter-Logo)
// boost: größer darstellen (Logos mit viel Whitespace)
export const CLIENTS: { name: string; file: string; color?: boolean; boost?: boolean }[] = [
  { name: 'BCT Technology', file: '/images/logos/bct.png' },
  { name: 'Bitwerft', file: '/images/logos/bitwerft.jpg' },
  { name: 'Onventis', file: '/images/logos/onventis.svg' },
  { name: 'WM aquatec', file: '/images/logos/wm-aquatec.png' },
  { name: 'STIHL', file: '/images/logos/stihl.jpg' },
  { name: 'i40', file: '/images/logos/i40.png' },
  { name: 'S-IT', file: '/images/logos/s-it.png', color: true },
  { name: 'mimacom', file: '/images/logos/mimacom.jpg' },
  { name: 'ALL:AIRT', file: '/images/logos/allairt.jpg', boost: true },
  { name: 'squareNeo', file: '/images/logos/squareneo.svg' },
  { name: 'koenic', file: '/images/logos/koenic.png' },
  { name: 'digitalsprung', file: '/images/logos/digitalsprung.jpg', boost: true },
];

export const PARTNERS = [
  { name: 'CyberForum', file: '/images/logos/partner/cyberforum.jpg' },
  { name: 'Ministerium für Wirtschaft, Arbeit und Tourismus Baden-Württemberg', file: '/images/logos/partner/bawue-wm.jpg' },
];
