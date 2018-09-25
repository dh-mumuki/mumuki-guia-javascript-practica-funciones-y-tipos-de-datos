¿Y que podemos hacer que no sea matemática?
¡Varias cosas! Por ejemplo, podemos trabajar con **Strings**:

_Si te acordás, los **strings** son un tipo de dato. Representan cadenas de texto y lo que se escribe dentro de las comillas ("") es literal._

¿Qué podemos hacer entonces con los strings? Por ejemplo podemos medir qué tan largos son (en caracteres):

```javascript
 "biblioteca".length // devuelve 10
 "babel".length      // devuelve 5
```

También te recordamos que podemos sumar **strings**... Si, ¡sumarlos!
Aunque el término correcto es **concatenarlos**, es decir, obtener uno nuevo, juntando dos o más **strings**:

```javascript
 "aa" + "bb"       // devuelve "aabb"
 "aa" + " " + "bb" // devuelve "aa bb"
```

> Probemos qué tan claro quedó: escribí una función longitudNombreCompleto, que tome un nombre y un apellido, y devuelva su longitud total, contando un espacio extra para separar a ambos:
```javascript
longitudNombreCompleto("Cosme", "Fulanito") 
//  devuelve 14
```