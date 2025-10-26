// src/data/subjects/moralStudies.js
export const moralStudiesContent = {
  ages6_7: {
    title: "Moral Studies for Ages 6-7",
    description: "Learning values through stories, role-playing, and simple activities",
    lessons: {
      1: {
        title: "Being a Good Friend",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Understand friendship", "Identify kind actions", "Practice sharing"],
        introduction: {
          animation: "friendship",
          task: "What makes someone a good friend?",
          description: "Let's learn how to be amazing friends! We'll discover what makes friendships special and strong.",
          videoPrompt: "Watch how good friends help each other"
        },
        practical: {
          type: "scenario",
          content: "Choose the friendly action in different situations",
          questions: [
            {
              type: "friendship-scenario",
              question: "Your friend is sad. What can you do?",
              options: ["Ignore them", "Share your snack", "Tell a joke"],
              correct: "Share your snack"
            },
            {
              type: "sharing-scenario",
              question: "You have one cookie and your friend has none. What could you do?",
              options: ["Eat it quickly", "Share half", "Tell them to get their own"],
              correct: "Share half"
            }
          ]
        },
        takeHome: {
          task: "Do something kind for a friend",
          instructions: "Draw a picture for a friend or share a toy. Write about how it made you feel.",
          materials: ["Paper", "Crayons", "Pencil"],
          duration: "15 minutes"
        }
      },
      2: {
        title: "Honesty Heroes",
        level: "Beginner",
        duration: "15 min",
        objectives: ["Understand honesty", "Consequences of lying", "Building trust"],
        introduction: {
          animation: "honesty",
          task: "Why is it important to tell the truth?",
          description: "Become an honesty hero! Learn why telling the truth builds strong relationships and trust.",
          videoPrompt: "See how honesty solves problems"
        },
        practical: {
          type: "scenario",
          content: "Identify honest choices in different situations",
          questions: [
            {
              type: "honesty-scenario",
              question: "You broke a toy. What should you do?",
              options: ["Hide it", "Blame someone else", "Tell the truth and apologize"],
              correct: "Tell the truth and apologize"
            },
            {
              type: "true-false",
              question: "It's okay to tell small lies sometimes.",
              correct: false
            }
          ]
        },
        takeHome: {
          task: "Create an 'Honesty Hero' certificate",
          instructions: "Design a certificate for someone who was honest. Give it to them with a thank you.",
          materials: ["Paper", "Crayons"],
          duration: "15 minutes"
        }
      }
    }
  },
  ages8_9: {
    title: "Moral Studies for Ages 8-9",
    description: "Developing empathy, responsibility, and ethical thinking",
    lessons: {
      1: {
        title: "Understanding Feelings",
        level: "Intermediate",
        duration: "20 min",
        objectives: ["Identify emotions", "Develop empathy", "Appropriate responses to emotions"],
        introduction: {
          animation: "emotions",
          task: "How can you tell how someone is feeling?",
          description: "Learn to understand feelings - both your own and others'. We'll become emotion detectives!",
          videoPrompt: "Explore different emotions and how to recognize them"
        },
        practical: {
          type: "emotion-identification",
          content: "Recognize emotions and appropriate responses",
          questions: [
            {
              type: "emotion-recognition",
              question: "How might someone feel if they lost their favorite toy?",
              options: ["Happy", "Sad", "Excited"],
              correct: "Sad"
            },
            {
              type: "empathy-response",
              question: "Your friend is crying. What should you do?",
              options: ["Laugh", "Ask what's wrong", "Walk away"],
              correct: "Ask what's wrong"
            }
          ]
        },
        takeHome: {
          task: "Create an emotion diary for one day",
          instructions: "Write or draw about three different emotions you felt today and why.",
          materials: ["Paper", "Pencil", "Crayons"],
          duration: "15 minutes"
        }
      }
    }
  }
};