// ejercicio 1

document.getElementById('addTaskBtn').addEventListener( 'click',  function Ejercicio1 () {
    let cadena = document.getElementById('optionInput').value
    Invertir(cadena)

});

    function Invertir (cadena){
    // primero separo la cadena
    var separarCadena = cadena.split("");
    // la invierto
    const cadenaI =  separarCadena.reverse();
    // la uno de nuevo 
    var unirArreglo = cadenaI.join("");
    //lo muestro 
    const primerCampo = document.createElement('div');
    primerCampo.textContent = 'Resultado: ' + unirArreglo

    const mostrar = document.getElementById('result-container');
    //mostrar.innerHTML = ''; // Limpiar el contenedor antes de añadir un nuevo resultado
    mostrar.appendChild(primerCampo);    
   
}

// ejercicio 2

document.getElementById('addNumber').addEventListener('click', function(){
    let i = parseInt(document.getElementById('numberInput').value);
    NumeroPrimo(i);
});

    function NumeroPrimo(i) {
    let Padre = document.getElementById('result-container2');
    
    while (i < 100) {
        if (isPrime(i)) {
            let NumeroHijo = document.createElement('div');
            NumeroHijo.textContent = 'Numeros primos: ' + i;
            Padre.appendChild(NumeroHijo);
        }
        // por cada vuelta del for corto el ciclo 
        i++;
    }
}

// Helper function to check if a number is prime
    function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    //ciclo for 
    // primero declaro variable, hago comparacion, añado resultado
    for (let j = 3; j <= Math.sqrt(num); j += 2) {
        if (num % j === 0) return false;
    }
    return true;
}


// ejercicio 3

var Array = [];

document.getElementById('adArray').addEventListener('click', function(){
    Agregar(Array)
});

document.getElementById('ShowArray').addEventListener('click', function(){
    MostrarArray(Array)
});


    function Agregar(Array){
        const elementoArray = document.getElementById('arrayInput').value
        // insertamos los valores dentro del array y mostramos 
        Array.push(elementoArray)
        console.log (Array)
    }

    function MostrarArray (Array){

        var Padre = document.getElementById('result-container3')
        /* Esto te devuelve un Set
        const uniqueValuesSet = new Set(numbers);
        Si deseas convertir el Set en un Array
        const uniqueValuesArray = [...uniqueValuesSet]; */ 

        const mostConcise = [...new Set(Array)];
        let Espace = document.createElement('div')
        Espace.textContent = mostConcise;
        Padre.innerHTML = '';
        Padre.appendChild(Espace)
        // Borrar Array
        document.getElementById('DeleteDuplicatesArray').addEventListener('click', function() {
            Padre.removeChild(Espace);
            // aqui se eliminan con splice con el rango, de 0 a el ultimo que se saca con .length
            var remover = Array.splice(0, Array.length);
        });

    }


// ejercicio 4

document.getElementById('FAdd').addEventListener('click', function() {
    var Numero = parseInt(document.getElementById('FactorialInput').value);
    if (!isNaN(Numero)) {
        factorialize(Numero);
    } else {
        alert('Por favor, ingrese un número válido');
    }
});

function factorialize(num) {
    var Place1 = document.createElement('div');
    const Padre = document.getElementById('result-container4');

    // Limpiar el contenido previo
    Padre.innerHTML = '';

    // Si el número es menor que 0, rechazarlo
    if (num < 0) {
        alert('El número no puede ser menor a 0');
    } else {
        // Calcular el factorial
        var result = calculateFactorial(num);
        Place1.textContent = `El factorial de ${num} es: ${result}`;
        Padre.appendChild(Place1);
    }
}

function calculateFactorial(num) {
    // Si el número es 0, su factorial es 1.
    if (num === 0) {
        return 1;
    } else {
        // manera de usar recursion
        // De otra forma, llama al procedimiento de nuevo
        return num * calculateFactorial(num - 1);
    }
}

// ejercicio 5 

document.getElementById('Contador').addEventListener('click' , function(){
    var str = document.getElementById('VocalInput').value
    var strSeparado = str.split("")
    console.log (strSeparado);

    var contador = Contar(str)
    Appear(contador);

})


function Contar(str){
    
    let contador = 0;
    // mi forma de hacerlo
    for (let char of str) {
    
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            
            contador++;
        }
    }
    return contador;
    // otra forma
    
}

function Appear (contador){
    const espacio = document.createElement ('div')
    espacio.textContent = 'El numero de vocales que aparece es: ' + contador
    const Padre = document.getElementById('result-container5')
    Padre.appendChild(espacio)
}


// ejercicio 6

var Array2 = [];

document.getElementById('Sumar').addEventListener('click', function() {
    Agregar2(Array2);
});

document.getElementById('ShowArray2').addEventListener('click', function() {
    MostrarArray2(Array2); // Mostrar el array actualizado al hacer clic en el botón
});

function Agregar2(Array2) {
    const elementoArray = parseInt(document.getElementById('SumaInput').value);
    Array2.push(elementoArray);
    console.log(Array2);
   
}

function MostrarArray2(Array2) {
    var Padre = document.getElementById('result-container6');
    Padre.innerHTML = ''; // Limpiamos el contenido anterior del contenedor

    // Mostrar la suma de los números en el array
    let suma = Sumar(Array2);
    let resultadoSuma = document.createElement('div');
    resultadoSuma.textContent = 'La suma de todos los datos es: ' + suma;
    Padre.appendChild(resultadoSuma);
    
    // Botón para borrar el contenido del array y el resultado mostrado



    document.getElementById('Borrar').addEventListener('click', function() {
        Padre.removeChild(resultadoSuma);
        // aqui se eliminan con splice con el rango, de 0 a el ultimo que se saca con .length
        var remover = Array2.splice(0, Array2.length);
    });
    

}

function Sumar(Array2) {
    let suma = 0;
    for (let numero of Array2) {
        suma += numero;
    }
    return suma;
}



// ejercicio 7 

var Array3 = [];

document.getElementById('Uno').addEventListener('click', function() {
    Agregar3(Array3);
});

document.getElementById('Dos').addEventListener('click', function() {
    MostrarArray3(Array3); // Mostrar el array actualizado al hacer clic en el botón
});

function Agregar3(Array3) {
    const elementoArray = parseInt(document.getElementById('Max').value);
    Array3.push(elementoArray);
    console.log(Array3);
   
}



function MostrarArray3(Array3) {
    var Padre = document.getElementById('result-container7');
    Padre.innerHTML = ''; // Limpiamos el contenido anterior del contenedor

    // Mostrar la suma de los números en el array
    let M = elMaximo (Array3);

    let resultadoMaximo = document.createElement('div');
    resultadoMaximo.textContent = 'El dato mayor es:  ' + M;

    Padre.appendChild(resultadoMaximo);
    
    // Botón para borrar el contenido del array y el resultado mostrado



    document.getElementById('Tres').addEventListener('click', function() {
        Padre.removeChild(resultadoMaximo);
        // aqui se eliminan con splice con el rango, de 0 a el ultimo que se saca con .length
        var remover = Array3.splice(0, Array3.length);
    });
    

}

function elMaximo (Array3)
{
    var maximo = Math.max(...Array3)
    return maximo
}

