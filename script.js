/*******EJERCICIOS NIVEL BÁSICO***********/

//1)Suma de dos números: Escribe una función que tome dos números como parámetros y devuelva su suma
function suma (a,b){
return a + b;
}
console.log(suma(3,5));
//2)Número par o impar: Escribe una función que verifique si un número es par o impar.
function parImpar(a){
if(a%2 === 0){
    console.log(`El numero ${a} es par`)
}else{
    console.log(`El numero ${a} es impar`)
}
}
parImpar(2);
parImpar(7);

//3)Máximo de tres números: Escribe una función que encuentre el mayor de tres números.
function mayorNumero(a,b,c) {
   if(a>=b && a>=c){
    return a
   }else if(b>=a && b>=c){
    return b
   }else{
    return c
   }
};
console.log(mayorNumero(4,8,6));

//4)Invertir cadena: Escribe una función que tome una cadena como entrada y devuelva la cadena invertida.

function invertirCadena(string){
    return string.split("").reverse().join("");
}
console.log(invertirCadena("Me llamo Lucía"));
    /*
    split("") → convierte "hola" en ['h','o','l','a'].
    reverse() → invierte el array: ['a','l','o','h'].
    join("") → une el array en un string: "aloh".
    */ 

//5)!!!Calcular factorial: Escribe una función que calcule el factorial de un número dado.

//6)!!!!Comprobar si una palabra es un palíndromo: Verifica si una cadena es un palíndromo (se lee igual de adelante hacia atrás).

//7)Contar vocales en una cadena: Escribe una función que cuente cuántas vocales hay en una cadena.
function contarVocales(texto) {
    const coincidencias = texto.match(/[aeiou]/gi); //match busca coincidencias
    return coincidencias ? coincidencias.length : 0;
}

console.log(contarVocales("Hola Mundo")); // 4

//8)Encontrar el número más grande en un array: Dado un array de números, encuentra y devuelve el número más grande.
function maxNumero(arr) {
    return Math.max(...arr);//spread operator(expandir numeros de un array)
}
console.log(maxNumero([6,8,9,10,24]))


//)9)Ordenar un array de números: Escribe una función que ordene un array de números en orden ascendente.

function ordenAscen (arr){
  return arr.sort((a,b)=>a-b);
}
console.log(ordenAscen([8,9,19,67]));

//10) Sumar todos los números de un array: Escribe una función que tome un array de números y devuelva la suma de todos sus elementos.

function sumarArr(arr){
    return arr.reduce((acc,val)=>acc + val, 0);
}
console.log(sumarArr([80,90,30,20]));
//11) Eliminar duplicados en un array: Escribe una función que elimine los valores duplicados en un array.
function deleteDuplicate(arr){
    return arr.filter((valor, indice, array) => array.indexOf(valor) === indice)
}
console.log(deleteDuplicate([3,9,5,6,6,7,8,9,9,3,]));
//12) Generar una lista de números del 1 al n: Escribe una función que genere una lista de números del 1 al número n especificado.
function generarNumeros(n) {
    let resultado = [];
    for (let i = 1; i <= n; i++) {
        resultado.push(i);
    }
    return resultado;
}

console.log(generarNumeros(5));

//13) Encontrar el número más pequeño en un array: Dado un array de números, encuentra y devuelve el número más pequeño.
function valorMenor(arr){
    return Math.min(...arr)
};
console.log(valorMenor([2,7,8,9,3,4]));
//14) Multiplicar todos los números de un array: Escribe una función que multiplique todos los números de un array y devuelva el producto total.
function multiplicarArr (arr){
    return arr.reduce((acc,val)=> acc*val,1);
}
console.log(multiplicarArr([3,5,6,7,8]));
//15) Convertir una cadena a mayúsculas: Escribe una función que tome una cadena y la convierta completamente a mayúsculas.

function mayusculas (string){
    return string.toUpperCase();
}
console.log(mayusculas("hola"));

//16) Reemplazar espacios por guiones en una cadena: Escribe una función que reemplace todos los espacios en una cadena con guiones.
function reemplazarEspacios(cadena) {
    return cadena.replace(/ /g, "-");
}
console.log(reemplazarEspacios("Hola me llamo lucía"));

