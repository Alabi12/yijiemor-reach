// src/data/subjects/science.js
export const scienceContent = {
  ages6_7: {
    title: "Science for Ages 6-7",
    description: "Hands-on exploration of plants, animals, and simple scientific concepts",
    lessons: {
      1: {
        title: "Amazing Animal Families",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Identify animal groups", "Learn animal names", "Understand basic animal characteristics"],
        introduction: {
          animation: "animals",
          task: "What animals live in your neighborhood?",
          description: "Explore amazing animal families! We'll learn about mammals, birds, fish, and reptiles.",
          videoPrompt: "Meet different animal families and their babies"
        },
        practical: {
          type: "classification",
          content: "Sort animals into groups and learn their characteristics",
          questions: [
            {
              type: "animal-groups",
              question: "Which animal is a mammal?",
              options: ["🐠 Fish", "🐦 Bird", "🐶 Dog"],
              correct: "🐶 Dog"
            },
            {
              type: "baby-animals",
              question: "What is a baby cat called?",
              options: ["Puppy", "Kitten", "Cub"],
              correct: "Kitten"
            }
          ]
        },
        takeHome: {
          task: "Create an animal fact card",
          instructions: "Choose your favorite animal. Draw it and write 3 facts about it.",
          materials: ["Paper", "Crayons", "Pencil"],
          duration: "15 minutes"
        }
      },
      2: {
        title: "Weather Watchers",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Identify weather types", "Understand weather safety", "Observe weather patterns"],
        introduction: {
          animation: "weather",
          task: "What's the weather like outside right now?",
          description: "Become a Weather Watcher! Learn about sunny days, rainy days, and everything in between.",
          videoPrompt: "Explore different types of weather with our weather friends"
        },
        practical: {
          type: "weather",
          content: "Identify weather types and appropriate clothing",
          questions: [
            {
              type: "weather-identification",
              question: "What should you wear on a rainy day?",
              options: ["Raincoat", "Swimsuit", "Winter coat"],
              correct: "Raincoat"
            },
            {
              type: "weather-safety",
              question: "What should you do during a thunderstorm?",
              options: ["Go swimming", "Stay inside", "Fly a kite"],
              correct: "Stay inside"
            }
          ]
        },
        takeHome: {
          task: "Keep a 3-day weather journal",
          instructions: "Each day, draw the weather and write one sentence about it.",
          materials: ["Paper", "Crayons", "Pencil"],
          duration: "3 days, 5 minutes each day"
        }
      }
    }
  }
};