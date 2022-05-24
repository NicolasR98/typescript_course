export const printObject = (argument: any): void => {
    console.log(argument);
}

// Declares that argument, defines the type of param and the return
export function genericFunction<T>(argument: T): T {
    return argument;
}

export const genericFunctionArrow = <T> (argument: T): T => argument;