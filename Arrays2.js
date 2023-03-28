const persona = {
    nombre : 'Eduardo',
    apellido : 'Mass',
    edad : 40,
    saludar() {
        return `Hola ${this.edad}`;
    }
}
const persona2 = {
    nombre : 'Dos',
    apellido : 'Mass',
    edad : 50,
    saludar() {
        return `Hola ${this.edad}`;
    }
}
const persona3 = {
    nombre : 'Tres',
    apellido : 'Mass',
    edad : 60,
    saludar() {
        return `Hola ${this.edad}`;
    }
}
const myArray = [persona, persona2, persona3];

console.log(persona.edad)
console.log(persona.saludar())

console.log(myArray.filter(elemento => elemento.edad > 50 ))