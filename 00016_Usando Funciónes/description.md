
¿Y esto con qué se come? Digo, ehm.... ¿como se usan estas funciones? ¿Cómo hago para pasarle parámetros y obtener un resultado?

¡Simple! Basta con poner el nombre de la función y, entre paréntesis, sus argumentos, como veníamos haciendo:

doble(3)
¡Y además podemos usarlas dentro de otras funciones! Por ejemplo:

function doble(numero) {
  return 2 * numero
}

function siguienteDelDoble(numero) {
   return doble(numero) + 1;
}
O incluso mejor:

function doble(numero) {
  return 2 * numero
}

function siguiente(numero) {
  return numero + 1
}

function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
Veamos si se entiende; escribí las siguientes funciones:

anterior: toma un número y devuelve ese número menos uno
triple: devuelve el triple de un número
anteriorDelTriple, que combina las dos funciones anteriores: multiplica a un número por 3 y le resta 1