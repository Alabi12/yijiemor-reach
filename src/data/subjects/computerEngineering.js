// src/data/subjects/computerEngineering.js
export const computerEngineeringContent = {
  ages6_7: {
    title: "Computer Engineering for Ages 6-7",
    description: "Introduction to computers, sequencing, and basic computational thinking",
    lessons: {
      1: {
        title: "What is a Computer?",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Identify computer parts", "Basic computer vocabulary", "Safe computer use"],
        introduction: {
          animation: "computer-parts",
          task: "What parts does a computer have?",
          description: "Let's explore what makes a computer work! We'll meet the different parts of a computer family.",
          videoPrompt: "Meet the computer family and learn their jobs"
        },
        practical: {
          type: "matching",
          content: "Match computer parts to their functions",
          questions: [
            {
              type: "computer-parts",
              question: "What do we use to type on a computer?",
              options: ["Mouse", "Keyboard", "Screen"],
              correct: "Keyboard"
            },
            {
              type: "computer-safety",
              question: "What should you do before using a computer?",
              options: ["Wash your hands", "Jump up and down", "Shout loudly"],
              correct: "Wash your hands"
            }
          ]
        },
        takeHome: {
          task: "Draw and label a computer",
          instructions: "Draw a computer and label these parts: screen, keyboard, mouse, and CPU.",
          materials: ["Paper", "Crayons", "Pencil"],
          duration: "15 minutes"
        }
      },
      2: {
        title: "Sequencing Fun",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Understand sequences", "Follow step-by-step instructions", "Put events in order"],
        introduction: {
          animation: "sequencing",
          task: "What order do you get dressed in?",
          description: "Computers follow steps in order, just like we do! Let's learn about sequences through fun activities.",
          videoPrompt: "Watch how sequences help computers and people"
        },
        practical: {
          type: "sequencing",
          content: "Put instructions in the correct order",
          questions: [
            {
              type: "daily-routine",
              question: "What is the correct order for brushing teeth?",
              options: ["Brush, Rinse, Get toothbrush", "Get toothbrush, Brush, Rinse", "Rinse, Get toothbrush, Brush"],
              correct: "Get toothbrush, Brush, Rinse"
            },
            {
              type: "story-sequence",
              question: "Put these in order: The caterpillar ate, The butterfly flew, The caterpillar was in a cocoon",
              correct: ["The caterpillar ate", "The caterpillar was in a cocoon", "The butterfly flew"]
            }
          ]
        },
        takeHome: {
          task: "Write instructions for a simple task",
          instructions: "Choose a task like making a sandwich. Write step-by-step instructions in order.",
          materials: ["Paper", "Pencil"],
          duration: "15 minutes"
        }
      }
    }
  },
  ages8_9: {
    title: "Computer Engineering for Ages 8-9",
    description: "Basic programming concepts, algorithms, and problem-solving",
    lessons: {
      1: {
        title: "Introduction to Algorithms",
        level: "Intermediate",
        duration: "20 min",
        objectives: ["Understand algorithms", "Create simple algorithms", "Debug incorrect sequences"],
        introduction: {
          animation: "algorithms",
          task: "What are step-by-step instructions called?",
          description: "Discover algorithms - the recipes that computers follow! We'll create our own algorithms for everyday tasks.",
          videoPrompt: "Follow the algorithm to solve the puzzle"
        },
        practical: {
          type: "algorithm-creation",
          content: "Create and fix algorithms",
          questions: [
            {
              type: "algorithm-order",
              question: "Arrange these steps to make a peanut butter sandwich: Put bread together, Spread peanut butter, Get bread",
              correct: ["Get bread", "Spread peanut butter", "Put bread together"]
            },
            {
              type: "debugging",
              question: "Find the error: To make cereal: 1. Pour cereal 2. Eat cereal 3. Add milk",
              correct: "Steps 2 and 3 are swapped"
            }
          ]
        },
        takeHome: {
          task: "Create a morning routine algorithm",
          instructions: "Write step-by-step instructions for your morning routine. Test it tomorrow!",
          materials: ["Paper", "Pencil"],
          duration: "20 minutes"
        }
      }
    }
  },
  ages10: {
    title: "Computer Engineering for Age 10",
    description: "Logical thinking, pattern recognition, and introductory programming",
    lessons: {
      1: {
        title: "Pattern Detectives",
        level: "Advanced",
        duration: "25 min",
        objectives: ["Identify patterns", "Pattern completion", "Create patterns"],
        introduction: {
          animation: "patterns",
          task: "Can you find the pattern?",
          description: "Become a pattern detective! Computers use patterns to solve problems efficiently. Let's crack the pattern code!",
          videoPrompt: "Solve the pattern mysteries"
        },
        practical: {
          type: "pattern-recognition",
          content: "Complete patterns and identify pattern rules",
          questions: [
            {
              type: "visual-pattern",
              question: "What comes next? 🔴🟡🔴🟡🔴?",
              options: ["🔴", "🟡", "🔵"],
              correct: "🟡"
            },
            {
              type: "number-pattern",
              question: "Complete: 2, 4, 6, 8, ?",
              options: ["9", "10", "12"],
              correct: "10"
            }
          ]
        },
        takeHome: {
          task: "Find patterns around your house",
          instructions: "Look for patterns in tiles, fabrics, or decorations. Draw 3 different patterns you find.",
          materials: ["Paper", "Crayons"],
          duration: "25 minutes"
        }
      }
    }
  }
};