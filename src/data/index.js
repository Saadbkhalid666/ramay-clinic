/* ===== ADD YOUR IMAGES HERE =====
   Paste an image link or a data: URI between the quotes. Empty = placeholder shows.
   hero = hero photo, g1-g4 = gallery, d0-d5 = doctors in card order
   (Hafiz, Zeeshan, Adeel, Asmaa, Rafia, Nuzhat) */
import clinicimg from "../assets/clinicimg.jpg";
import clinicimg1 from "../assets/clinicimg1.jpg";
import clinicimg2 from "../assets/clinicimg2.jpg";
import clinicimg3 from "../assets/clinicimg3.jpeg";
import doctorbilalimage from "../assets/drhbrr.png"

export const IMG = {
  hero: "",
  g1: clinicimg,
  g2: clinicimg1,
  g3: clinicimg2,
  g4: clinicimg3,
  d0: doctorbilalimage,
  d1: "",
  d2: "",
  d3: "",
  d4: "",
  d5: "",
};

export const DEPTS = [
  {
    k: "med",
    n: "Internal Medicine, Nephrology & Diabetes",
    d: "Kidney care, diabetes management and complete adult medical consultation.",
    f: "Medicine",
  },
  {
    k: "ortho",
    n: "Orthopedic Surgery & Bone Care",
    d: "Diagnosis and surgical care for bones, joints, fractures and mobility.",
    f: "Orthopedics",
  },
  {
    k: "derm",
    n: "Dermatology & Cosmetology",
    d: "Skin, hair and nail treatment alongside advanced cosmetic care.",
    f: "Dermatology",
  },
  {
    k: "peds",
    n: "Pediatrics & Child Care",
    d: "Growth, vaccination and everyday illness care for infants and children.",
    f: "Pediatrics",
  },
  {
    k: "physio",
    n: "Physiotherapy & Rehabilitation",
    d: "Hands-on therapy and recovery programs after injury or surgery.",
    f: "Physiotherapy",
  },
  {
    k: "psych",
    n: "Clinical Psychology & Counseling",
    d: "Confidential counseling and therapy for stress, anxiety and wellbeing.",
    f: "Psychology",
  },
];

