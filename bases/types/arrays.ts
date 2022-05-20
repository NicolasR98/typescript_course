(() => {
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10]
    const numberWitSomeStrings: (string | number)[] = [1,2,3,4,5,'6',7,8,'9',10];
    const persons: string[] = ['Person1', 'Person2'];

    persons.forEach(person => console.log(person));
    numberWitSomeStrings.forEach(number => console.log(number));
})()