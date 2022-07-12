const quotes = [
  {
    quote:"Hang in there.",
    author: "hansol"
  },
  {
    quote:"I was never less alone than when by myself."
  },
  {
    quote:"Don't dream, Be it."
  },
  {
    quote:"Life is unfair, get used to it."
  },
  {
    quote:"Pain past is pleasure."
  },
  {
    quote:"Life is all about timing."
  },
  {
    quote:"Life is all about timing."
  },
  {
    quote:"The will of man is his happiness."
  },
  {
    quote:"He can do, She can do, Why not me?"
  },
  {
    quote:"If not now, then when?"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/**
 * 반올림
 * Math.round() 
 * 
 * 올림 : 1.01 이라도 올림되어 2로 변환. 단 1.0은 1 
 * Math.ceil()
 * 
 * 내림 : 1.9999 라도 내림되어 1로 변환 
 * Math.floor()
 */


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];   

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;