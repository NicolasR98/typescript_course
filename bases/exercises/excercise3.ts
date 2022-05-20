type Car = {
  color: string;
  model: string;
  bulletproof: boolean;
  passangers: number;
  shoot?: () => void;
}

type Villain = {
  name: string;
  age?: number;
  mutant: boolean;
}

type Charles = {
  power: string;
  height: number;
}

type Apocalipsis = {
  leader: boolean;
  members: string[];
}

// Objetos
const batimovil: Car = {
  color: "Negra",
  model: "6x6",
  bulletproof: true,
  passangers:4
};

const bumblebee: Car = {
  color: "Amarillo con negro",
  model: "4x2",
  bulletproof: true,
  passangers:4,
  shoot(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
const Villains: Villain[] = [{
  name:"Lex Luthor",
  age: 54,
  mutant:false
},{
  name: "Erik Magnus Lehnsherr",
  age: 49,
  mutant: true
},{
  name: "James Logan",
  age: undefined,
  mutant: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles: Charles = {
  power:"psiquico",
  height: 1.78
};

const apocalipsis: Apocalipsis = {
  leader:true,
  members: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;
