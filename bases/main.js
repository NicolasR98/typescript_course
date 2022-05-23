"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => text.length > 3;
    Validations.validateDate = (date) => (isNaN(date.valueOf())
        ? false
        : true);
})(Validations || (Validations = {}));
console.log(Validations.validateText('Nicolas'));
//# sourceMappingURL=main.js.map