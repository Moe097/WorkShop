alert("Desarrollar con JavaScript los siguientes algoritmos:"
+"a. De un operario se conoce su sueldo y años de antigüedad. Se pide crear un" 
+"programa que lea los datos de entrada y muestre en consola el valor booleano" 
+"de las siguientes comparaciones:"
+"i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a" 
+"10 años?"
+"ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?"
+"iii. ¿El sueldo es mayor o igual a $2000 US?")

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

alert("/La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando un " 
+"descuento del 50% para compras mayores o iguales a los $100.000 COP. Se le" 
+"pide realizar un algoritmo que reciba el valor de una compra y muestre en "
+"consola el valor booleano que indique si la compra recibe o no el descuento.")

let Producto = 0;

Producto= prompt("Ingrese el valor del producto");
 
Descuento = (Producto>=100000);
alert("El producto obtuvo descuento: "+  Descuento);


