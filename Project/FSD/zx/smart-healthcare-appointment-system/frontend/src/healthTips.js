// healthTips.js
// General wellness information shown on a doctor's profile page, based on
// their specialization. This is intentionally limited to lifestyle/diet/
// when-to-seek-care guidance — NOT medicines, dosages, or treatment plans.
// Actual treatment must come from a licensed doctor after a real consultation.

const healthTips = {
  Cardiologist: {
    tips: [
      "Aim for at least 30 minutes of moderate exercise most days of the week.",
      "Keep sodium intake in check — try cooking with herbs and spices instead of extra salt.",
      "Get blood pressure and cholesterol checked regularly, especially if it runs in the family.",
      "Limit smoking and alcohol, both of which raise cardiovascular risk."
    ],
    seekCareIf: "you have chest pain, shortness of breath, or irregular heartbeat."
  },
  Dermatologist: {
    tips: [
      "Use a broad-spectrum sunscreen (SPF 30+) daily, even on cloudy days.",
      "Keep skin moisturized, especially after bathing.",
      "Avoid picking at acne or irritated skin — it can lead to scarring or infection.",
      "Check moles or skin spots for changes in size, shape, or color."
    ],
    seekCareIf: "a mole changes shape/color, or a rash doesn't improve after a week."
  },
  Pediatrician: {
    tips: [
      "Keep vaccinations on schedule as recommended by your pediatrician.",
      "Encourage a balanced diet with fruits, vegetables, and enough water.",
      "Make sure your child gets age-appropriate sleep each night.",
      "Track growth milestones and mention any concerns at check-ups."
    ],
    seekCareIf: "your child has a high fever, persistent vomiting, or unusual lethargy."
  },
  "Orthopedic Surgeon": {
    tips: [
      "Warm up before exercise and stretch afterward to protect joints.",
      "Maintain a healthy weight to reduce stress on knees and hips.",
      "Use proper posture and ergonomic setups if you sit for long hours.",
      "Strengthen core and back muscles to support your spine."
    ],
    seekCareIf: "you have persistent joint pain, swelling, or reduced range of motion."
  },
  Neurologist: {
    tips: [
      "Prioritize consistent, good-quality sleep — it matters a lot for brain health.",
      "Manage stress through relaxation techniques, exercise, or hobbies.",
      "Stay mentally active with reading, puzzles, or learning new skills.",
      "Keep blood pressure and blood sugar in a healthy range."
    ],
    seekCareIf: "you experience sudden numbness, confusion, severe headache, or trouble speaking."
  },
  "General Physician": {
    tips: [
      "Schedule an annual check-up even if you feel healthy.",
      "Stay hydrated and aim for balanced meals throughout the day.",
      "Keep track of any recurring symptoms to discuss at your visit.",
      "Stay up to date on routine vaccinations and screenings."
    ],
    seekCareIf: "symptoms persist for more than a few days or noticeably worsen."
  }
};

export function getHealthTips(specialization) {
  return (
    healthTips[specialization] || {
      tips: [
        "Maintain a balanced diet and stay physically active.",
        "Get enough sleep and manage stress levels.",
        "Keep up with routine health check-ups."
      ],
      seekCareIf: "you have symptoms that concern you or don't improve over time."
    }
  );
}

export default healthTips;
