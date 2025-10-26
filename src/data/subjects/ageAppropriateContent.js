// src/data/ageAppropriateContent.js
export const ageGroups = {
  ages6_7: {
    name: "Ages 6-7",
    description: "Foundational skills with lots of visual and hands-on activities",
    characteristics: [
      "Short attention spans (10-15 minutes per activity)",
      "Learn through play and movement",
      "Concrete thinking",
      "Love stories and characters",
      "Need immediate feedback"
    ]
  },
  ages8_9: {
    name: "Ages 8-9", 
    description: "Building independence with more complex concepts",
    characteristics: [
      "Longer attention spans (15-20 minutes)",
      "Developing abstract thinking",
      "Enjoy challenges and games",
      "Beginning to work independently",
      "Social learners"
    ]
  },
  ages10: {
    name: "Age 10",
    description: "Preparing for more advanced learning with critical thinking",
    characteristics: [
      "Sustained focus (20-30 minutes)",
      "Abstract reasoning skills",
      "Problem solvers",
      "Enjoy projects and research",
      "Developing personal interests"
    ]
  }
};

export const getAgeAppropriateLessons = (age) => {
  if (age >= 6 && age <= 7) return 'ages6_7';
  if (age >= 8 && age <= 9) return 'ages8_9';
  if (age === 10) return 'ages10';
  return 'ages6_7'; // default
};