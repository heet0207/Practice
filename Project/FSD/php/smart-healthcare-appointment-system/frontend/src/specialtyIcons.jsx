import React from "react";

/* Line-art icons for the specialty grid. Two-tone: ink outline + accent fills,
   consistent with the app's --ink / --accent design tokens. */

const base = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke: "var(--ink)", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
const accent = "var(--accent)";

export const IconGeneralPhysician = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="7.5" r="3.2" />
    <path d="M5 21v-2.2C5 15.6 8.1 14 12 14s7 1.6 7 4.8V21" />
    <path d="M12 10.7v3M10.6 12.2h2.8" stroke={accent} />
  </svg>
);

export const IconDermatology = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3c3.2 3.4 5.4 6.4 5.4 9.4a5.4 5.4 0 1 1-10.8 0C6.6 9.4 8.8 6.4 12 3Z" />
    <circle cx="12" cy="13.2" r="1.3" fill={accent} stroke="none" />
  </svg>
);

export const IconObGyn = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3c-2.6 0-4.6 2-4.6 4.6 0 3 2.2 5.2 4.6 7.6 2.4-2.4 4.6-4.6 4.6-7.6C16.6 5 14.6 3 12 3Z" />
    <path d="M12 15.2V21M9 18h6" />
    <circle cx="12" cy="7.6" r="1.2" fill={accent} stroke="none" />
  </svg>
);

export const IconOrthopaedics = (p) => (
  <svg {...base} {...p}>
    <path d="M7 9a2.5 2.5 0 1 0 3.5 3.5l3-3A2.5 2.5 0 1 0 17 6l-1.3 1.3M17 15a2.5 2.5 0 1 1-3.5-3.5l-3 3A2.5 2.5 0 1 1 7 18l1.3-1.3" />
    <circle cx="8.2" cy="8.2" r="0.9" fill={accent} stroke="none" />
    <circle cx="15.8" cy="15.8" r="0.9" fill={accent} stroke="none" />
  </svg>
);

export const IconEnt = (p) => (
  <svg {...base} {...p}>
    <path d="M8 13c0 3.3 1.8 6 4.5 6S17 17 17 12.5 15 5 12 5a4.2 4.2 0 0 0-4.2 4.2c0 1.6.9 2.3 1.7 3" />
    <circle cx="13.2" cy="12.3" r="1" fill={accent} stroke="none" />
  </svg>
);

export const IconNeurology = (p) => (
  <svg {...base} {...p}>
    <path d="M9.5 4.2a2.6 2.6 0 0 0-2.6 2.6c0 .3 0 .5.1.8A2.6 2.6 0 0 0 6 10c0 1 .5 1.8 1.3 2.3-.2.4-.3.8-.3 1.3A2.6 2.6 0 0 0 9.6 16" />
    <path d="M14.5 4.2a2.6 2.6 0 0 1 2.6 2.6c0 .3 0 .5-.1.8A2.6 2.6 0 0 1 18 10c0 1-.5 1.8-1.3 2.3.2.4.3.8.3 1.3a2.6 2.6 0 0 1-2.9 2.4" />
    <path d="M9.6 16v2.4a1.6 1.6 0 0 0 3.2 0V16M12.2 16v2.6a1.6 1.6 0 0 0 3.2 0" />
    <circle cx="12" cy="9" r="0.8" fill={accent} stroke="none" />
  </svg>
);

export const IconCardiology = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20.2s-7.4-4.5-7.4-9.9A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.4 3.1c0 5.4-7.4 9.9-7.4 9.9Z" />
    <path d="M5.5 12h2.7l1.2-2.6 1.6 4.4 1.1-2 .8 1.2h3.4" stroke={accent} />
  </svg>
);

export const IconUrology = (p) => (
  <svg {...base} {...p}>
    <path d="M9 4c0 2-1.6 2.4-1.6 4.6a2.6 2.6 0 1 0 5.2 0c0-1.2-.6-1.8-.6-3" />
    <path d="M15 4c0 2 1.6 2.4 1.6 4.6a2.6 2.6 0 1 1-5.2 0" />
    <path d="M9.6 11.5V15a2.4 2.4 0 0 0 4.8 0v-3.3" />
    <path d="M12 15v4" stroke={accent} />
  </svg>
);

export const IconGastro = (p) => (
  <svg {...base} {...p}>
    <path d="M9 4c-1.6 1-2.5 2.8-2.5 5 0 3.6 2.3 4.3 2.3 6.6a3.3 3.3 0 0 0 6.6 0c0-1.6-1-2-1-3.4a2.6 2.6 0 0 1 2.6-2.6" />
    <circle cx="10.5" cy="11" r="1" fill={accent} stroke="none" />
  </svg>
);

export const IconPsychiatry = (p) => (
  <svg {...base} {...p}>
    <path d="M8 12a4 4 0 0 1 8 0c0 1.6-.7 2.2-.7 3.6a2 2 0 0 1-4 0V15" />
    <path d="M6.5 12a1.7 1.7 0 1 1 0-3.4M17.5 12a1.7 1.7 0 1 0 0-3.4" />
    <path d="M12 3v2.6" stroke={accent} />
  </svg>
);

