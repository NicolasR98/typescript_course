(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Avenger constructor invoked');
        }
        
        // Protected methods can be used on extended classes
        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: true,
        ){
            super(name, realName)
            console.log('Xmen constructor invoked');
        }

        // Getters - always must return something
        get fullName(): string {
            return `${this.name} - ${this.realName}`
        };

        // Setters - requires one param
        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('The name must be longer than 3 characters')
            }
            this.name = name;
        };

        getFullNameFromXmen(){
            console.log(super.getFullName());
        }
    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // wolverine.getFullNameFromXmen();

    // console.log(wolverine.fullName);

    // // Set new name
    // wolverine.fullName = 'Nicolas';
    // console.log(wolverine.fullName);
    
})()