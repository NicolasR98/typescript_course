(() => {
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string) => `Hello ${name}`;
    const saveTheWorld = () => 'The world is saved!';

    //* Option 1
    // let myFunction: Function;

    //* Option 2
    // let myFunction: (param1: number, param2: number) => number
    // myFunction = addNumbers;

    //* Option 3
    // let myFunction: (param1: string) => string
    // myFunction = greet;

    //* Option 4
    let myFunction: () => string
    myFunction = saveTheWorld;
})()