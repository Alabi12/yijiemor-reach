// src/data/subjects/mathematics.js
export const mathematicsContent = {
  ages6_7: {
    title: "Mathematics for Ages 6-7",
    description: "Fun with numbers, counting, and basic operations through games and stories",
    lessons: {
      1: {
        title: "Counting Safari",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Count to 20", "Number recognition", "One-to-one correspondence"],
        introduction: {
          animation: "counting",
          task: "How many animals can you count in the jungle?",
          description: "Let's go on a counting adventure with jungle animals! We'll learn to count from 1 to 20.",
          videoPrompt: "Watch the animals help us learn to count"
        },
        practical: {
          type: "interactive",
          content: "Count the animals and choose the correct number",
          questions: [
            {
              type: "counting",
              question: "How many monkeys do you see? 🐵🐵🐵",
              image: "🐵🐵🐵",
              options: ["2", "3", "4"],
              correct: "3"
            },
            {
              type: "counting", 
              question: "Count the bananas: 🍌🍌🍌🍌🍌",
              options: ["4", "5", "6"],
              correct: "5"
            }
          ]
        },
        takeHome: {
          task: "Count 10 toys in your room and make a number book",
          instructions: "Find 10 different toys. Draw each toy and write the number next to it.",
          materials: ["Paper", "Crayons"],
          duration: "15 minutes"
        }
      },
      2: {
        title: "Addition with Animal Friends",
        level: "Beginner", 
        duration: "15 min",
        objectives: ["Basic addition to 10", "Understanding 'more'", "Number bonds"],
        introduction: {
          animation: "addition",
          task: "If 2 lions meet 3 more lions, how many lions are there?",
          description: "Animal friends are joining together! Let's learn how to add numbers by combining animal groups.",
          videoPrompt: "See how animal groups grow when they meet"
        },
        practical: {
          type: "visual-addition",
          content: "Add the animal groups together",
          questions: [
            {
              type: "addition",
              question: "🐘 + 🐘🐘 = ?",
              visual: "🐘 + 🐘🐘",
              options: ["2", "3", "4"],
              correct: "3"
            },
            {
              type: "addition",
              question: "If you have 2 cookies and get 2 more, how many?",
              options: ["3", "4", "5"],
              correct: "4"
            }
          ]
        },
        takeHome: {
          task: "Create an addition story with your toys",
          instructions: "Use your toys to make addition stories. Example: 2 cars + 1 car = 3 cars. Draw your story.",
          materials: ["Toys", "Paper", "Crayons"],
          duration: "15 minutes"
        }
      },
      3: {
        title: "Shape Hunt Adventure",
        level: "Beginner",
        duration: "15 min", 
        objectives: ["Identify basic shapes", "Real-world shape recognition", "Shape names"],
        introduction: {
          animation: "shapes",
          task: "What shapes can you find in your room?",
          description: "Let's become shape detectives! We'll search for circles, squares, triangles, and rectangles all around us.",
          videoPrompt: "Join the shape hunt adventure"
        },
        practical: {
          type: "matching",
          content: "Match shapes to real objects",
          questions: [
            {
              type: "matching",
              question: "Which object is shaped like a circle?",
              options: ["📱 Phone", "🍕 Pizza", "📚 Book"],
              correct: "🍕 Pizza"
            },
            {
              type: "matching",
              question: "What shape is a window usually?",
              options: ["🔺 Triangle", "🟦 Square/Rectangle", "⭐ Star"],
              correct: "🟦 Square/Rectangle"
            }
          ]
        },
        takeHome: {
          task: "Find and draw 3 different shapes in your house",
          instructions: "Look for circles, squares, and triangles. Draw them and write the shape name.",
          materials: ["Paper", "Pencil", "Crayons"],
          duration: "15 minutes"
        }
      }
    }
  },
  ages8_9: {
    title: "Mathematics for Ages 8-9", 
    description: "Building math skills with multiplication, fractions, and problem solving",
    lessons: {
      1: {
        title: "Multiplication Magic",
        level: "Intermediate",
        duration: "20 min",
        objectives: ["Understand multiplication as repeated addition", "Learn 2s, 5s, and 10s times tables", "Solve simple multiplication problems"],
        introduction: {
          animation: "multiplication",
          task: "If 3 friends have 2 apples each, how many apples total?",
          description: "Discover the magic of multiplication! We'll learn how to quickly count equal groups.",
          videoPrompt: "See how multiplication helps us count faster"
        },
        practical: {
          type: "multiplication",
          content: "Solve these multiplication problems",
          questions: [
            {
              type: "multiplication",
              question: "2 × 3 = ?",
              options: ["5", "6", "7"],
              correct: "6"
            },
            {
              type: "word-problem",
              question: "There are 4 boxes with 5 pencils each. How many pencils total?",
              options: ["9", "20", "15"],
              correct: "20"
            }
          ]
        },
        takeHome: {
          task: "Create a multiplication array with small objects",
          instructions: "Use cereal, beans, or coins to make arrays. Example: 3 rows of 4 = 12 total.",
          materials: ["Small objects", "Paper"],
          duration: "20 minutes"
        }
      },
      2: {
        title: "Fraction Friends",
        level: "Intermediate",
        duration: "20 min",
        objectives: ["Understand halves and quarters", "Identify fractions of shapes", "Simple fraction addition"],
        introduction: {
          animation: "fractions",
          task: "How do we share a pizza fairly between friends?",
          description: "Meet the fraction friends! We'll learn about halves, quarters, and how to split things equally.",
          videoPrompt: "Watch how fractions help us share fairly"
        },
        practical: {
          type: "fractions",
          content: "Identify fractions and solve fraction problems",
          questions: [
            {
              type: "fraction-identification",
              question: "What fraction of this shape is shaded? ████ (4 squares, 2 shaded)",
              image: "half-shaded",
              options: ["1/4", "1/2", "3/4"],
              correct: "1/2"
            },
            {
              type: "fraction-addition",
              question: "1/4 + 1/4 = ?",
              options: ["1/2", "1/4", "2/8"],
              correct: "1/2"
            }
          ]
        },
        takeHome: {
          task: "Fold paper to create fraction models",
          instructions: "Fold paper to show halves, quarters, and eighths. Label each fraction.",
          materials: ["Paper", "Scissors", "Marker"],
          duration: "20 minutes"
        }
      }
    }
  },
  ages10: {
    title: "Mathematics for Age 10",
    description: "Advanced concepts including decimals, geometry, and multi-step problems",
    lessons: {
      1: {
        title: "Decimal Discovery",
        level: "Advanced",
        duration: "25 min",
        objectives: ["Understand decimal place value", "Relate fractions to decimals", "Add simple decimals"],
        introduction: {
          animation: "decimals",
          task: "How do we write 'three and a half' as a decimal?",
          description: "Explore the world of decimals! We'll learn how decimals help us be precise with numbers.",
          videoPrompt: "Discover how decimals work in money and measurements"
        },
        practical: {
          type: "decimals",
          content: "Work with decimal numbers and place value",
          questions: [
            {
              type: "decimal-identification",
              question: "What is 3/10 as a decimal?",
              options: ["0.3", "3.0", "0.03"],
              correct: "0.3"
            },
            {
              type: "decimal-addition",
              question: "2.5 + 1.3 = ?",
              options: ["3.8", "2.8", "3.6"],
              correct: "3.8"
            }
          ]
        },
        takeHome: {
          task: "Create a price list with decimal amounts",
          instructions: "Make a pretend store with items priced using decimals. Practice adding the prices.",
          materials: ["Paper", "Marker", "Play money"],
          duration: "25 minutes"
        }
      }
    }
  }
};