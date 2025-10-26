// src/data/subjects/french.js
export const frenchContent = {
  ages6_7: {
    title: "French for Ages 6-7",
    description: "Basic French through songs, games, and fun activities",
    lessons: {
      1: {
        title: "Bonjour! Greetings",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Basic greetings", "French sounds", "Cultural awareness"],
        introduction: {
          animation: "greetings",
          task: "How do you say hello in French?",
          description: "Let's learn to say hello and goodbye in French! We'll meet our French friends Pierre and Marie.",
          videoPrompt: "Watch French children greet each other"
        },
        practical: {
          type: "audio",
          content: "Listen and repeat French greetings",
          questions: [
            {
              type: "audio",
              phrase: "Bonjour",
              meaning: "Hello (Good day)",
              pronunciation: "bohn-zhoor"
            },
            {
              type: "audio",
              phrase: "Au revoir",
              meaning: "Goodbye",
              pronunciation: "oh ruh-vwahr"
            },
            {
              type: "audio",
              phrase: "Merci",
              meaning: "Thank you",
              pronunciation: "mehr-see"
            }
          ]
        },
        takeHome: {
          task: "Greet your family members in French today",
          instructions: "Use 'Bonjour' in the morning and 'Bonsoir' in the evening. Count how many times you use French.",
          materials: ["None needed"],
          duration: "Throughout the day"
        }
      },
      2: {
        title: "Colors in French",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Color vocabulary", "Pronunciation practice", "Color recognition"],
        introduction: {
          animation: "colors",
          task: "What are the colors of the rainbow in French?",
          description: "Let's paint with French words! Learn the beautiful French words for colors through fun games.",
          videoPrompt: "See the rainbow in French colors"
        },
        practical: {
          type: "matching",
          content: "Match French color words to colors",
          questions: [
            {
              type: "color-matching",
              question: "What is 'rouge' in English?",
              options: ["Red", "Blue", "Green"],
              correct: "Red"
            },
            {
              type: "color-identification",
              question: "How do you say 'blue' in French?",
              options: ["Vert", "Bleu", "Jaune"],
              correct: "Bleu"
            }
          ]
        },
        takeHome: {
          task: "Create a French color wheel",
          instructions: "Draw a circle and divide it into sections. Color each section and label it in French.",
          materials: ["Paper", "Crayons", "Marker"],
          duration: "15 minutes"
        }
      }
    }
  },
  ages8_9: {
    title: "French for Ages 8-9",
    description: "Building vocabulary and simple conversations",
    lessons: {
      1: {
        title: "Numbers 1-20",
        level: "Intermediate",
        duration: "20 min",
        objectives: ["Count to 20 in French", "Number recognition", "Simple math in French"],
        introduction: {
          animation: "numbers-fr",
          task: "Can you count to 20 in French?",
          description: "Let's count in French! We'll learn numbers through songs and counting games.",
          videoPrompt: "Sing along with French numbers"
        },
        practical: {
          type: "counting",
          content: "Count objects and say the number in French",
          questions: [
            {
              type: "counting",
              question: "How many apples? Say it in French: 🍎🍎",
              options: ["un", "deux", "trois"],
              correct: "deux"
            },
            {
              type: "number-recognition",
              question: "What is 'dix' in English?",
              options: ["10", "6", "12"],
              correct: "10"
            }
          ]
        },
        takeHome: {
          task: "Play 'hide and seek' counting in French",
          instructions: "Hide small objects and have family members find them. Count the found objects in French.",
          materials: ["Small objects to hide"],
          duration: "15 minutes"
        }
      }
    }
  },
  ages10: {
    title: "French for Age 10",
    description: "Conversational French and cultural exploration",
    lessons: {
      1: {
        title: "French Family Words",
        level: "Advanced",
        duration: "25 min",
        objectives: ["Family vocabulary", "Simple sentences", "Cultural family structures"],
        introduction: {
          animation: "family-fr",
          task: "How do you say 'mother' and 'father' in French?",
          description: "Learn to talk about your family in French! We'll meet the Dubois family and learn their names.",
          videoPrompt: "Meet a French family and learn their names"
        },
        practical: {
          type: "family-vocabulary",
          content: "Learn family member names and relationships",
          questions: [
            {
              type: "vocabulary",
              question: "What is 'sister' in French?",
              options: ["frère", "soeur", "mère"],
              correct: "soeur"
            },
            {
              type: "sentence-building",
              question: "Complete the sentence: 'Voici mon ___' (Here is my brother)",
              options: ["soeur", "père", "frère"],
              correct: "frère"
            }
          ]
        },
        takeHome: {
          task: "Create a family tree with French labels",
          instructions: "Draw your family tree and label each family member in French.",
          materials: ["Paper", "Pencil", "Crayons"],
          duration: "20 minutes"
        }
      }
    }
  }
};