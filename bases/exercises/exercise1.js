"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Strength;
    (function (Strength) {
        Strength[Strength["aquaman"] = 0] = "aquaman";
        Strength[Strength["batman"] = 1] = "batman";
        Strength[Strength["flash"] = 5] = "flash";
        Strength[Strength["superman"] = 100] = "superman";
    })(Strength || (Strength = {}));
    const fuerzaFlash = Strength.flash;
    const fuerzaSuperman = Strength.superman;
    const fuerzaBatman = Strength.batman;
    const fuerzaAcuaman = Strength.aquaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
