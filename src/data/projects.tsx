export interface DesignProject {
  id: string;
  title: string;
  cat: string;
  desc: string;
  coverImage: string;
  contentImages: string[];
  details: string;
  tools: string[];
  liveLink?: string;
}

export const designStudies: DesignProject[] = [
  {
    id: "mahamaya-temple",
    title: "Mahamaya Temple Raipur",
    cat: "LIVE WEB DESIGN",
    desc: "Official digital presence for the historic Shree Mahamaya Devi Mandir, Raipur.",
    // Your provided Cover Image
    coverImage:
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778418344/328ad96d-dfee-4667-ba6b-09c3f6dcd055.png",
    // Your provided Content Image
    contentImages: [
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778418236/mahamayaHome_krzene.jpg"
    ],
    details:
      "A comprehensive digital transformation for one of India's most sacred sites. The project involved creating a respectful yet modern interface to provide devotees with history, event updates, and donation portals.",
    tools: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://mahamayaraipur.in/"
  },
  {
    id: "icust-banking",
    title: "Icust Banking Application",
    cat: "UI/UX DESIGN",
    desc: "Core platform redesign focusing on user journey optimization and security.",
    coverImage:
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498591/Icust_Banking_Application_psgxf0.jpg",
    contentImages: [
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498591/Icust_Banking_Application_psgxf0.jpg"
    ],
    details:
      "Spearheaded the design of the ICUST platform to improve functionality and accessibility for banking users.",
    tools: ["Figma", "Adobe Creative Suite"]
  },
  {
    id: "transable",
    title: "Transable",
    cat: "SOCIAL IMPACT",
    desc: "A translation app concept for the deaf, mute, and visually impaired.",
    coverImage:
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498592/Transable_cover_nhjach.jpg",
    contentImages: [
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498592/Transable_Screens_igh6or.jpg",
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498592/Transable_wireframe_bm47ba.jpg"
    ],
    details:
      "Designed a bridge for communication using high-contrast UI and gesture-based interaction.",
    tools: ["Figma", "User Research"]
  },
  {
    id: "warship-web",
    title: "Warship Web Application",
    cat: "DEFENSE UI",
    desc: "High-security interface designed for defense-sector operational control.",
    coverImage:
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778499661/warship_login_uub2zb.jpg",
    contentImages: [
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778499631/warship_dashboard_rqulvj.jpg"
    ],
    details:
      "Designed at BEL, focusing on data density, visual hierarchy, and mission-critical accessibility.",
    tools: ["Figma", "Adobe XD"]
  },
  {
    id: "census-mobile",
    title: "Census Mobile App",
    cat: "UX DESIGN",
    desc: "Data collection tool optimized for offline use and high-volume entry.",
    coverImage:
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498912/census_cover_dxetyg.jpg",
    contentImages: [
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498592/Census_Login_sqch40.jpg",
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778498591/Census_Pages_huqxvs.jpg"
    ],
    details:
      "Focused on reducing friction in complex form-filling workflows for field workers.",
    tools: ["Figma", "UX Research"]
  },
  {
    id: "abc Banking",
    title: "ABC Banking",
    cat: "BANKING UI",
    desc: "Dashboard for banking stakeholder analytics.",
    coverImage:
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778502702/Abc_login_zyn2ud.jpg",
    contentImages: [
      "https://res.cloudinary.com/dyeqpzozb/image/upload/v1778503018/ABC_Screens_1_kctniq.svg"
    ],
    details:
      "Visualizing complex customer data into actionable insights for banking executives.",
    tools: ["Figma", "Adobe XD"]
  }
];