//17) Calcular la media de los números en un array: Dado un array de números, calcula y devuelve su media.
function calcularMedia(arr){
    const suma = arr.reduce((acc,val)=>acc + val, 0)
    return suma /arr.length
}
console.log(calcularMedia([3,8,9,3,4]));
//18) Generar números aleatorios en un rango: Escribe una función que genere un número aleatorio dentro de un rango dado (min y max).
function numeroAleatorioEntero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(numeroAleatorioEntero(6,90));

//19) Contar palabras en una cadena: Escribe una función que cuente cuántas palabras hay en una cadena.
function contarPalabras(string){
    let palabras = string.trim().split(/\s+/); //Dividimos el texto por espacios en blanco y filtramos elementos vacíos
    return palabras.length
}
 console.log(contarPalabras("Manolito Gafotas"));

//20) Comprobar si todos los elementos de un array son iguales: Dado un array, verifica si todos sus elementos son iguales o no.

function iguales (arr) {
    return arr.every(valor => valor === arr[0]);
}
console.log(iguales([3,3,3]));
console.log(iguales([23,3,6]));


//************Ejercicios nivel alto********

//1) Fibonacci Recursivo
//Escribe una función que devuelva el n-ésimo número de Fibonacci usando recursión.
//F(0)=0,F(1)=1,F(n)=F(n−1)+F(n−2)
function fibonacci(n) {
  if (n < 0) {
    throw new Error("El número debe ser positivo");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

//2) Contar caracteres en una cadena
//Escribe una función que cuente cuántas veces aparece cada carácter en una cadena y devuelva un objeto con el resultado.

function contarCaracteres(cadena){
  const conteo = {};//guardamos resultado en un objeto

  for (let caracter of cadena) {
    // Si el caracter ya existe en el objeto, suma 1; si no, inicialízalo en 1
    conteo[caracter] = (conteo[caracter] || 0) + 1; //busca si ya existe una propiedad con ese carácter en el objeto =  “si conteo[char] no existe, usa 0 en su lugar” + 1(pasa siguiente letra)
  }
  return conteo
}
console.log(contarCaracteres("esternocleidomastoideo"));

//3) Ordenar un array de objetos
/*Dado un array de objetos, escribe una función que lo 
ordene en función de una propiedad específica del objeto 
(por ejemplo, por edad o nombre)*/

const arrObj = [

    {
        nombre: "Lucía",
        edad:"23",
        profesion:"diseñadora"
    },
      {
        nombre: "Pablo",
        edad:"26",
        profesion:"matemático"
    },
      {
        nombre: "Dani",
        edad:"30",
        profesion:"profesor"
    },
      {
        nombre: "claudia",
        edad:"50",
        profesion:"terapeuta"
    },
]

function ordenar (arrObj){
return arrObj.sort((a,b)=>a.edad - b.edad)
}
console.log(ordenar(arrObj));

//4)Eliminar elementos falsy de un array
/*Escribe una función que elimine todos los valores falsy (false, 0, "", null, undefined, NaN)
 de un array.*/

function deleteFalsy(arr){
    return arr.filter(Boolean); //false para los falsy/ true para los truthy -> solo se queda con los true 
}

console.log(deleteFalsy([false,"hola", 3, 6, 7,  0, "", null,"que tal", undefined, NaN]));

//5) Anagramas
//Escribe una función que determine si dos cadenas son anagramas, es decir, si tienen las mismas
//letras en diferente orden.

function sonAnagramas(cadena1, cadena2) {
  // Normalizamos las cadenas: eliminamos espacios y convertimos a minúsculas
  const limpiar = (str) => str.replace(/\s+/g, '').toLowerCase();

  cadena1 = limpiar(cadena1);
  cadena2 = limpiar(cadena2);

  // Si no tienen la misma longitud, no pueden ser anagramas
  if (cadena1.length !== cadena2.length) 
    return false;
  // Ordenamos las letras de ambas cadenas y comparamos
  const ordenada1 = cadena1.split('').sort().join('');
  const ordenada2 = cadena2.split('').sort().join('');

  return ordenada1 === ordenada2;
}

console.log(sonAnagramas("Roma", "amor"));
console.log(sonAnagramas("Monja", "jamon"));
console.log(sonAnagramas("Flor", "pétalo"));

//6)Matriz identidad ??-NO ENTIENDO
//Crea una función que genere una matriz identidad de tamaño n x n.
function matrizIdentidad(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
  );
}

console.log(matrizIdentidad(4));

//7)Contar palabras repetidas en una cadena
/*Escribe una función que cuente cuántas veces aparece cada palabra en una 
cadena y devuelva el resultado en un objeto.*/

function contarPalabras(texto){
   const palabras = texto
    .toLowerCase()
    .replace(/[^\wáéíóúüñ\s]/gi, '') // Elimina signos
    .split(/\s+/) // Esto divide el texto en trozos donde haya uno o más espacios
   
    const contador = {}; // Objeto donde guardaremos los resultados
    
    for (const palabra of palabras) {
        if (palabra) { // Evita cadenas vacías
            contador[palabra] = (contador[palabra] || 0) + 1;
        }
    }

  return contador;
}
console.log(contarPalabras("Creo que no entiendo lo que el quiere que yo entiendo"));

//8)Invertir los elementos de un array sin usar reverse
/*Implementa una función que invierta los elementos de un array sin usar el método reverse. 
Encontrar el primer número que no se repite*/

function invertirArray(arr) {
  return arr.reduce((acc, valactual) => [valactual, ...acc], []);//el valor inicial esta []-mete el acumulador y los demas van metiendose detras
}

console.log(invertirArray([1, 2, 3, 4]));

//9) Dado un array de números, encuentra el primer número que no se repite 
// y devuélvelo.

function primerNoRepetido(arr) {
  return arr.find(num => arr.filter(x => x === num).length === 1) || null;
}
console.log(primerNoRepetido([4, 5, 1, 2, 0, 4]));

//10)Rotar un array
/*Escribe una función que rote los elementos de un array n posiciones 
hacia la derecha o hacia la izquierda.*/
function rotarArray(arr, n) {
  const len = arr.length;
  n = n % len; // Normalizamos n

  for (let i = 0; i < n; i++) {
    const ultimo = arr.pop(); // Sacamos el último elemento
    arr.unshift(ultimo);      // Lo ponemos al inicio
  }

  return arr;
}

console.log(rotarArray([1, 2, 3, 4, 5], 2)); 

//11) Encontrar la subsecuencia creciente más larga. Dado un array de enteros, 
// encuentra la subsecuencia creciente más larga. ????

//12) Validar paréntesis balanceados Escribe una función que verifique si los 
// paréntesis en una cadena están balanceados

    //-> Explicación: ponemos un contador a 0, recorremos cada elemento de la cadena
    //si el elemento es un ( se suma 1, si el siguiente elemento es un ) se resta elemento
    //por lo que si en algúm momneto el num es negativo--> es falso (no son parentesis balanceados)
    //al final siempre se devuelve el contador a 0

    function parentesisBalanceados(cadena) {
  let contador = 0;

  for (const c of cadena) {
    if (c === '('){
      contador++;
    } 
    
    else if (c === ')') {
      contador--;
    }
    // Si se cierra antes de abrir → no balanceado
    if (contador < 0) {
      return false;
    }
  }

  // Al final, debe quedar en cero (todo se cerró)
  return contador === 0;
}

console.log(parentesisBalanceados("()"));        
console.log(parentesisBalanceados("(())"));   
console.log(parentesisBalanceados("(()")); 

//13) Sumar matrices de igual tamaño 
// Dadas dos matrices del mismo tamaño,escribe una función que devuelva 
// una nueva matriz que sea la suma de las dos matrices.

  //.map(): recorre un array y lo devuelve modificado por una función.
  //i -> inidce de la fila
  //j->posición de columna
const matrizA = [
  [1, 2, 70],
  [4, 35, 6]
];
const matrizB = [
  [5, 3, 40],
  [2, 4, 67]
];
function sumarMatrices(A, B) {
  return A.map((fila, i) =>// recorremos cada fila
    fila.map((valor, j) => valor + B[i][j]) //recorremos cada valor de la comuna y le sumamos de B[indice fila][posición columa]
  );
}
console.log(sumarMatrices(matrizA,matrizB))

//14) Comprimir una cadena. 
// Implementa una función que reciba una cadena y la comprima usando 
// el conteo de caracteres repetidos. Ejemplo: "aaabb" se convierte en "a3b2".

    // acc: guardar resultado mientras reduce recorre el array
    //valoractual: elemento del array que s eestá procesando
    //indice : posición
    //arroriginal: array que estamos recorriendo

function comprimirCadena(cadena) {
  return cadena.split('').reduce((acc, valorActual, indice, arroriginal) => {
    if (indice === 0 || valorActual !== arroriginal[indice - 1]) acc.push([valorActual, 1]);
    else acc[acc.length - 1][1]++;
    return acc;
  }, []).map(([c, n]) => c + n).join('');
}
console.log(comprimirCadena("habbab"));

//15)Calcular la potencia de un número (recursivo) 
// Escribe una función recursiva que calcule la potencia de un número 
// base elevado a un exponente exp.

function elevar(n,e){
  return n ** e
}

console.log(elevar(2,3));

//16) Encontrar la intersección de dos arrays .
// Escribe una función que tome dos arrays y devuelva un nuevo array con 
// los elementos que están en ambos arrays (intersección).

function interseccion(arr1, arr2) {
  return arr1.filter(elemento => arr2.includes(elemento));
} //recorre cada elemento del arr1 y nos devuelve (los elementos que en el arr2 incluya ese elemento)


console.log(interseccion([1,2,3,4], [3,4,5,6]));

//17)Filtrar números primos en un array.
//  Dado un array de números, filtra los números que son primos y 
// devuélvelos en un nuevo array. ???

function filtrarPrimos(arr) {
  return arr.filter(n => {
    if (n <= 1) return false; // 0 y 1 no son primos

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false; // si es divisible por otro número, no es primo
    }

    return true; // si no se dividió por nadie → es primo
  });
}

