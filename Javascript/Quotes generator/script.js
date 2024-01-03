const quotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison, type.fit",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra, type.fit",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln, type.fit",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe, type.fit",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer, type.fit",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu, type.fit",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg, type.fit",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle, type.fit",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster, type.fit",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha, type.fit",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer, type.fit",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch, type.fit",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark, type.fit",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer, type.fit",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: "type.fit",
  },
  {
    text: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    text: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    text: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },

  {
    text: "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    text: "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    text: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    text: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "–Audrey Hepburn",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
];
const btn = document.querySelector("button");
const cite = document.querySelector("cite");

const generateQuote = () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].text;
  cite.innerHTML = "~ " + quotes[random].author;
};

btn.addEventListener("click", () => {
  generateQuote();
});
