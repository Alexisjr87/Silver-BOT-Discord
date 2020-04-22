# Descripción
Hola,si estas leyendo esto es porque estas buscando un npm que sirva para que tu bot hable con la gente sin tu tener que programar especificamente cada respuesta pues este npm es tu solución sobre todo en el sentido de que todos los demas npm que encontraras como este suelen ser con api keys o pagando pero en este caso es gratis.
En la pagina del npm encontraras un pequeño ejemplo de como usar el npm.
Si desean ayudar añadiendo respuestas contactad con Seyron#5532.
Debo añadir que este npm no puede ser usado con emojis ni caracteres especiales ya que no te dara ninguna respuesta
## Ejemplos
### Ej 1:
```js
const chatbot = require("espchatbotapi")
//manda el mensaje a la api y te devuelve una respuesta =>
   chatbot.hablar("hola").then(respuesta => {
     console.log(respuesta)
   })
//en la consola deberia aparecer => hola que tal
```
### Ej 2:
```js
const chatbot = require("espchatbotapi")
//solicita el numero total de respuestas que tiene el bot
   chatbot.total().then(respuesta => {
     console.log(respuesta)
   })
//en la consola deberia aparecer => el numero total de respuestas que tiene el bot en ese momento
```