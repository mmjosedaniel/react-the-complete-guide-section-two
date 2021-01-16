// Primitive types:
const number = 1;

// Real copy of number:
const num2 = number;

console.log(num2);

// Reference types:
// Objects and Arrays are reference types
const person = {
    name: "Max"
};

const secondPerson = person;

person.name = 'Manu';
console.log(secondPerson);

//coping reference types

const personToCopy = {
    name: "Max"
};

const secondPersonCopy = { ...personToCopy };

personToCopy.name = 'Manu';
console.log(secondPersonCopy);
