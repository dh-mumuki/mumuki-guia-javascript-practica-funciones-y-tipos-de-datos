¿Y que podemos hacer con los strings, además de compararlos? ¡Varias cosas! Por ejemplo, podemos preguntarles cual es su cantidad de letras:

 "biblioteca".length
10
 "babel".length
5
O también podemos concatenarlos, es decir, obtener uno nuevo que junta dos strings:

 "aa" + "bb"
"aabb"
 "sus anaqueles " + "registran todas las combinaciones"
"sus anaqueles registran todas las combinaciones"
O podemos preguntarles si uno comienza con otro:

 "una página".startsWith("una")
true
 "la biblioteca".startsWith("todos los fuegos")
false
Veamos si queda claro: escribí una función longitudNombreCompleto, que tome un nombre y un apellido, y devuelva su longitud total, contando un espacio extra para separar a ambos:

 longitudNombreCompleto("Cosme", "Fulanito")
14