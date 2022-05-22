(() => {
    // Singleton principle
    /**
     * When I want to use this class I will always
     * use the unique instance that was generated
     */

    class Apocalipsis {
        static instance: Apocalipsis;
        
        // It only can be called inside the class
        private constructor(
            public name: string,
        ){}

        // Returns an instance of Apocalipsis
        static invokeApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('I am the unique Apocalipsis')
            }

            return Apocalipsis.instance;
        }

        changeName(name: string): void {
            this.name = name;
        }
    }
    // Instance of a class with private constructor
    const apocalipsis1 = Apocalipsis.invokeApocalipsis();
    const apocalipsis2 = Apocalipsis.invokeApocalipsis();
    const apocalipsis3 = Apocalipsis.invokeApocalipsis();
    
    apocalipsis1.changeName('Nicolas');

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);
    

    // How a normal class is being instanced
    // const apocalipsis1 = new Apocalipsis('I am Apocalipsis 1')
    // const apocalipsis2 = new Apocalipsis('I am Apocalipsis 2')
    // const apocalipsis3 = new Apocalipsis('I am Apocalipsis 3')
    // console.log(apocalipsis1);
    
})()