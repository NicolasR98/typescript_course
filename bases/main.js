"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    const avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 100,
    };
    const printAvengers = (_a) => {
        var { nick } = _a, rest = __rest(_a, ["nick"]);
        console.log(nick, rest);
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return `${this.name} ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Nicolas',
        age: 24,
        address: {
            id: 123,
            zip: 'ABC 123',
            city: 'CS'
        },
        getFullAddress(id) {
            return `${this.address.city} - ${id}`;
        }
    };
})();
(() => {
    let sumTwoNumbers;
    sumTwoNumbers = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map