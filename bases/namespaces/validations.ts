namespace Validations {
    export const validateText = (text: string): boolean => text.length > 3;

    export const validateDate = (date: Date): boolean => (
        isNaN(date.valueOf())
        ? false
        : true
    ) 
}

console.log(Validations.validateText('Nicolas'));