/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else return false;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}

function startsWithJ(string) {
  var startingLetter = string.charAt(0);
  if (startingLetter === 'J') {
    return true;
  } else return false;
}

function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else return true;
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else return false;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age > 0) {
    return false;
  } else return false;
}

function categorizeAcidity(pH) {
  if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  } else if (pH < 7) {
    return 'acidic';
  } else if (pH === 7) {
    return 'neutral';
  } else return 'base';
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'We\'re the warner brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute~';
  } else return 'Goodnight everybody!';
}
