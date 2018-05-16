Teniendo estas funciones pequeñas, podemos combinarlas para hacer cosas mas complejas.

Por ejemplo, si queremos sumar dos números y después multiplicarlo por 3, podríamos hacerlo de la siguiente forma:

```javascript
function sumaPorTres(numero1,numero2){
  return sumar(numero1,numero2)*3 ;
}
```

Acá vemos que al ya tener **sumar()** definida, podemos llamarla dentro de otra función y hacernos el trabajo mas fácil.

> Veamos si con la funcion de **sumar()** podemos hacer una función **esMagico()** que tome un parámetro y nos devuelva el doble del siguiente. 