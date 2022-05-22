"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    ;
    class Xmen extends Mutant {
        saveWorld() {
            return 'World saved';
        }
    }
    class Villain extends Mutant {
        conquerWorld() {
            return `World conquered`;
        }
    }
    class Person {
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');
    const normalPerson = new Person();
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
    }
    Avenger.avgAge = 35;
    const antmant = new Avenger('Antman', 'Capitan', 'Scott');
    Avenger.avgAge;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Avenger constructor invoked');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Xmen constructor invoked');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        ;
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('The name must be longer than 3 characters');
            }
            this.name = name;
        }
        ;
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static invokeApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('I am the unique Apocalipsis');
            }
            return Apocalipsis.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apocalipsis1 = Apocalipsis.invokeApocalipsis();
    const apocalipsis2 = Apocalipsis.invokeApocalipsis();
    const apocalipsis3 = Apocalipsis.invokeApocalipsis();
    apocalipsis1.changeName('Nicolas');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map