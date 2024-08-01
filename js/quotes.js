const quotes = [
  {
    quote: "remember... all I'm offering is the truth. Nothing more",
    charactor: "Morpheus",
  },
  {
    quote:
      "You have to let it all go, Neo - fear, doubt, and disbelief. Free your mind!",
    charactor: "Morpheus",
  },
  {
    quote: "I know kung-fu",
    charactor: "Neo",
  },
  {
    quote: "Goodbye, Mr. Anderson...",
    charactor: "Agent Smith",
  },
  {
    quote: "Denial is the most predictable of all human responses",
    charactor: "The Architect",
  },
];

const quote = document.querySelector("#quote span:first-child");
const charactor = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
charactor.innerText = todaysQuote.charactor;
