export interface DepartmentItem {
  id: string;
  departmentId: 'fashion' | 'media' | 'hobby' | 'collectibles';
  title: string;
  tag: string;
  summary: string;
  highlights: string[];
  stockNote: string;
  image: string;
  shelfCode: string;
}

export const SHOP_FACTS = {
  registeredName: "Nurse Charlotte's All Kinds of Everything",
  shortName: "Nurse Charlotte's",
  tagline: "Eclectic Secondhand & Vintage Emporium on Historic Broad Street",
  address: {
    street: "36 Broad St",
    city: "Worcester",
    postcode: "WR1 3NH",
    country: "United Kingdom",
    context: "Located in the heart of Worcester city centre, directly on Broad Street.",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=36+Broad+St+Worcester+WR1+3NH+UK",
  },
  phone: {
    display: "01905 617637",
    tel: "tel:01905617637",
    purpose: "Check stock, ask about selling or trading items, or verify operational hours before visiting.",
  },
  rating: {
    score: 4.3,
    max: 5.0,
    sourceText: "Rated 4.3 out of 5 stars on local business directories",
    atmosphere: "Traditional independent thrift atmosphere — packed shelves perfect for treasure hunting.",
  },
  sourcingPolicy: {
    title: "100% Worcester Community Sourced",
    description:
      "The shop relies entirely on the local community for its stock, buying and trading pre-loved goods directly from residents. Every single visit reveals a completely unique, one-of-a-kind inventory.",
  },
  behindTheScenes: [
    {
      code: "ORIGIN-01",
      title: "The Meaning of the Name",
      description:
        'The shop\'s tongue-in-cheek name—"All Kinds of Everything"—is a literal description of the inventory: you can find a mix of rare retro clothing right next to quirky, everyday household novelties.',
    },
    {
      code: "COMMUNITY-02",
      title: "Direct Resident Sourcing",
      description:
        "Rather than corporate job-lots, the shop buys and trades pre-loved goods directly from Worcester locals, keeping unique items circulating inside the community.",
    },
    {
      code: "CIRCULAR-03",
      title: "Sustainable High-Street Alternative",
      description:
        "Nestled in the historic Worcester city centre, the shop contributes to the local economy and provides an eco-friendly, circular alternative to fast-fashion chains.",
    },
  ],
};

export const DEPARTMENTS: {
  id: 'fashion' | 'media' | 'hobby' | 'collectibles';
  code: string;
  name: string;
  subtitle: string;
  description: string;
  photo: string;
  sampleFinds: string[];
}[] = [
  {
    id: 'fashion',
    code: 'CABINET I // APPAREL',
    name: 'Curated Fashion',
    subtitle: 'True vintage, retro apparel & pre-loved modern clothing',
    description:
      'From authentic mid-century coats and retro knitwear to gently worn modern classics. Every garment on the rail is hand-inspected and sourced locally from Worcester wardrobes.',
    photo: '/images/fashion-rail.jpg',
    sampleFinds: [
      'True vintage coats & heritage outerwear',
      '1970s–90s retro shirts, dresses & denim',
      'Pre-loved modern quality knitwear',
      'Vintage costume jewellery & leather belts',
    ],
  },
  {
    id: 'media',
    code: 'CABINET II // SOUND & PRINT',
    name: 'Leisure & Media',
    subtitle: 'Physical books, vinyl records & musical instruments',
    description:
      'A tactile rotating stash for crate-diggers and readers. Browse vintage LPs, 45s, well-thumbed paperbacks, local history volumes, and acoustic or folk musical instruments waiting for their next player.',
    photo: '/images/leisure-media.jpg',
    sampleFinds: [
      'Rotating crates of vinyl LPs & 7" singles',
      'Physical hardback & paperback books',
      'Acoustic guitars, brass & folk instruments',
      'Sheet music & retro audio curiosities',
    ],
  },
  {
    id: 'hobby',
    code: 'CABINET III // FIELD & CRAFT',
    name: 'Hobby Gear',
    subtitle: 'Miscellaneous sporting goods & creative hobby items',
    description:
      'Whether you are taking up a vintage racquet sport, looking for art equipment, or hunting down quirky outdoor gear, this corner offers practical tools with a second lease on life.',
    photo: '/images/collectibles-cabinet.jpg',
    sampleFinds: [
      'Vintage tennis racquets & sporting equipment',
      'Artist easels, craft tins & hobbyist gear',
      'Binoculars, field glasses & board games',
      'Traditional outdoor accessories',
    ],
  },
  {
    id: 'collectibles',
    code: 'CABINET IV // BRIC-A-BRAC',
    name: 'Collectibles & Novelties',
    subtitle: 'Home decor, trinkets & all kinds of everything',
    description:
      'The heart of the Aladdin’s cave experience. Discover decorative brassware, vintage ceramics, mantel clocks, quirky kitchen novelties, and shelf-worthy curiosities that spark conversation.',
    photo: '/images/shopfront-hero.jpg',
    sampleFinds: [
      'Antique brass scales & heritage kitchenware',
      'Decorative ceramics, glassware & ornaments',
      'Unique mantel trinkets & framed ephemera',
      'Quirky household novelties you won’t find twice',
    ],
  },
];

export interface CommunityTradeCategory {
  title: string;
  whatWeAccept: string;
  tip: string;
}

export const COMMUNITY_TRADE_GUIDE: CommunityTradeCategory[] = [
  {
    title: 'Vintage & Retro Apparel',
    whatWeAccept: 'Clean vintage dresses, jackets, retro sportswear, jewellery, and timeless accessories.',
    tip: 'Single special items or small rails are welcome. Ring 01905 617637 before bringing heavy boxes.',
  },
  {
    title: 'Vinyl Records & Books',
    whatWeAccept: 'Rock, jazz, folk & classical LPs, clean paperbacks, Worcestershire history, and musical instruments.',
    tip: 'We check sleeve and vinyl condition on arrival.',
  },
  {
    title: 'Bric-a-Brac & Oddities',
    whatWeAccept: 'Brass scales, vintage cameras, porcelain, sporting curios, and unusual home decor.',
    tip: 'If it’s quirky, characterful, and well-kept, it belongs in All Kinds of Everything.',
  },
];
