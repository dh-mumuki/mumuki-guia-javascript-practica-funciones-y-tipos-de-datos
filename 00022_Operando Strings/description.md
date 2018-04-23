¿Y que podemos hacer que no sea matemática?
¡Varias cosas! Por ejemplo, podemos trabajar con **Strings**:

_Si te acordas los **strings**, son un tipo de dato. Representa cadenas de texto y lo que se escribe dentro de las comillas ("") es literal_

¿Qué podemos hacer con los strings? Podemos medir qué tan largo es (en caracteres)
```javascript
 "biblioteca".length // devuelve 10
 "babel".length      // devuelve 5
```
También podemos sumar **strings**... Si, ¡sumarlos!
Aunque el término correcto es **concatenarlos**, es decir, obtener uno nuevo, juntando dos o mas **strings**:
```javascript
 "aa" + "bb"       // devuelve "aabb"
 "aa" + " " + "bb" // devuelve "aa bb"
```

> Probemos qué tan claro quedo: escribí una función longitudNombreCompleto, que tome un nombre y un apellido, y devuelva su longitud total, contando un espacio extra para separar a ambos:
```javascript
longitudNombreCompleto("Cosme", "Fulanito") 
//  devuelve 14
```