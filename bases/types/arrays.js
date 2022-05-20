"use strict";
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numberWitSomeStrings = [1, 2, 3, 4, 5, '6', 7, 8, '9', 10];
    const persons = ['Person1', 'Person2'];
    persons.forEach(person => console.log(person));
    numberWitSomeStrings.forEach(number => console.log(number));
})();
