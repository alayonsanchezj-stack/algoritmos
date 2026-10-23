alert("Hola Mundo");
console.log("Hola Mundo");

//alert me genera una ventana emergente
//console.log me muestra el mensaje en la consola del navegador

let nombre;
nombre = "Juan Diego";
//concatenar: + unir un texto o string con una variable
console.log("Bienvenido usuario: " + nombre);
alert("Bienvenido usuario: " + nombre);

//algoritmo suma

let n1;
let n2;
let suma;

n1 = parseInt(prompt(""));
n2 = parseInt(prompt(""));
suma = n1 + n2;

console.log("EL RESULTADO DE LA SUMA: "+suma );
//algortimo operaciones basicas

let a;
let b;
let s;  
let r;
let m;
let d;

a = 120;
b = 8;

s = a + b;
r = a - b;
m = a * b;
d = a / b;

console.log("EL RESULTADO DE LA SUMA ES: "+ s);
console.log("EL RESULTADO DE LA RESTA ES: "+ r);
console.log("EL RESULTADO DE LA MULTIPLICACION ES: "+ m);
console.log("EL RESULTADO DE LA DIVISION ES: "+ d);


//area de un triangulo

let area;
let base;
let altura;

area = 15;
base = 10;
altura = 30;

area = (base*altura)/2

console.log("EL AREA DEL TRIANGULO ES :"+ area);
console.log("PARA UN TRIANGULO CUYA BASE ES "+ base+ " Y SU ALTURA ES "+ altura + " EL AREA ES "+ area);

//Promedio de 3 notas

let nota1;
let nota2;
let nota3;
let promedio;

nota1 = parseInt(prompt("INGRESE LA PRIMER NOTA"));
nota2 = parseInt(prompt("INGRESE LA SEGUNDA NOTA"));
nota3 = parseInt(prompt("INGRES EL ATRECER NOTA"));

promedio = (nota1 + nota2 + nota3)/3

alert("EL PROMEDIO ES :"+ promedio);

//ALGORITMO DE POSITIVO/NEGATIVO

let numero;

numero = parseInt(prompt("Ingrese un numero para saber si es positivo o negativo")); 

if(numero>=0){
    console.log("el numero ingresado : " + numero + " es positivo");
}else{
    console.log("el numero ingresado : " + numero + " es negativo");
}

//ALGORITMO TIPO DE EDAD

let edad;

edad = parseInt(prompt("Ingrese la edad"))

if(edad<=3){
    console.log("es un bebe");
}else if(edad<=12){
    console.log("es un niño");
}else if(edad<=19){
    console.log("es un adolecente");
}else{
    console.log("es un adulto");
}

//CAJERO AUTOMATICO

let saldo;
let retiro;
let clave;
let claveIngresada;

saldo = 100000;
clave = 123;

retiro = parseInt(prompt("Ingrese la cantidad a retirar"));
claveIngresada = prompt("Ingrese la clave");

if(clave==claveIngresada){

    if(retiro<=saldo){
        console.log("Retiro exitoso");
    }   else{
            console.log("El retiro es insuficiente");
    }
}else{ 
    console.log("Clave incorrecta");    
}

//MOSTRAR LOS NUMEROS DEL 1 A 20

let contador;

contador = 1

while(contador<=20){
    console.log(contador);
    contador = contador + 1;
}

function saludar(nombre){
    alert("HOLA, bienvenido " + nombre);
}