// Ejemplo:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(filtrarPrimos(numeros));
// Resultado: [2, 3, 5, 7, 11]

//18) Contar ocurrencias de dígitos en un número.
//  Escribe una función que tome un número y cuente cuántas veces 
// aparece cada dígito en él.

function contarDigitos(num) {
  // Convertimos el número a string para poder recorrerlo dígito por dígito
  const str = num.toString();
  
  // Creamos un objeto vacío donde guardaremos el conteo
  const conteo = {};

  // Recorremos cada carácter del número
  for (let digito of str) {
    // Si el dígito ya existe en el objeto, lo incrementamos
    if (conteo[digito]) {
      conteo[digito]++;
    } else {
      // Si no existe, lo inicializamos en 1
      conteo[digito] = 1;
    }
  }

  return conteo;
}

// Ejemplo de uso:
console.log(contarDigitos(1223333));

//19)Suma máxima en un subarray.
//Dado un array de enteros, encuentra la suma máxima de un subarray contiguo
//usando el algoritmo de Kadane.

//20) Convertir un número en palabras.
//Escribe una función que convierta un número entero a su representación en 
// palabras. Por ejemplo, 123 se convierte en "ciento veintitrés".




//********************CAJA REGISTRADORA*********************/
const dinero =[
  500, 200, 100, 50, 20, 10, 5, 
  2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01
]; //guardamos los valores de los billetes y monedas

const caja=[
  0, 0, 0, 1, 4, 8, 2,
  5, 4, 0, 0, 1, 2, 3, 1
]; //cantidad de cada dinero que hay en la caja

//Calcular el dinero total de la caja
function dineroTotal(dinero, cajas){
return dinero.reduce((acc, val, i)=> acc + val * cajas[i],0); //i= indice
}

console.log(dineroTotal(dinero, caja));

//Cacular cuantos billetes hay de cada valor:
function cantidadBilletes(billete){
  const index = dinero.indexOf(billete);
  return `Hay ${caja[index]} billetes/monedas de ${billete}€`
}

console.log(cantidadBilletes(50));
