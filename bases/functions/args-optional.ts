(() => {
    // Optional params
    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName}`
    }

    const person: string = fullName('Tony');
})()