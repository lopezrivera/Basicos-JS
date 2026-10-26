// funciones - functions expresion

// declaracion de funcion
function sumarDeclaration(n1=0, n2=0){
    return n1 + n2
}

console.log(sumarDeclaration(10, 10))

// Expresion de funciones
const sumarExpression = function(n1=0, n2=0){
    return n1 + n2
}

console.log(sumarDeclaration(10 + 15))

// Funciones - Arrow functions
const sumarArrow = (n1=0, n2=0) => {
    return n1 + n2
}

console.log(sumarArrow(50, 50))

//Arrow Fuctions y Array Method
const lenguajesDeProgramacion = ["Javascript", "Python", "C#", "Ruby", "PHP", "LISP"]

const nuevoArray = lenguajesDeProgramacion.map(function(lenguaje) {
    if(lenguaje === 'Python'){
        return 'Mojo'
    }else{
        return lenguaje
    }
})

console.log(nuevoArray)
console.log(nuevoArrayArrowMap)

const nuevoArrayArrowMap = lenguajesDeProgramacion.map(lenguaje => {
    if(lenguaje === "Python"){
        return 'ArrowMojo'
    }else{
        return lenguaje
    }
})

console.log(nuevoArray)
console.log(nuevoArrayArrowMap)

const nuevoArray2 = lenguajesDeProgramacion.filter(function(lenguaje) {
    return lenguaje === 'Javascript'
})

const nuevoArrayFilterArrow = lenguajesDeProgramacion.filter(lenguaje =>  {
    return lenguaje !== "Javascript"
})

console.log(nuevoArray2)
console.log(nuevoArrayFilterArrow)