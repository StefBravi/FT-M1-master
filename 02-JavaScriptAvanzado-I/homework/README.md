
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5;
var b = 10;
var c = function(a, b, c) {
   // var a = 8
   // var b = 9
   // var c = 10
  var x = 10;
  console.log(x); //10
  console.log(a); // 8
  var f = function(a, b, c) {
   // var a = 8
   // var b = 9
   // var c = 10
    b = a;
    console.log(b); //8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); //9
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //und
console.log(baz); //error
foo(); //No se pone el Hola! porque el codigo se cortó arriba, por el error.
function foo() {
    console.log('Hola!'); 
    }
var bar = 1;
baz = 2;
```


```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Franco
```




```javascript
var instructor = "Tony";
console.log(instructor); //Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony
```

```javascript
var instructor = "Tony"; // Contexto GLOBAL
let pm = "Franco"; // Contexto de BLOQUE (Local)
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // "The Flash"
    console.log(pm); // "Reverse Flash"
}
console.log(instructor);//"The Flash"
console.log(pm); // Franco, porque el let siempre se mantiene local, en este caso dentoro del 'if'
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2, porque trata de convertir el String en numero
"2" * "3" //6, porque trata de convertir el String en numero
4 + 5 + "px" //'9px', porque suma de izq a der y despues concatena con 'px'
"$" + 4 + 5 //'$45', porque concatena '$' con 4 y despues con 5
"4" - 2 //2, '4' - 2 es 2 y '4' + 2 es 42 por el '+' concatena
"4px" - 2 //NAN INTENTO CONVERTIR un STRING
7 / 0 //Infinity, / en 0 no se puede
{}[0] // SIN RESOLVEEER
parseInt("09") // 9
5 && 2 //2 
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //23, porque [3] + [3] se concatena por no poder sumar arreglos, en cambio con el - si lo resta
3>2>1 //false, porque 3 > 2 es True y True = 1 > 1 es False
[] == ![] //True, porque compara valor y tipo de dato
[] === ![] //False, porque === es igualdad estricta
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined
   console.log(foo()); //2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   // var food = false
   // var snack
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   // 2 prop
   fullname: 'Natalia Nerea',
   prop: {
      // 2 propiedades
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio

var test = obj.prop.getFullname;
// var test = function () {
//   retunrn this.fullname;
// }

console.log(test()); // Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();// 1 -- 4 -- 3 -- 2
```
