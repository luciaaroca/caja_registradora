# Ejercicios nivel básico
1) Suma de dos números: Escribe una función que tome dos números como parámetros y devuelva su suma.

2) Número par o impar: Escribe una función que verifique si un número es par o impar.

3) Máximo de tres números: Escribe una función que encuentre el mayor de tres números.

4) Invertir cadena: Escribe una función que tome una cadena como entrada y devuelva la cadena invertida.

5) Calcular factorial: Escribe una función que calcule el factorial de un número dado.

6) Comprobar si una palabra es un palíndromo: Verifica si una cadena es un palíndromo (se lee igual de adelante hacia atrás).

7) Contar vocales en una cadena: Escribe una función que cuente cuántas vocales hay en una cadena.

8) Encontrar el número más grande en un array: Dado un array de números, encuentra y devuelve el número más grande.

9) Ordenar un array de números: Escribe una función que ordene un array de números en orden ascendente.

10) Sumar todos los números de un array: Escribe una función que tome un array de números y devuelva la suma de todos sus elementos.

11) Eliminar duplicados en un array: Escribe una función que elimine los valores duplicados en un array.

12) Generar una lista de números del 1 al n: Escribe una función que genere una lista de números del 1 al número n especificado.

13) Encontrar el número más pequeño en un array: Dado un array de números, encuentra y devuelve el número más pequeño.

14) Multiplicar todos los números de un array: Escribe una función que multiplique todos los números de un array y devuelva el producto total.

15) Convertir una cadena a mayúsculas: Escribe una función que tome una cadena y la convierta completamente a mayúsculas.

16) Reemplazar espacios por guiones en una cadena: Escribe una función que reemplace todos los espacios en una cadena con guiones.

17) Calcular la media de los números en un array: Dado un array de números, calcula y devuelve su media.

18) Generar números aleatorios en un rango: Escribe una función que genere un número aleatorio dentro de un rango dado (min y max).

19) Contar palabras en una cadena: Escribe una función que cuente cuántas palabras hay en una cadena.

20) Comprobar si todos los elementos de un array son iguales: Dado un array, verifica si todos sus elementos son iguales o no.

# Ejercicios nivel alto
1) Fibonacci Recursivo

Escribe una función que devuelva el n-ésimo número de Fibonacci usando recursión.

2) Contar caracteres en una cadena

Escribe una función que cuente cuántas veces aparece cada carácter en una cadena y devuelva un objeto con el resultado.

3) Ordenar un array de objetos

Dado un array de objetos, escribe una función que lo ordene en función de una propiedad específica del objeto (por ejemplo, por edad o nombre).

4) Eliminar elementos falsy de un array

Escribe una función que elimine todos los valores falsy (false, 0, "", null, undefined, NaN) de un array.

5) Anagramas

Escribe una función que determine si dos cadenas son anagramas, es decir, si tienen las mismas letras en diferente orden.

6) Matriz identidad

Crea una función que genere una matriz identidad de tamaño n x n.

7) Contar palabras repetidas en una cadena

Escribe una función que cuente cuántas veces aparece cada palabra en una cadena y devuelva el resultado en un objeto.

8) Invertir los elementos de un array sin usar reverse

Implementa una función que invierta los elementos de un array sin usar el método reverse.
Encontrar el primer número que no se repite

9) Dado un array de números, encuentra el primer número que no se repite y devuélvelo.

10) Rotar un array

Escribe una función que rote los elementos de un array n posiciones hacia la derecha o hacia la izquierda.

11) Encontrar la subsecuencia creciente más larga
Dado un array de enteros, encuentra la subsecuencia creciente más larga.

12) Validar paréntesis balanceados
Escribe una función que verifique si los paréntesis en una cadena están balanceados.

13) Sumar matrices de igual tamaño
Dadas dos matrices del mismo tamaño, escribe una función que devuelva una nueva matriz que sea la suma de las dos matrices.

14) Comprimir una cadena
Implementa una función que reciba una cadena y la comprima usando el conteo de caracteres repetidos. Ejemplo: "aaabb" se convierte en "a3b2".

15) Calcular la potencia de un número (recursivo)
Escribe una función recursiva que calcule la potencia de un número base elevado a un exponente exp.

16) Encontrar la intersección de dos arrays
Escribe una función que tome dos arrays y devuelva un nuevo array con los elementos que están en ambos arrays (intersección).

17) Filtrar números primos en un array
Dado un array de números, filtra los números que son primos y devuélvelos en un nuevo array.

18) Contar ocurrencias de dígitos en un número
Escribe una función que tome un número y cuente cuántas veces aparece cada dígito en él.

19) Suma máxima en un subarray
Dado un array de enteros, encuentra la suma máxima de un subarray contiguo usando el algoritmo de Kadane.

20) Convertir un número en palabras
Escribe una función que convierta un número entero a su representación en palabras. Por ejemplo, 123 se convierte en "ciento veintitrés".


# CAJA REGISTRADORA

Disponemos en la caja del siguiente dinero distribuido de la siguiente manera: 234,27 € (información que se debe cargar en un array)

 - Billetes de 500€: 0 
 - Billetes de 200€: 0 
 - Billetes de 100€: 0 
 - Billetes de 50€: 1 
 - Billetes de 20€: 4 
 - Billetes de 10€: 8 
 - Billetes de 5€: 2 
 - Monedas de 2€: 5 
 - Monedas de 1€: 4 
 - Monedas de 0.50€: 0 
 - Monedas de 0.20€: 0 
 - Monedas de 0.10€: 1 
 - Monedas de 0.05€: 2 
 - Monedas de 0.02€: 3 
 - Monedas de 0.01€: 1 
 
 El programa obtiene un precio de artículo y un importe pagado desglosado (se deben conocer las cantidades entregadas de todos los billetes y monedas) y responderá si no hay cambio, si está justo o si se devuelve cambio, de nuevo con el desglose que debe ser lo más óptimo (es decir, si puedo devolver un billete de 20, no devuelvo 2 de 10, por ejemplo). Debemos mostrar al final el desglose del cambio y el nuevo estado de la caja.

 1. Guardar -> Cuantos billetes y monedas hay de cada valor
 2. Recibir -> Precio de un articulo // Dinero entregado
 3. Calcular -> Si el siguiente paga justo // Si falta dinero // Si hay que devolver cambio(minimo num de billetes/monedas)

 
