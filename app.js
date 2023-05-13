// PREGUNTA 1 :
// Crea una funcion que retorne la potencia de un numero dado,esta funcion
// debera recibir la potencia y el numero a potenciar.

function potenciacion(base, potencia) {
        let numero = 1;
         for ( i = 1; i <= potencia; i++ ) {
         numero = numero * base;
         numero = numero;
        };
console.log('el resultado es '+ numero);       
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
        console.log(numero1);
        console.log(numero2);
        console.log(numero3);
        console.log('la suma de los cubos es ' + total);
};
sumadecubos(1, 5, 9);

// PREGUNTA 3:
// Utilizando funcion arrow, crear una funcion que reciba como parametros un nombre
// apellido, y edad y los retorne en un string concatenado "Hola mi nombre es sebastian
// yabiku y mi edad 33"
 

const personal = (nombre,apellido,edad) => 'Hola mi nombre es '+nombre+' y mi apellido es '+apellido+' y mi edad es '+edad;

console.log(personal("Sebastian","Yabiku",33));

// PREGUNTA 4 :
// Crear una funcionquer reciba n cantidad de argumentos y los sume )utilizar parametros
// rest)


function sumaparametro(a, b,...rest) {
     console.log(a,b,...rest);
};
sumaparametro("Luis","Blas",27,"Contador","Titulado");

// PREGUNTA 5 :
// Crear una funcion que reciba un array de valores y filtre los que no son string.


let array1 = ["juan","cabello","hector",50];
//function valores(array1) {
     console.log(array1);          
     console.log(array1.length);
     console.log(array1[3]);
               
  // if  i<=array[i] && nombre === 
//f cadena = "" {
 
   // else {
 //




// Pregunta 6 :
// Cree una funcion que tome un array de numeros y devuelva los numeros minimos
// y maximos en ese orden.
// minMax( [1,2,3,4,5]) -> [1,5]



//let n = [1,2,3,4,5];
//function minMax(numeros) {
 //    if n[0]<n[1] && n[0]<n[2] && n[0]<n[3] && n[0]<n[4] && n[0]<n[5] {
   //       con



     
  

// PREGUNTA 7 :
// Escriba una funcion que tome un array de 10 enteros  (entre 0 y 9)
// y devuelva una cadena en formade un numero de telefono
// formatPhoneNumber([1,2,3,4,5,6,7,8,9]) -> "(123) 456-7890"

//let numero = [1,2,3,4,5,6,7,8,9,0];
//function numerotelefono(numero){
      
  //    for ( let i=0 ; i<=0 ; i++ ) {
    //      console.log(numero[0]+numero[1]+numero[2]) ; 
          //+arrray[1]+array[2]'
                                          
     //return ('array[01]+arrray[1]+array[2]');
   //   };
//};
//console.log(numero)
//console.log(n);






// PREGUNTA 11 :
// Crea una funcion donde, dadoel numero n, devuelva la suma de todos los
// numeros cuadrados incluyen n.


function sumacuadrados (base) {
     let numero = 0;
      for ( let i = 1; i <= base; i++ ) {
      numero = numero + (i * i);
      numero = numero;
     };
console.log('la suma de los cuadrados de los numeros del 1 al '+ base + ' es '+ numero);       
};
sumacuadrados(6);

// PREGUNTA 12 :
// Cree una funcion para multiplicar todos los valores de un array por la
// cantidad de valores del array dado.
// multiplyByLength([2,3,1,0]) -> [8,12,4,0]


let arrayNum = [2,3,1,0];
function multiplicar(arrayNum) {
    // let arrayNum = [2,3,1,0];
     let numero = arrayNum;
      for ( let i = 0; i <= arrayNum.length-1; i++ ) {
      numero = arrayNum[i]* arrayNum.length-1;
      console.log(arrayNum[i]);
      numero = arrayNum[i];
     };
multiplicar(arrayNum);
//console.log('['+numero[0]+','+numero[1]+','+numero[2]+''+numero[3]);       
};










