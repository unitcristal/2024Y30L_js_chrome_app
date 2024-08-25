const quotes = [
  {
    quote: "I'm a consulting detective",
    charactor: "Sherlock Holmes",
  },
  {
    quote: "You see, but you do not observe",
    charactor: "Sherlock Holmes",
  },
  {
    quote: "To a great mind, nothing is little",
    charactor: "Sherlock Holmes",
  },
  {
    quote:
      "Once you've ruled out the impossible, whatever remains, however improbable, must be true",
    charactor: "Sherlock Holmes",
  },
  {
    quote: "I don't have friends",
    charactor: "Sherlock Holmes",
  },
  {
    quote: "I'm your landlady, not housekeeper",
    charactor: "Mrs Hudson",
  },
  {
    quote: "All lives end. All hearts are broken. Caring is not an advantage",
    charactor: "Mycroft Holmes",
  },
  {
    quote:
      "Every time I close my eyes, I'm on the plain. I was lost in the sky",
    charactor: "Eurus Holmes",
  },
  {
    quote: "Every fairy tale needs a good old fashioned villain",
    charactor: "James Moriarty",
  },
  {
    quote: "I Owe You",
    charactor: "James Moriarty",
  },
];

const quote = document.querySelector("#quote span:first-child");
const charactor = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
charactor.innerText = `- ${todaysQuote.charactor}`;