export const IconPaediatrics = (p) => (
  <svg {...base} {...p}>
    <circle cx="10" cy="7" r="2.6" />
    <path d="M12.4 8.6c1.6.2 3.1 1 3.1 2.8 0 1.4-1 1.9-1 3.2a2.6 2.6 0 0 1-5.2 0v-1.2" />
    <circle cx="15.5" cy="16.5" r="1" fill={accent} stroke="none" />
  </svg>
);

export const IconPulmonology = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4v6" />
    <path d="M12 10c-1 0-1.6.8-3 .8-2 0-3.5 1.6-3.5 3.8 0 2 1.3 3.4 2.8 3.4 1.3 0 1.7-1 1.7-2.4v-3" />
    <path d="M12 10c1 0 1.6.8 3 .8 2 0 3.5 1.6 3.5 3.8 0 2-1.3 3.4-2.8 3.4-1.3 0-1.7-1-1.7-2.4v-3" />
    <circle cx="12" cy="5.2" r="1" fill={accent} stroke="none" />
  </svg>
);

export const IconEndocrinology = (p) => (
  <svg {...base} {...p}>
    <path d="M7.5 5c0 2.2-1.5 2.6-1.5 5a3.3 3.3 0 0 0 6.6 0c0-1.4-.7-1.9-.7-3.2" />
    <path d="M13.4 12.5A3.3 3.3 0 0 0 20 12.5c0-2.4-1.5-2.8-1.5-5" />
    <circle cx="9.7" cy="14.5" r="1" fill={accent} stroke="none" />
  </svg>
);

export const IconNephrology = (p) => (
  <svg {...base} {...p}>
    <path d="M9 4.5C6.8 5 6 7.6 6.6 10.4c.5 2.4 2.6 3 2.6 5.4a2.6 2.6 0 0 0 5.2 0c0-.8-.3-1.2-.7-1.8" />
    <path d="M15 4.5c2.2.5 3 3.1 2.4 5.9-.5 2.4-2.6 3-2.6 5.4" />
    <circle cx="11" cy="9.5" r="0.9" fill={accent} stroke="none" />
  </svg>
);

export const IconNeurosurgery = (p) => (
  <svg {...base} {...p}>
    <circle cx="11.3" cy="10" r="5.3" />
    <path d="M9 8.3c.8-.3 1.4.1 1.7.8.4.9 1.3.9 1.7 0 .3-.7.9-1.1 1.7-.8" />
    <path d="M16 6l3-1.6M17 9.3l3.4-.6" stroke={accent} />
  </svg>
);

export const IconRheumatology = (p) => (
  <svg {...base} {...p}>
    <path d="M7 9a2.5 2.5 0 1 0 3.5 3.5l3-3A2.5 2.5 0 1 0 17 6l-1.3 1.3M17 15a2.5 2.5 0 1 1-3.5-3.5l-3 3A2.5 2.5 0 1 1 7 18l1.3-1.3" />
    <path d="M9 15l6-6" stroke={accent} strokeDasharray="1.5 1.8" />
  </svg>
);

export const IconOphthalmology = (p) => (
  <svg {...base} {...p}>
    <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.6" />
    <circle cx="12" cy="12" r="0.9" fill={accent} stroke="none" />
  </svg>
);

export const IconSurgicalGastro = (p) => (
  <svg {...base} {...p}>
    <path d="M9 4c-1.6 1-2.5 2.8-2.5 5 0 3.6 2.3 4.3 2.3 6.6a3.3 3.3 0 0 0 6.6 0c0-1.6-1-2-1-3.4a2.6 2.6 0 0 1 2.6-2.6" />
    <path d="M16.5 4.5l2.3 2.3M18.8 4.5l-2.3 2.3" stroke={accent} />
  </svg>
);

export const IconInfectiousDisease = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7" />
    <circle cx="12" cy="12" r="1.2" fill={accent} stroke="none" />
  </svg>
);

export const IconGeneralLapSurgery = (p) => (
  <svg {...base} {...p}>
    <path d="M7 8c3 1.5 5 4.4 5 8" />
    <path d="M17 8c-1.6.8-2.8 2-3.6 3.5" />
    <circle cx="6.2" cy="7" r="1.3" />
    <circle cx="17.8" cy="7" r="1.3" />
    <path d="M12 16v3" stroke={accent} />
  </svg>
);

export const IconPsychology = (p) => (
  <svg {...base} {...p}>
    <circle cx="10" cy="8" r="3" />
    <path d="M6 20v-1.6c0-2.6 2.4-4.4 5-4.4M15 9.5a2.3 2.3 0 0 1 2.3 2.3c0 1-.6 1.4-.6 2.3a1.7 1.7 0 0 1-3.4 0" />
    <path d="M15.7 16.1V20" stroke={accent} />
  </svg>
);

