let myArray = [];

console.log(Array.isArray(myArray))

console.log(Array.isArray(''))

myArray.push(5)
myArray.push(8)
myArray.push(3)
myArray.push('A')
myArray.push(8)

console.log(myArray)

console.log(myArray.find(elemento=>elemento == 88))
console.log(myArray.includes(8))
console.log(myArray.indexOf(8) > -1)
console.log(myArray.filter(elemento=>elemento > 44))

console.log(myArray.sort())

console.log(...myArray)

let otroArray = [...myArray];
otroArray.pop()
// console.log(myArray.pop())
// console.log(myArray.pop())
console.log(myArray)
 
console.log(myArray.map(o=> o += 10))

myArray.shift()
myArray.shift()
myArray.shift()

console.log(myArray)

myArray.unshift(55)
console.log(myArray)
let indice = -1;
for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];

    if (element == 1)
    {
        indice = index;
        break;
    }

    
    console.log(element)
}
console.log(indice != -1)



function suma(a, b)
{
    return a+b;
}
function resta(a, b)
{
    return a-b;
}
function calcular(a,b, funcion)
{
    return funcion(a, b)
}

console.log(suma(10, 20))
console.log(resta(10, 20))
console.log(calcular(10, 55, suma))
console.log(calcular(10, 55, resta))