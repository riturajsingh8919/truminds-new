export interface NavItem {
  title: string;
  slug: string;
  description?: string;
  iconName?: string;
  badge?: string;
  category?: string;
}

export interface NavGroup {
  title: string;
  slug: string;
  type: "link" | "dropdown" | "megamenu";
  description?: string;
  featured?: {
    title: string;
    description: string;
    slug: string;
    badge: string;
    image?: string;
  };
  categories?: {
    name: string;
    items: NavItem[];
  }[];
  items?: NavItem[];
}

export const NAVIGATION_DATA: NavGroup[] = [
  {
    title: "Home",
    slug: "/",
    type: "link",
  },
  {
    title: "About Us",
    slug: "/about-us",
    type: "link",
  },
  {
    title: "Services",
    slug: "/services",
    type: "dropdown",
    description: "End-to-end clinical trial management and specialized talent solutions.",
    items: [
      {
        title: "CRO",
        slug: "/services/cro",
        description: "Full-service Contract Research Organization for global clinical trials.",
        iconName: "Briefcase",
        badge: "Core Service",
      },
      {
        title: "TruMinds AI Solutions",
        slug: "/services/ai-solutions",
        description: "Next-generation generative AI & machine learning for trial intelligence.",
        iconName: "Sparkles",
        badge: "AI Powered",
      },
      {
        title: "FSP Services",
        slug: "/services/fsp-services",
        description: "Functional Service Provider models tailored to your clinical operations.",
        iconName: "Layers",
      },
      {
        title: "Staffing Solutions",
        slug: "/services/staffing-solutions",
        description: "Specialized clinical domain talent and resourcing solutions worldwide.",
        iconName: "Users",
      },
    ],
  },
  {
    title: "Therapeutic Areas",
    slug: "/therapeutic-areas",
    type: "megamenu",
    description: "Deep clinical expertise across 20 specialized therapeutic and diagnostic domains.",
    featured: {
      title: "Oncology & Hematology Excellence",
      description: "Pioneering Phase I-IV trials in solid tumors, hematologic malignancies, and cell therapies.",
      slug: "/therapeutic-areas/oncology-hematology",
      badge: "Spotlight Domain",
    },
    categories: [
      {
        name: "Oncology & Systemic",
        items: [
          {
            title: "Oncology & Hematology",
            slug: "/therapeutic-areas/oncology-hematology",
            description: "Advanced solid tumor, immunotherapy & blood disorder trials.",
            iconName: "ShieldAlert",
            badge: "Top Specialty",
          },
          {
            title: "Cardiovascular & Vascular Diseases",
            slug: "/therapeutic-areas/cardiovascular-vascular-diseases",
            description: "Heart failure, coronary, arrhythmia & hypertension research.",
            iconName: "HeartPulse",
          },
          {
            title: "Neuroscience",
            slug: "/therapeutic-areas/neuroscience",
            description: "CNS disorders, neurodegenerative diseases & cognition trials.",
            iconName: "Brain",
          },
          {
            title: "Immunology",
            slug: "/therapeutic-areas/immunology",
            description: "Autoimmune conditions, biologics & immune modulation.",
            iconName: "ShieldCheck",
          },
          {
            title: "Infectious Diseases",
            slug: "/therapeutic-areas/infectious-diseases",
            description: "Novel antivirals, antibiotics, fungal & parasitic studies.",
            iconName: "Bug",
          },
        ],
      },
      {
        name: "Internal Medicine & Metabolic",
        items: [
          {
            title: "Endocrinology",
            slug: "/therapeutic-areas/endocrinology",
            description: "Diabetes, metabolic syndrome, obesity & hormone therapies.",
            iconName: "Activity",
          },
          {
            title: "Gastroenterology & Hepatology",
            slug: "/therapeutic-areas/gastroenterology-hepatology",
            description: "IBD, NASH/MASH, liver cirrhosis & GI tract disorders.",
            iconName: "Stethoscope",
          },
          {
            title: "Pulmonology & Respiratory Medicine",
            slug: "/therapeutic-areas/pulmonology-respiratory-medicine",
            description: "Asthma, COPD, pulmonary fibrosis & respiratory care.",
            iconName: "Wind",
          },
          {
            title: "Nephrology",
            slug: "/therapeutic-areas/nephrology",
            description: "CKD, acute kidney injury, dialysis & renal interventions.",
            iconName: "Droplet",
          },
          {
            title: "Dermatology",
            slug: "/therapeutic-areas/dermatology",
            description: "Psoriasis, atopic dermatitis, aesthetic & skin therapies.",
            iconName: "SunMedium",
          },
        ],
      },
      {
        name: "Specialized & Populations",
        items: [
          {
            title: "Ophthalmology",
            slug: "/therapeutic-areas/ophthalmology",
            description: "Retinal disorders, glaucoma, cornea & gene therapies.",
            iconName: "Eye",
          },
          {
            title: "Obstetrics & Gynecology",
            slug: "/therapeutic-areas/obstetrics-gynecology",
            description: "Women's health, fertility, maternal-fetal medicine.",
            iconName: "Flower2",
          },
          {
            title: "Pediatrics",
            slug: "/therapeutic-areas/pediatrics",
            description: "Specialized pediatric pharmacology & pediatric trials.",
            iconName: "Baby",
          },
          {
            title: "Psychiatry & Psychology",
            slug: "/therapeutic-areas/psychiatry-psychology",
            description: "Major depression, anxiety, PTSD & neuro-psychiatry.",
            iconName: "Smile",
          },
          {
            title: "Urology",
            slug: "/therapeutic-areas/urology",
            description: "Prostate health, urinary disorders & uro-oncology.",
            iconName: "Cross",
          },
        ],
      },
      {
        name: "Complex & Innovative",
        items: [
          {
            title: "Rare Diseases",
            slug: "/therapeutic-areas/rare-diseases",
            description: "Orphan drugs, genetic mapping & low-prevalence trials.",
            iconName: "Sparkle",
            badge: "Orphan Drug",
          },
          {
            title: "Vaccines",
            slug: "/therapeutic-areas/vaccines",
            description: "Preventative, therapeutic & mRNA vaccine clinical research.",
            iconName: "Syringe",
          },
          {
            title: "Pain Management",
            slug: "/therapeutic-areas/pain-management",
            description: "Chronic pain, non-opioid analgesics & post-surgical care.",
            iconName: "Thermometer",
          },
          {
            title: "Medical Devices",
            slug: "/therapeutic-areas/medical-devices",
            description: "Class I-III medical device, diagnostics & PMA trials.",
            iconName: "Cpu",
          },
          {
            title: "Medical Diagnostics",
            slug: "/therapeutic-areas/medical-diagnostics",
            description: "In-vitro diagnostics, molecular assays & biomarker trials.",
            iconName: "FlaskConical",
          },
        ],
      },
    ],
  },
  {
    title: "Products",
    slug: "/products",
    type: "megamenu",
    description: "The complete TruForm eClinical Suite accelerating data transformation and study execution.",
    featured: {
      title: "TruForm Unified Platform",
      description: "An all-in-one unified eClinical ecosystem unifying EDC, CTMS, RTSM, ePRO, and CDISC SDTM/ADaM automation.",
      slug: "/products/truform-platform",
      badge: "Flagship Suite",
    },
    categories: [
      {
        name: "Core Data & Standards",
        items: [
          {
            title: "TruForm Platform",
            slug: "/products/truform-platform",
            description: "Integrated cloud platform powering next-gen clinical workflows.",
            iconName: "Boxes",
            badge: "Platform",
          },
          {
            title: "TruForm EDC",
            slug: "/products/truform-edc",
            description: "Electronic Data Capture with real-time validation and clean query engine.",
            iconName: "Database",
            badge: "High Demand",
          },
          {
            title: "TruForm SDTM",
            slug: "/products/truform-sdtm",
            description: "Automated CDISC SDTM mapping, conversion & compliance.",
            iconName: "FileSpreadsheet",
          },
          {
            title: "TruForm ADaM",
            slug: "/products/truform-adam",
            description: "Analysis Data Model generation & statistical dataset validation.",
            iconName: "Binary",
          },
          {
            title: "TruForm TLF",
            slug: "/products/truform-tlf",
            description: "Automated Tables, Listings & Figures generation for submissions.",
            iconName: "BarChart3",
          },
        ],
      },
      {
        name: "Trial Operations & eSource",
        items: [
          {
            title: "TruForm DocuVault",
            slug: "/products/truform-docuvault",
            description: "eTMF and 21 CFR Part 11 compliant digital document repository.",
            iconName: "FolderLock",
          },
          {
            title: "TruForm eConsent",
            slug: "/products/truform-econsent",
            description: "Interactive multimedia informed consent for patient onboarding.",
            iconName: "FileCheck",
          },
          {
            title: "TruForm Adjudication",
            slug: "/products/truform-adjudication",
            description: "Blind endpoint adjudication committee (EAC) workflow software.",
            iconName: "Gavel",
          },
          {
            title: "TruForm RBQM",
            slug: "/products/truform-rbqm",
            description: "Risk-Based Quality Management & centralized statistical monitoring.",
            iconName: "SlidersHorizontal",
            badge: "ICH E6(R2)",
          },
        ],
      },
      {
        name: "Patient & Site Logistics",
        items: [
          {
            title: "TruForm CTMS",
            slug: "/products/truform-ctms",
            description: "Clinical Trial Management System for site milestones and tracking.",
            iconName: "Workflow",
          },
          {
            title: "TruForm RTSM",
            slug: "/products/truform-rtsm",
            description: "Randomization & Trial Supply Management with automated drug dispatch.",
            iconName: "PackageCheck",
          },
          {
            title: "TruForm ePRO",
            slug: "/products/truform-epro",
            description: "electronic Patient-Reported Outcomes and direct digital diaries.",
            iconName: "Smartphone",
            badge: "Patient First",
          },
        ],
      },
    ],
  },
  {
    title: "Giving Back",
    slug: "/giving-back",
    type: "link",
  },
  {
    title: "Resources",
    slug: "/resources",
    type: "dropdown",
    description: "Insights, clinical intelligence, upcoming conferences, and whitepapers.",
    items: [
      {
        title: "Blogs",
        slug: "/resources/blogs",
        description: "Latest insights, CRO methodologies, and regulatory analyses.",
        iconName: "BookOpenText",
        badge: "Updated Weekly",
      },
      {
        title: "Events",
        slug: "/resources/events",
        description: "Join us at upcoming industry webinars, symposiums & conferences.",
        iconName: "CalendarDays",
      },
    ],
  },
  {
    title: "Careers",
    slug: "/careers",
    type: "link",
  },
  {
    title: "Contact Us",
    slug: "/contact-us",
    type: "link",
  },
];

export const TOP_BAR_INFO = {
  phone: "+1 (800) 555-TRU9",
  email: "contact@trumindsclinical.com",
  location: "Global Presence: US • Europe • APAC",
  clientPortalUrl: "/contact-us",
};
