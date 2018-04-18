Empecemos por lo basico: 

Las funciónes constan de 4 partes. La _palabra reservada_ **function**, el _nombre_ con el que vamos a llamar a la función, los parentesis donde van a ir los _parametro_ (si es que los necesita) y entre _{} llaves_ el codigo que queremos que ejecute la función.

Si queremos que una función nos devuelva un valor vamos a necesitar la palabra clave **return**. Despues de eso va a ir todo lo que querramos devolver.

Con las funciónes podemos hacer infinidad de cosas, pero vamos a empezar por algo facil. Aca escribimos la funcion que dobla el valor del numero que le pasemos.

```javascript
function doble(numero) {
   return 2 * numero;
}
```

Como podemos apreciar aca declaramos una función con la palabra **function**, con el nombre _doble_. Entre los parentesis pusimos el **parametro** _numero_ el cual va a estar remplasado por el numero que le demos cuando lo llamemos. Para terminar con la palabra **return** le decimos que lo que queremos es 2 veces el _numero_ que le dimos.

Para llamar a la funcion y que haga lo que queremos hay que llamarla por el nombre y entre parentesis meter el numero que queramos.

```javascript
doble(5);   //Esto nos va a devolver 10
doble(1.5); //Y este nos da 3
```

>Veamos si se va entendiendo: escribí ahora una función JavaScript mitad, que tome un número y devuelva su mitad. Tené en cuenta que el operador de división en JavaScript es `/`.