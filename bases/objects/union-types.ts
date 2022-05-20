(() => {
    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariables: string | number| Hero = 'Nicolas'

    myCustomVariables = 20;
    myCustomVariables = {
        name: 'Clark Kent',
        age: 65,
        powers: ['Super Strength'],
    }

})()