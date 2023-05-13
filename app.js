// PREGUNTA 1 :
// Crea una funcion que retorne la potencia de un numero dado,esta funcion
// debera recibir la potencia y el numero a potenciar.

function potenciacion(base, potencia) {
        let numero = 1;
         for ( i = 1; i <= potencia; i++ ) {
         numero = numero * base;
         numero = numero;
        };
//console.log('el resultado es '+ numero);       
};
potenciacion(5, 4);


// PREGUNTA 2 :
// Crea una funcion que tome el array numeros y devuelva la suma de los cubos
// sumOfCubes(1, 5, 9) --> 855
// Since 1 3 + 5 3 + 9 3 = 1 + 125 + 729 = 855

function  sumadecubos(a, b, c) {
       let numero1 = 1;
       for ( i = 1; i <= 3; i++ ) {
            numero1 = numero1 * a;
            numero1 = numero1;
       };
       let numero2 = 1;
       for ( i = 1; i <= 3; i++ ) {
            numero2 = numero2 * b;
            numero2 = numero2;
         };
       let numero3 = 1;
       for ( i = 1; i <= 3; i++ ) {
            numero3 = numero3 * c;
            numero3 = numero3;
        };
        let total = numero1 + numero2 + numero3;        
     // console.log('la suma de los cubos es ' + total);
};
sumadecubos(1, 5, 9);

// PREGUNTA 3:
// Utilizando funcion arrow, crear una funcion que reciba como parametros un nombre
// apellido, y edad y los retorne en un string concatenado "Hola mi nombre es sebastian
// yabiku y mi edad 33"
 

const personal = (nombre,apellido,edad) => 'Hola mi nombre es '+nombre+' y mi apellido es '+apellido+' y mi edad es '+edad;

//console.log(personal("Sebastian","Yabiku",33));

// PREGUNTA 4 :
// Crear una funcionquer reciba n cantidad de argumentos y los sume )utilizar parametros
// rest)


function sumaparametro(...rest) {
     let suma = 0 ;
     for ( let i=0; i<rest.length ; i++) {
          suma = suma + rest[i];
     }
     return suma;
};
console.log(sumaparametro(10,20,30,40,50));


// PREGUNTA 5 :
// Crear una funcion que reciba un array de valores y filtre los que no son string.






// Pregunta 6 :
// Cree una funcion que tome un array de numeros y devuelva los numeros minimos
// y maximos en ese orden.
// minMax( [1,2,3,4,5]) -> [1,5]







// PREGUNTA 7 :
// Escriba una funcion que tome un array de 10 enteros  (entre 0 y 9)
// y devuelva una cadena en formade un numero de telefono
// formatPhoneNumber([1,2,3,4,5,6,7,8,9]) -> "(123) 456-7890"



// PREGUNTA 8 :
// Dada una palabra  escriba  una funcion devuelva el primer indice y el ultimo
// indice de un caracter.
// charIndex("hello","l") -> [2,3]
// the first "l" has index 2, the "c" has index 3.
//
// charIndex("circumlocution","c") -> [0,8]
// the first "c" has index 2, the "c" has index 8.

function primerUltimo(palabra,caracter) {
     
     let primerIndice= palabra.indexOf(caracter);
     let ultimoIndice = palabra.lastIndexOf(caracter);
     return [primerIndice,ultimoIndice];
};

 console.log(primerUltimo("pachacutec","c"));






 
// PREGUNTA 10 :
// Crea una funcion que tome unn array de estudiantes y devuelva un array de nombres 
// de estudiantes.
// getStudentNames( [
//   { name : "steve"}
//   { name : "mike"}
//   { name : "john"} ]
//   ->["steve","mike","john"]


function estudiantes(datos) {
   nuevoArray = [];
   for ( let i=0 ; i<datos.length; i++ ) {
          nuevoArray.push(datos[i].name);
   };
   return nuevoArray;
};
let datos = [{name : "Luis"},{name : "miguel"},{name : "bryan"}];
console.log(estudiantes(datos));


// PREGUNTA 11 :
// Crea una funcion donde, dadoel numero n, devuelva la suma de todos los
// numeros cuadrados incluyen n.


function sumacuadrados (base) {
     let numero = 0;
      for ( let i = 1; i <= base; i++ ) {
      numero = numero + (i * i);
      numero = numero;
     };
//console.log('la suma de los cuadrados de los numeros del 1 al '+ base + ' es '+ numero);       
};
sumacuadrados(6);

// PREGUNTA 12 :
// Cree una funcion para multiplicar todos los valores de un array por la
// cantidad de valores del array dado.
// multiplyByLength([2,3,1,0]) -> [8,12,4,0]


function multiplicar(arrayNum) {
     let numeroElemento= arrayNum.length;
     let newArray = [];
     for ( let i = 0; i < arrayNum.length; i++ ) {
          newArray.push(arrayNum[i] * numeroElemento);
          console.log(newArray)
     };
     return newArray;
};
let arrayNum = [2,3,1];
//console.log(multiplicar(arrayNum));


// Pregunta 13 :
// Cree una funcion que tome un numero como argumento
// y devuelva una matriz de numeros contando desde este numero a cero.
// countdown(5) -> [5,4,3,2,1]


function contDown(num) {
     let nArray = [];
     
     for ( let i = num; i >= 1; i-- ) {
          nArray.push(i);
     };
     return nArray;
};

//console.log(contDown(7));



