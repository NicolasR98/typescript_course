(() => {
    /**
     * Abstract classes are used for being extended by
     * other classes
     * 
     * They are not used for create instances
     * 
     * Or check if a paramter is the same type as the class
     */
    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string,
        ){}
    };

    class Xmen extends Mutant {
        saveWorld(){
            return 'World saved'
        }
    }

    class Villain extends Mutant {
        conquerWorld(){
            return `World conquered`
        }
    }

    class Person {

    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');

    // console.log(wolverine.saveWorld());
    // console.log(magneto.conquerWorld());

    /**
     * Also Abstract classes can be used, when we expect
     * to get a parameter with that class expected
     */

    const normalPerson = new Person();

    const printName = (character: Mutant):void => {
        console.log(character.realName);
    }

    /**
     * The next statement is invalid because 
     * `normalPerson` is not being extended from `Mutant`
     */
    // printName(normalPerson)

    
})()