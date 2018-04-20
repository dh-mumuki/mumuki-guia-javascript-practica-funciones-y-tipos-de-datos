¿Y que podemos hacer algo que no sea matematica?
¡Varias cosas! Por ejemplo, podemos trabajar con **Strings**:

_Si te acordas los **strings** son un tipo de dato. Representa cadenas de texto y es literal lo que se escribe dentro de las comillas ("")_

Y que s epude hacer con los strings? Podemos medir que tan largo es (en caracteres)
```javascript
 "biblioteca".length // devuelve 10
 "babel".length      // devuelve 5
```
También podemos sumar **strings**. Si sumarlos!
Mejor conocido como concatenarlos, es decir, obtener uno nuevo que junta dos o mas **strings**:
```javascript
 "aa" + "bb"       // devuelve "aabb"
 "aa" + " " + "bb" // devuelve "aa bb"
```

> Probemos que tan claro quedo: escribí una función longitudNombreCompleto, que tome un nombre y un apellido, y devuelva su longitud total, contando un espacio extra para separar a ambos:
```javascript
longitudNombreCompleto("Cosme", "Fulanito") 
//  devuelve 14
```