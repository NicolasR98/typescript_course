(() => {
    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
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

    const avengers = {
        nick: 'Samuel',
        ironman: 'Robert',
        vision: 'Paul',
        active: true,
        power: 100,
    }

    const printAvengers = ({nick, ...rest}: Avengers) => {
        console.log(nick, rest);
    }


})()