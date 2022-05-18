var a = 10;
var b = 20;
var c = 30;
var maximumValue = Math.max(a, b, c);
console.log('value of maximumValue:', maximumValue);
var heroes = ['Thor', 'Wanda', 'Captain America', 'Dr. Strange'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'book-1',
    author: 'author-1'
  },
  {
    title: 'book-2',
    author: 'author-2'
  },
  {
    title: 'book-3',
    author: 'author-3'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Andy Chen';
var firstAndLastName = fullName.split(' ');
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
