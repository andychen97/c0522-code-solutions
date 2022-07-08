const takeAChance = require('./take-a-chance');

const promise = takeAChance('Andy')
  .then(resolve => {
    console.log(resolve);
  })
  .catch(reject => {
    console.error(reject.message);
  });
