const graduate = function (credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const med = medicalSchool('Andy Chen');
const law = lawSchool('Andy Chen');

console.log(med);
console.log(law);
