// constants

const btnNewQuote = document.querySelector('#get-new-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

//TODO: fill array with actual qoutes

const quotesLookUp = [
  {
    quote: `"1Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere similique vel esse? Cum adipisci, porro quidem laborum corrupti deleniti ab excepturi perferendis provident ex suscipit animi necessitatibus consectetur libero."`,
    author: `1Author`
  },
  {
    quote: `"2Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere similique vel esse? Cum adipisci, porro quidem laborum corrupti deleniti ab excepturi perferendis provident ex suscipit animi necessitatibus consectetur libero."`,
    author: `2Author`
  },
  {
    quote: `"3Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere similique vel esse? Cum adipisci, porro quidem laborum corrupti deleniti ab excepturi perferendis provident ex suscipit animi necessitatibus consectetur libero."`,
    author: `3Author`
  },
  {
    quote: `"4Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere similique vel esse? Cum adipisci, porro quidem laborum corrupti deleniti ab excepturi perferendis provident ex suscipit animi necessitatibus consectetur libero."`,
    author: `4Author`
  },
  {
    quote: `"5Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere similique vel esse? Cum adipisci, porro quidem laborum corrupti deleniti ab excepturi perferendis provident ex suscipit animi necessitatibus consectetur libero."`,
    author: `5Author`
  },
  {
    quote: `"6Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere similique vel esse? Cum adipisci, porro quidem laborum corrupti deleniti ab excepturi perferendis provident ex suscipit animi necessitatibus consectetur libero."`,
    author: `6Author`
  },
  {
    quote: `"7Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere similique vel esse? Cum adipisci, porro quidem laborum corrupti deleniti ab excepturi perferendis provident ex suscipit animi necessitatibus consectetur libero."`,
    author: `7Author`
  }
];

// logic

const getRandomQuote = () => {
  const random = Math.floor(Math.random() * quotesLookUp.length);
  quote.innerText = quotesLookUp[random].quote;
  author.innerText = quotesLookUp[random].author;
}

btnNewQuote.addEventListener('click', getRandomQuote);