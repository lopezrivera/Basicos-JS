// tipos de datos 

// Underfined
// Numbre
// function
// Object
// string
// Boolean
// Symbol
// Big Int
// Null

// Undefined
let cliente
console.log(cliente)
console.log(typeof cliente)

// Boolean
let descuento = true
console.log(descuento)
console.log(typeof descuento)

// Numbre
let num = 7
let num2 = 7.77
let num3 = -7

console.log(num)
console.log(num2)
console.log(num3)

// string o cadena de texto
const alumno = "mitchel"
const producto = 'mac mini'
console.log(alumno)
console.log(producto)

const myNum = "77"
const myNum2 = 77
console.log(typeof myNum)
console.log(typeof myNum2)

// Big int
const bigNumber = BigInt(5354674596786516846146846544654984651613916046406413561)
console.log(typeof bigNumber)

// No podemos mesclar nuber con bigint
const a = 1
const b = 3
console.log(a + b)
console.log(a + bigNumber) //error

// Itilizamos convercion
console.log(a + number(bigNumber))

// Symbol
const mySymbol1
const mySymbol1 