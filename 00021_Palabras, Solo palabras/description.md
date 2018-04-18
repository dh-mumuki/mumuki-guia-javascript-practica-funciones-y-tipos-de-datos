Muchas veces queremos escribir programas que trabajen con texto :page_facing_up:: querremos saber cuantas palabras hay en un libro, o convertir minúsculas a mayúsculas, o saber en que parte de un texto está otro.

Para este tipo de problemas, tenemos los strings, también llamados cadenas de caracteres:

"Ahora la bebe tiene que dormir en la cuna"
'El hierro nos ayuda jugar'
"¡Hola Miguel!"
Como se observa, todos los strings están encerrados entre comillas simples o dobles. ¡Da igual usar unas u otras! Pero sé consistente: por ejemplo, si abriste comilla doble, tenés que cerrar comilla doble. Además, un string puede estar formado por (casi) cualquier carácter: letras, números, símbolos, espacios, etc.

¿Y qué podemos hacer con los string? Por ejemplo, compararlos, como a cualquier otro valor:

 "hola" === "Hola"
false

 "todo el mundo" === "todo el mundo"
true
Veamos si queda claro: escribí la función esFinDeSemana que tome un string que represente el nombre de un día de la semana, y nos diga si es "sábado" o "domingo"

 esFinDeSemana("sábado")
true
 esFinDeSemana("martes")
false