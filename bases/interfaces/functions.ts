(() => {
    interface AddTwoNumbers {
        (a: number, b: number): number;
    }

    let sumTwoNumbers: AddTwoNumbers;
    sumTwoNumbers = (a: number, b: number): number => {
        return a + b
    }
})()