// src/data/subjects/english.js
export const englishContent = {
  ages6_7: {
    title: "English for Ages 6-7",
    description: "Phonics, basic reading, and beginning writing through stories and games",
    lessons: {
      1: {
        title: "ABC Adventure",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Letter recognition", "Letter sounds", "Beginning letter formation"],
        introduction: {
          animation: "alphabet",
          task: "What letter does your name start with?",
          description: "Join the ABC Adventure! We'll meet all the letters and learn their special sounds.",
          videoPrompt: "Watch the letters come to life and sing their sounds"
        },
        practical: {
          type: "phonics",
          content: "Match letters to their sounds and pictures",
          questions: [
            {
              type: "letter-sound",
              question: "Which letter says 'a' like in apple?",
              options: ["B", "A", "C"],
              correct: "A"
            },
            {
              type: "beginning-sound",
              question: "What sound do you hear at the beginning of 'ball'?",
              options: ["b", "a", "l"],
              correct: "b"
            }
          ]
        },
        takeHome: {
          task: "Create an alphabet collage for one letter",
          instructions: "Choose one letter. Cut out pictures from magazines that start with that letter.",
          materials: ["Magazines", "Scissors", "Glue", "Paper"],
          duration: "15 minutes"
        }
      },
      2: {
        title: "Sight Word Superhero",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Recognize common sight words", "Build reading confidence", "Word memorization"],
        introduction: {
          animation: "sight-words",
          task: "What words can you read without sounding out?",
          description: "Become a Sight Word Superhero! Learn words we see all the time in stories.",
          videoPrompt: "Watch the sight word superheroes save the day"
        },
        practical: {
          type: "sight-words",
          content: "Practice reading and matching sight words",
          questions: [
            {
              type: "word-recognition",
              question: "Which word is 'the'?",
              options: ["thé", "the", "teh"],
              correct: "the"
            },
            {
              type: "word-matching",
              question: "Match the word to the picture: 🏠",
              options: ["house", "home", "building"],
              correct: "house"
            }
          ]
        },
        takeHome: {
          task: "Make sight word flashcards",
          instructions: "Write sight words on cards: the, and, is, in, it. Practice reading them to a family member.",
          materials: ["Index cards", "Marker"],
          duration: "15 minutes"
        }
      }
    }
  },
  ages8_9: {
    title: "English for Ages 8-9",
    description: "Reading comprehension, grammar, and creative writing development",
    lessons: {
      1: {
        title: "Reading Detectives",
        level: "Intermediate",
        duration: "20 min",
        objectives: ["Reading comprehension", "Answering questions about stories", "Making predictions"],
        introduction: {
          animation: "reading",
          task: "What do you think will happen next in the story?",
          description: "Become a Reading Detective! We'll learn how to find clues in stories and understand what we read.",
          videoPrompt: "Join the reading detective team solve story mysteries"
        },
        practical: {
          type: "comprehension",
          content: "Read short passages and answer questions",
          questions: [
            {
              type: "comprehension",
              passage: "Tom had a red ball. He threw the ball to his dog. The dog chased the ball and brought it back.",
              question: "What color was Tom's ball?",
              options: ["Blue", "Red", "Green"],
              correct: "Red"
            },
            {
              type: "prediction",
              passage: "The sky grew dark. Wind started to blow. Leaves flew through the air.",
              question: "What will probably happen next?",
              options: ["It will snow", "It will rain", "The sun will come out"],
              correct: "It will rain"
            }
          ]
        },
        takeHome: {
          task: "Read a story and draw what happens next",
          instructions: "Read a short story. Draw a picture showing what you think happens after the story ends.",
          materials: ["Story book", "Paper", "Crayons"],
          duration: "20 minutes"
        }
      }
    }
  }
};