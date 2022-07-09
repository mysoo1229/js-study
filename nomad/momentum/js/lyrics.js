const lyrics = [
  {
    number: "Popular",
    line: "You'll be popular! Just not quite as popular as me."
  },
  {
    number: "Dancing Throught Life",
    line: "Nothing matters but knowing nothing matters. It's just life, so keep dancing through."
  },
  {
    number: "Dancing Throught Life",
    line: "And the strange thing, your life could end up changing while you're dancing through!"
  },
  {
    number: "One Short Day",
    line: "But for today, we'll wander and enjoy!"
  },
  {
    number: "Defying Gravity",
    line: "It's time to try defying gravity."
  },
  {
    number: "Defying Gravity",
    line: "Unlimited. Together, we're unlimited."
  },
  {
    number: "Defying Gravity",
    line: "Nobody in all of Oz, no wizard that there is or was, is ever gonna bring me down!"
  },
  {
    number: "For Good",
    line: "I've heard it said that people come into our lives for a reason bringing something we must learn."
  },
  {
    number: "For Good",
    line: "But because I knew you I have been changed for good."
  },
  {
    number: "For Good",
    line: "So much of me is made of what I learned from you."
  }
];

const line = document.querySelector('#lyrics span:first-child');
const number = document.querySelector('#lyrics span:last-child');

const todaysLyrics = lyrics[Math.floor(Math.random() * lyrics.length)];

line.innerText = todaysLyrics.line;
number.innerText = todaysLyrics.number;
