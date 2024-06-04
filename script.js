alert(`A) Desarrollar con JavaScript los siguientes algoritmos:  a. De un operario se conoce su sueldo y años de antigüedad. Se pide crear un  programa que lea los datos de entrada y muestre en consola el valor booleano  de las siguientes comparaciones: i. ¿El sueldo es inferior a \$2000 US y su antigüedad es igual o superior a 10 años?  ii. ¿El sueldo es inferior a \$2000 US o su antigüedad es menor a 10 años?  iii. ¿El sueldo es mayor o igual a \$2000 US?`)

let sueldo = 0;
let antiguedad = 0;

sueldo = prompt("Ingrese su salario");
antiguedad = prompt("Ingrese su antiguedad");


let Condicion1 = Boolean(sueldo < 2000 && antiguedad >= 10);
let Condicion2 = Boolean(sueldo < 2000 || antiguedad < 10);
let Condicion3 = Boolean(sueldo >= 2000);

alert("la primera condicion es: " + Condicion1);
alert("la segunda condicion es: " + Condicion2);
alert("la tercera condicion es: " + Condicion3);

alert(`/B) La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando un descuento del 50% para compras mayores o iguales a los \$100.000 COP. Se lepide realizar un algoritmo que reciba el valor de una compra y muestre en consola el valor booleano que indique si la compra recibe o no el descuento.`)

let Producto = 0;

Producto = prompt("Ingrese el valor del producto");

Descuento = (Producto >= 100000);
alert("El producto obtuvo descuento: " + Descuento);


alert("C) Crear una fórmula para saber si un número es o no es un múltiplo de 2");

let Num = prompt("Ingrese el numero para saber si es multiplo: ");

let Multiplo = Boolean((Num / 2) == 0);

alert("El numero es multiplo de 2: " + Multiplo);


alert(`D) Diseñe un algoritmo que lea o reciba el nombre de un empleado, su salario 
básico por horas y el número de horas trabajadas en un mes y realice lo 
siguiente:
i. Calcular su salario básico mensual
ii. Determinar si recibe o no subsidio de transportes. Un empleado 
recibe este subsidio cuando el salario mensual básico es menor o igual 
a $700.000 COP
iii. Mostrar en consola el nombre del empleado, su salario básico 
mensual y si recibe o no subsidio de transporte`);

let Nombre, SalarioHoras, HorasTrabajadas;

Nombre = prompt("Ingrese su nombre: ");
SalarioHoras = prompt("Ingrese su salario por hora: ");
HorasTrabajadas = prompt("Ingrese las horas trabajadas este mes: ");

let i = SalarioHoras * HorasTrabajadas;
let ii = Boolean(i <= 700000);

console.log("Empleado: " + Nombre + "Salario mesual: " + i + "Recibe subsidio: " + ii);

alert(`E) Hacer un algoritmo con JavaScript que reciba cualquier letra del abecedario y 
muestre en consola el valor booleano que indique si es o no una vocal`);

let Letra = "";

Letra = prompt("Ingrese una letra; ");

let Vocal = Boolean(Letra === 'a' || Letra == 'e' || Letra == 'i' || Letra == 'o' || Letra == 'u');

console.log("La letra ingresada es una vocal: " + Vocal);

alert(`F) El aeropuerto El Dorado se encuentra en remodelación y requiere un 
programa para suministrarlo a su personal de seguridad con el objetivo de 
brindar información a los turistas sobre donde se debe tramitar las salidas 
internacionales para nacionales y extranjeros. Se le solicita diseñar este 
programa para que reciba el primer dígito de un número de pasaporte y que 
muestre el valor booleano que indique si el turista es del país o extranjero. 
Todos los No. de pasaporte que inicien con la letra A son nacionales.`);

let Pasaporte = prompt("Escriba el primer digito de su docoumento en Mayusculas: ");

let Check = Boolean(Pasaporte === "A");
let Check2 = Boolean(Pasaporte != "A");

alert("El es de este pais: " + Check + "El turista es extranjero: " + Check2);


//Parte dos del WorkShop

const a = 4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 2 * w;

//Punto A:

let A = ((a) / b * c);
console.log("Resultado: " + A);

let B = (a ^ 2 + b ^ 92);
console.log("Resultado: " + B);

let C = (x + y) / (u + w / a);
console.log("Resultado: " + C);

let D = x / y(z + w);
console.log("Resultado: " + D);


//variables
const pVerdadera = true;
const qVerdadera = true;
const pFalsa = false;
const qFalsa = false;

//Tabla 1

// Not P

let res1 = !pVerdadera;
let res2 = !pVerdadera;
let res3 = !pFalsa;
let res4 = !pFalsa;

//Not p and q

let res01 = !pVerdadera && qVerdadera;
let res02 = !pVerdadera && qFalsa;
let res03 = !pFalsa && qVerdadera;
let res04 = !pFalsa && qFalsa;

console.log("Tabla uno Not P: " + res1 + "  " + res2 + "  " + res3 + "  " + res4);
console.log("Tabla uno Not p and q: " + res01 + "  " + res02 + "  " + res03 + "  " + res04);

//Tabla 2
 //Not p
//la de not p  es igual a la tabla de arriba por lo que son los mismos valores y solo utilizo el mensaje 

 console.log("Tabla Dos Not P: " + res1 + "  " + res2 + "  " + res3 + "  " + res4);

//Not q 

let res001 = !qVerdaderaVerdadera;
let res002 = !qFalsa;
let res003 = !qVerdadera;
let res004 = !qFalsa;

console.log("Tabla Dos Not q: " + res001 + "  " + res002 + "  " + res003 + "  " + res004);

//Not p and Not q

let resT1 = !pVerdadera && !qVerdadera;
let resT2 = !pVerdadera && !qFalsa;
let resT3 = !pFalsa && !qVerdadera;
let resT4 = !pFalsa && !qFalsa;

console.log("Tabla uno Not p and q: " + resT1 + "  " + resT2 + "  " + resT3 + "  " + resT4);