Empecemos por lo basico: 

Las funciónes constan de 4 partes. La _palabra reservada_ **function**, el _nombre_ con el que vamos a llamar a la función, los parentesis donde van a ir los _parametros_ (si es que los necesita) y entre _{} llaves_ el código que queremos que ejecute la función.

Si queremos que una función nos devuelva un valor, vamos a necesitar la palabra clave **return**. Después de eso va a ir todo lo que querramos devolver.

Con las funciónes, podemos hacer infinidad de cosas, pero vamos a empezar por algo fácil. Acá escribimos la función que dobla el valor del número que le pasemos.

```javascript
function doble(numero) {
   return 2 * numero;
}
```

Como podemos apreciar, arriba declaramos una función con la palabra reservada **function** y el nombre _doble_. Entre los paréntesis, pusimos el **parametro** _numero_ el cual va a estar reemplazado por el número que le demos cuando lo llamemos. Para terminar con la palabra **return** le decimos que lo que queremos es 2 veces el _número_ que le dimos.

Para llamar a la función y que haga lo que queremos, hay que llamarla por el nombre y entre paréntesis meter el número que queramos.

```javascript
doble(5);   //Esto nos va a devolver 10
doble(1.5); //Y este nos da 3
```