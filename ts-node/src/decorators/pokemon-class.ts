function printToConsole(constructor: Function){
    console.log(constructor);
}

// Factory decorator
const printToConsoleConditional = (print: boolean = false): Function => (
     print
        ? printToConsole
        : () => {}
)

function blockPrototype(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

// Factory decorator
function CheckValidPokemonId() {
    // Descriptors are only available on methods
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const MIN_ID = 1;
        const MAX_ID = 800;

        // Keep saved the original method
        const originalMethod = descriptor.value
        
        // Can get the params of the decorated method
        descriptor.value = (id: number) => {
            id < MIN_ID || id > MAX_ID
            ? console.error(`Pokemon id must be in between ${MIN_ID} and ${MAX_ID}`)
            : originalMethod(id)
        }
    }
}

function readOnly(isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Nicolas'
            },
            set(this, value) {
                Object.defineProperty(this, propertyKey, {
                    value,
                    writable: !isWritable,
                    enumerable: false,
                })
            }
        }

        return descriptor;
    }
}

// Decorators only are functions that executes on runtime once
// @printToConsole

// Factory decorators allow us to send params when we use it
@printToConsoleConditional(true)
@blockPrototype
export class Pokemon {
    @readOnly(true)
    private publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon saved in DB ${id}`);
    }
}