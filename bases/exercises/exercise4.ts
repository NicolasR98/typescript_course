// Crear interfaces
interface Car {
  start: boolean;
  maxSpeed: number;
  accelerate(): void;
}

interface Joker {
  laugh?: boolean;
  eat?: boolean;
  cry?: boolean;
}

interface GothicCityIface {
  (citizens: string[]): number;
}

interface PersonIface {
  name: string;
  age: number;
  sex: string;
  civilStatus: string;
  printBio(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const drive = ( auto: Car ):void => {
  auto.start = true;
  auto.maxSpeed = 100;
  auto.accelerate();
}

const batimovil: Car = {
  start:false,
  maxSpeed:0,
  accelerate(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const joker: Joker = {
  laugh: true,
  eat:true,
  cry:false
}

const laugh = ( joker: Joker ):void => {
  if( joker.laugh ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

const gothicCity: GothicCityIface = ( citizens:string[] ):number => {
  return citizens.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Person implements PersonIface {
  constructor(
    public name: string,
    public age: number,
    public sex: string,
    public civilStatus: string,
  ){}

  printBio(): void {
      console.log(this.name, this.age, this.sex, this.civilStatus);
  }
}