const slug = (n) =>
  n
    .toLowerCase()
    .replace(/^dr\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const RAW_DOCS = [
  {
    n: "Dr. Hafiz Bilal Rasool Ramay",
    r: "Nephrologist, Diabetologist & Consultant Physician",
    q: "MBBS (K.E), MRCP (UK), FCPS (Nephrology), ESCE (UK)",
    y: "11+",
    s: "4.9",
    f: "Medicine",
    t: "Nephrology & Medicine",
    c: "#0D9488,#0F766E",
  },
  {
    n: "Dr. Zeeshan Saleem",
    r: "Orthopedic Surgeon",
    q: "MBBS, MS (Orth)",
    y: "18+",
    s: "4.7",
    f: "Orthopedics",
    t: "Orthopedics",
    c: "#0F172A,#334155",
  },
  {
    n: "Dr. Adeel Masoud",
    r: "Pediatrician",
    q: "MBBS, DCH, FCPS (Paediatrics)",
    y: "13+",
    s: "5.0",
    f: "Pediatrics",
    t: "Pediatrics",
    c: "#D97706,#B45309",
  },
  {
    n: "Dr. Asmaa Batool Ramay",
    r: "Dermatologist & Cosmetologist",
    q: "MBBS, FCPS",
    y: "7+",
    s: "5.0",
    f: "Dermatology",
    t: "Dermatology",
    c: "#0D9488,#134e4a",
  },
  {
    n: "Dr. Rafia Sultana",
    r: "Physiotherapist",
    q: "DPT, MS-OMPT",
    y: "6+",
    s: "5.0",
    f: "Physiotherapy",
    t: "Physiotherapy",
    c: "#334155,#0D9488",
  },
  {
    n: "Nuzhat Shaheen",
    r: "Clinical Psychologist",
    q: "ADCP, MSc Psychology, MSCP",
    y: "7+",
    s: null,
    f: "Psychology",
    t: "Psychology",
    c: "#B45309,#0F172A",
  },
];

export const DOCS = RAW_DOCS.map((d, i) => ({ ...d, id: slug(d.n), i }));

export const FILTERS = ["All", ...DEPTS.map((d) => d.f)];

/* initials for avatars, e.g. "Dr. Hafiz Bilal" -> "HB" */
export const initials = (n) =>
  n
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

/* SAMPLE testimonials: replace with real patient reviews (with permission) */
export const TESTI = [
  {
    n: "Ayesha K.",
    d: "Parent • Pediatrics",
    q: "Our son felt comfortable straight away and the doctor explained everything clearly. Collecting his medicines at the on-site pharmacy saved us a second trip.",
  },
  {
    n: "Muhammad T.",
    d: "Patient • Internal Medicine",
    q: "Clear explanations, no rushing, and a proper follow-up plan. The whole visit felt organized and caring.",
  },
  {
    n: "Sana R.",
    d: "Patient • Dermatology",
    q: "Friendly staff and a doctor who actually listens. Booking was easy and the clinic was clean and calm.",
  },
  {
    n: "Imran S.",
    d: "Patient • Orthopedics",
    q: "I was worried about my knee, but the consultation was thorough and reassuring. I would recommend Ramay Clinic to family.",
  },
  {
    n: "Hira A.",
    d: "Patient • Physiotherapy",
    q: "My therapist built a routine I could follow at home and checked my progress at every visit.",
  },
  {
    n: "Bilal M.",
    d: "Patient • Medical Store",
    q: "I needed medicine late at night and the 24/7 store was open. That kind of reliability is rare.",
  },
];

export const FAQ = [
  [
    "What are your booking hours?",
    "Appointments can be booked Monday to Sunday, 9:00 AM – 11:00 PM, online through this page or by phone on 042-38900939 / 0334-8211969.",
  ],
  [
    "Is the medical store really open 24/7?",
    "Yes. Ramay Clinic & Medical Store is open 24 hours a day, every day.",
  ],
  [
    "How do I book an appointment?",
    "Tap any Book button, choose your doctor or department, pick a date and enter your phone number. Our team will call you to confirm the time.",
  ],
  [
    "Which departments do you have?",
    "Internal Medicine, Nephrology & Diabetes; Orthopedic Surgery & Bone Care; Dermatology & Cosmetology; Pediatrics & Child Care; Physiotherapy & Rehabilitation; and Clinical Psychology & Counseling.",
  ],
  [
    "Where are you located?",
    "Ali View Garden, Beside Royal Palace Marriage Hall, Opposite Nadrabad No. 1, Bedian Road, Lahore.",
  ],
  [
    "Can I bring my child to see a doctor?",
    "Yes. Our Pediatrics department is led by Dr. Adeel Masoud (MBBS, DCH, FCPS Paediatrics) for infants and children.",
  ],
  [
    "Do you offer counseling or mental health support?",
    "Yes. Clinical psychologist Nuzhat Shaheen (ADCP, MSc Psychology, MSCP) provides counseling and therapy.",
  ],
  [
    "What should I do in a medical emergency?",
    "For life-threatening emergencies, go to your nearest emergency department immediately. For guidance during clinic hours, call us on 042-38900939.",
  ],
]; 

export const GALLERY = [
  ["g1", "Reception & waiting area"],
  ["g2", "Consultation rooms"],
  ["g3", "24/7 medical store"],
  ["g4", "Clinic exterior"],
];

/* Doctor bios, same order as DOCS */
export const BIO = [
  {
    b: "Dr. Hafiz Bilal Rasool Ramay is a nephrologist, diabetologist and consultant physician with more than 11 years of experience. His training spans MBBS (K.E), MRCP (UK), FCPS in Nephrology and ESCE (UK), and he cares for adults at Ramay Clinic.",
    a: [
      "Kidney disease care",
      "Diabetes management",
      "Blood pressure and general adult medicine",
    ],
  },
  {
    b: "Dr. Zeeshan Saleem is an orthopedic surgeon with more than 18 years of experience, qualified with an MBBS and MS (Orth). He is the longest-practising specialist on our team.",
    a: [
      "Fractures and injuries",
      "Joint and bone pain",
      "Orthopedic surgery and follow-up care",
    ],
  },
  {
    b: "Dr. Adeel Masoud is a pediatrician with more than 13 years of experience, holding an MBBS, DCH and FCPS (Paediatrics). He looks after the health of infants, children and growing families.",
    a: [
      "Newborn and infant care",
      "Childhood illnesses and growth",
      "Vaccination and routine check-ups",
    ],
  },
  {
    b: "Dr. Asmaa Batool Ramay is a dermatologist and cosmetologist with more than 7 years of experience, qualified with an MBBS and FCPS.",
    a: [
      "Skin, hair and nail conditions",
      "Acne and pigmentation",
      "Cosmetic dermatology",
    ],
  },
  {
    b: "Dr. Rafia Sultana is a physiotherapist with more than 6 years of experience, holding a DPT and MS-OMPT.",
    a: [
      "Rehabilitation after injury or surgery",
      "Back, neck and joint pain",
      "Mobility and strengthening programs",
    ],
  },
  {
    b: "Nuzhat Shaheen is a clinical psychologist with more than 7 years of experience, holding an ADCP, MSc Psychology and MSCP.",
    a: [
      "Counseling and therapy",
      "Stress, anxiety and low mood",
      "Support for children and adults",
    ],
  },
];

export const CLINIC = {
  address:
    "Ali View Garden, Beside Royal Palace Marriage Hall, Opposite Nadrabad No. 1, Bedian Road, Lahore",
  hours: "Mon–Sun, 9:00 AM – 11:00 PM",
  phone1: "042-38900939",
  phone1Href: "tel:+924238900939",
  phone2: "0334-8211969",
  phone2Href: "tel:+923348211969",
};
