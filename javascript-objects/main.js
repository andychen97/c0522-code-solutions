var student = {
  firstName: 'Andy',
  lastName: 'Chen',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Tesla',
  model: 'Model 3 Performance',
  year: 2022
};

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Arya',
  type: 'Husky'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
