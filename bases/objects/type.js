"use strict";
(() => {
    const flash = {
        name: 'Iron man',
        age: 45,
        powers: ['Nice suit']
    };
    const superman = {
        name: 'Clark Kent',
        age: 65,
        powers: ['Super Strength'],
        getName() {
            return this.name;
        }
    };
})();
