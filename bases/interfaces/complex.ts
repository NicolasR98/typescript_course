(() => {
    /**
     * It is not recommended to annidate more than
     * 1 level on the interfaces
     */
    interface Client {
        name: string;
        age: number;
        address: Address
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Nicolas',
        age: 24,
        address: {
            id: 123,
            zip: 'ABC 123',
            city: 'CS'
        },
        getFullAddress(id){
            return `${this.address.city} - ${id}`
        }
    };

    // const client2: Client = {
    //     name: 'Xavier',
    //     age: 42,
    //     address: {
    //         id: 123,
    //         zip: 'ABC 123',
    //         city: 'CS'
    //     }
    // };
})();