export const IconMedicalOncology = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 4.5v2.3M12 17.2v2.3M4.5 12h2.3M17.2 12h2.3M6.9 6.9l1.6 1.6M15.5 15.5l1.6 1.6M17.1 6.9l-1.6 1.6M8.5 15.5l-1.6 1.6" stroke={accent} />
  </svg>
);

export const IconDiabetology = (p) => (
  <svg {...base} {...p}>
    <path d="M9.5 4.2a2.6 2.6 0 0 0-2.6 2.6c0 .3 0 .5.1.8A2.6 2.6 0 0 0 6 10c0 1 .5 1.8 1.3 2.3-.2.4-.3.8-.3 1.3A2.6 2.6 0 0 0 9.6 16" />
    <path d="M14.5 4.2a2.6 2.6 0 0 1 2.6 2.6c0 .3 0 .5-.1.8A2.6 2.6 0 0 1 18 10c0 1-.5 1.8-1.3 2.3.2.4.3.8.3 1.3a2.6 2.6 0 0 1-2.9 2.4" />
    <path d="M9.6 16v2.4a1.6 1.6 0 0 0 3.2 0V16M12.2 16v2.6a1.6 1.6 0 0 0 3.2 0" />
    <path d="M10.8 8.2 12.6 9.6 11 10.4l1.6 1.5" stroke={accent} />
  </svg>
);

export const IconDentist = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4c-2 0-2.3 1.4-3.5 1.4S6 4.4 4.9 5.6c-1.4 1.5-1.1 4.6.2 7.4.9 1.9.9 3.6 1.3 5 .3 1 .8 1.6 1.5 1.6.9 0 1-1.4 1.3-3 .3-1.6.7-2.7 1.8-2.7s1.5 1.1 1.8 2.7c.3 1.6.4 3 1.3 3 .7 0 1.2-.6 1.5-1.6.4-1.4.4-3.1 1.3-5 1.3-2.8 1.6-5.9.2-7.4C15 4.4 14.2 5.4 13 5.4 12.8 5.4 12.4 4 12 4Z" />
    <circle cx="12" cy="8.4" r="0.9" fill={accent} stroke="none" />
  </svg>
);

export const SPECIALTIES = [
  { slug: "general-physician", label: "General Physician & Family Medicine", Icon: IconGeneralPhysician, specializations: ["General Physician"] },
  { slug: "dermatology", label: "Dermatology", Icon: IconDermatology, specializations: ["Dermatologist"] },
  { slug: "obstetrics-gynaecology", label: "Obstetrics & Gynaecology", Icon: IconObGyn, specializations: [] },
  { slug: "orthopaedics", label: "Orthopaedics", Icon: IconOrthopaedics, specializations: ["Orthopedic Surgeon"] },
  { slug: "ent", label: "ENT", Icon: IconEnt, specializations: [] },
  { slug: "neurology", label: "Neurology", Icon: IconNeurology, specializations: ["Neurologist"] },
  { slug: "cardiology", label: "Cardiology", Icon: IconCardiology, specializations: ["Cardiologist"] },
  { slug: "urology", label: "Urology", Icon: IconUrology, specializations: [] },
  { slug: "gastroenterology", label: "Gastroenterology/GI Medicine", Icon: IconGastro, specializations: [] },
  { slug: "psychiatry", label: "Psychiatry", Icon: IconPsychiatry, specializations: [] },
  { slug: "paediatrics", label: "Paediatrics", Icon: IconPaediatrics, specializations: ["Pediatrician"] },
  { slug: "pulmonology", label: "Pulmonology/Chest Medicine", Icon: IconPulmonology, specializations: [] },
  { slug: "endocrinology", label: "Endocrinology", Icon: IconEndocrinology, specializations: [] },
  { slug: "nephrology", label: "Nephrology", Icon: IconNephrology, specializations: [] },
  { slug: "neurosurgery", label: "Neurosurgery", Icon: IconNeurosurgery, specializations: [] },
  { slug: "rheumatology", label: "Rheumatology", Icon: IconRheumatology, specializations: [] },
  { slug: "ophthalmology", label: "Ophthalmology", Icon: IconOphthalmology, specializations: [] },
  { slug: "surgical-gastroenterology", label: "Surgical Gastroenterology", Icon: IconSurgicalGastro, specializations: [] },
  { slug: "infectious-disease", label: "Infectious Disease", Icon: IconInfectiousDisease, specializations: [] },
  { slug: "general-lap-surgery", label: "General & Laparoscopic Surgery", Icon: IconGeneralLapSurgery, specializations: [] },
  { slug: "psychology", label: "Psychology", Icon: IconPsychology, specializations: [] },
  { slug: "medical-oncology", label: "Medical Oncology", Icon: IconMedicalOncology, specializations: [] },
  { slug: "diabetology", label: "Diabetology", Icon: IconDiabetology, specializations: [] },
  { slug: "dentist", label: "Dentist", Icon: IconDentist, specializations: [] }
];

export default SPECIALTIES;
