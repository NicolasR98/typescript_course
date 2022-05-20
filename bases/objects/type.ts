(() => {
    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    const flash: Hero = {
        name: 'Iron man',
        age: 45,
        powers: ['Nice suit']
    }

    const superman: Hero = {
        name: 'Clark Kent',
        age: 65,
        powers: ['Super Strength'],
        getName(){
            return this.name
        }
    }
})()