"use strict";
/******************************************
A Random Quote Generator
******************************************/

/***
 * @type {quotes[]} Array containing all the quotes
 ***/

const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    source: "Nelson Mandela",
    citation: "Speech",
    year: 1980,
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    year: 1950,
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    citation: "Speech",
    year: 2005,
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
  },
];

/**
 * Random numbers between 0 and 225
 * @returns {number} Random number between 0 and 255
 */
const randomNum = () => Math.round(Math.random() * 255);

// console.log(quotes);
/***
 * Gets a random quote from the quotes array
 *
 * @return {object} A random quote
 ***/

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

/***
 * Prints the Quote randomly selected to html elements
 *
 * @return {string} html Element with the quote and info to be added to the page
 ***/

function printQuote() {
  const quote = getRandomQuote();
  let html = `<p class="quote"> ${quote.quote} </p>
              <p class="source"> ${quote.source} `;
  if (quote.citation)
    html += `<span class="citation"> ${quote.citation} </span>`;
  if (quote.year) html += `<span class="year"> ${quote.year} </span>`;
  html += "</p>";
  document.querySelector("body").style.backgroundColor = randomBGColor(
    randomNum
  );
  document.getElementById("quote-box").innerHTML = html;

  return html;
}

/**
 *  Creates a randiom rgb color
 * @param {*} rnd - A function that generates de random rgb color code
 * @returns {string} - A rgb random color code -> rgb(x,y,z)
 */

function randomBGColor(rnd) {
  const color = `rgb(${rnd()},${rnd()},${rnd()})`;
  return color;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
