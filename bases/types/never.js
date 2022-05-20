"use strict";
(() => {
    /**
     * The never type represents values which are never observed. In a return type,
     * this means that the function throws an exception or terminates execution of the program.
     */
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('help');
})();
