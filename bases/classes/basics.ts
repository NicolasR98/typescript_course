(() => {
    class Avenger {
        constructor(
            private name: string,
            private team: string,
            public realname: string,
        ) {}

        static avgAge: number = 35;
    }

    const antmant: Avenger = new Avenger('Antman', 'Capitan', 'Scott')
    Avenger.avgAge
})()