// Ejercicios para sección reportes
// 1 Hacer la función encontrarNumeroMayor que reciba un array de números y 
// retorne el mayor de todos ellos. (Pista: usá reduce)

const numeros = [2, 3, 4, 99, 5, 9, 65, 32]
const masNumeros = [43, 21, 23, 66, 54, 32, 199, 54, 63]

const encontrarNumeroMayor = (array) => {
    // codeá tu solución acá
    const numeroMayor = array.reduce((acc, elemento)=>{
        if(acc > elemento){
            return acc
        }
        return elemento

    }, 0)
    return numeroMayor
}
console.log(encontrarNumeroMayor(numeros)) // deberias ver 99
console.log(encontrarNumeroMayor(masNumeros)) // deberias ver 199

// 2 Una vez resuelto el ejercicio anterior, vamos a complicarlo. 
// Dado un array de objetos, hacé la función encontrarNumeroMayorEnArrayDeObjetos que 
// reciba un array de objetos y retorne el objeto que tiene el mayor número en la propiedad monto. 
// La estrategia deberia ser similar al ejercicio anterior. Pista: recordá que en un reduce, 
// si no le pasas un valor inicial a la acumuladora, la acumuladora tendrá el valor del 
// primer elemento del array.


const objetos = [
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 1,
    },
    {
      tipo: "ganancia",
      categoria: "salida",
      monto: 2,
    },
    {
      tipo: "gasto",
      categoria: "salida",
      monto: 3,
    },
    {
      tipo: "gasto",
      categoria: "salida",
      monto: 4,
    },
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 5,
    },
  ];
  
   const masObjetos = [
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 6,
    },
    {
      tipo: "ganancia",
      categoria: "salida",
      monto: 7,
    },
    {
      tipo: "gasto",
      categoria: "salida",
      monto: 8,
    },
    {
      tipo: "ganancia",
      categoria: "salida",
      monto: 9,
    },
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 10,
    },
  ];
   
const encontrarNumeroMayorEnArrayDeObjetos = (array) => {
    // codeá tu solución acá
    const mayorMonto = array.reduce((acc, elemento)=>{
        if (acc < elemento.monto) {
            return elemento.monto
        }
        return acc
    }, 0)
    return mayorMonto
}
   
console.log(encontrarNumeroMayor(objetos)) 
// deberias ver { tipo: "gasto", categoria: "salida", monto: 5 }
console.log(encontrarNumeroMayor(masObjetos)) 
// deberias ver { tipo: "gasto", categoria: "salida", monto: 10 }


// 3 Una vez resuelto el ejercicio anterior, declará la función obtenerObjetoConMayorGanancia 
// que reciba un array de objetos y retorne el objeto que tenga el mayor monto pero sólo si 
// su tipo es ganancia. La estrategia debería ser similar a la del ejercicio anterior. 
// Pista: recordá que podés usar if adentro de un reduce.
  

// usá los mismos arrays de objetos que usamos en el ejercicio anterior

const obtenerObjetoConMayorGanancia = (array) => {
    // codeá tu solución acá
    const filtroCategoria = array.filter((elemento)=>{
        return elemento.tipo === "ganancia"
    })
    const montoMayorCategoria = filtroCategoria.reduce((acc, elemento)=>{
        if (acc > elemento.monto) {
            return acc
        }
        return elemento.monto
    }, 0)
}


console.log(encontrarNumeroMayor(objetos)) 
// deberias ver { tipo: "ganancia", categoria: "comida", monto: 5 }
console.log(encontrarNumeroMayor(masObjetos)) 
// deberias ver { tipo: "ganancia", categoria: "comida", monto: 10 }
    
// 4 Una vez resuelto el ejercicio anterior, declará la función obtenerCategoriaConMayorGanancia 
// que reciba un array de objetos y retorne sólo la - propiedad categoria - del objeto que tenga el 
// mayor monto pero sólo si su tipo es ganancia. La estrategia debería ser similar a la del 
// ejercicio anterior. 
// Pista: recordá que podés usar el operador && adentro de un if para encadenar varias condiciones.


// usá los mismos arrays de objetos que usamos en el ejercicio anterior

const obtenerCategoriaConMayorGanancia = (array) => {
    // codeá tu solución acá
    const filtrarTipo = array.filter((elemento)=>{
        return elemento.tipo === "ganancia"
    })
    const filtrarCategoria = filtrarTipo.reduce((acc, elemento)=>{
        if (acc > elemento.monto) {
            return acc
        }
        return elemento.categoria
    }, 0)
    return filtrarCategoria
}
    
console.log(obtenerCategoriaConMayorGanancia(objetos)) // deberias ver  "comida"
console.log(obtenerCategoriaConMayorGanancia(masObjetos)) // deberias ver "comida"
    
   