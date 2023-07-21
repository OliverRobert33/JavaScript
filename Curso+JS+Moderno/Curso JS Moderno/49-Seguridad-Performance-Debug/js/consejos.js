/*
SEGURIDAD EN JAVASCRIPT
*No almacenes Password en Locale Storage
*El DOM scripting ya escapa los datos y evita riesgo de seguridad, utiliza textContent la mayoria 
de las veces.
*innerHTML solo cuando la fuente de los datos es segura 


FORMULARIOS
*Valida el cliente (js) para retroalimentacion en tiempo real,  pero tambien en el servidor
*Si deseas crear apps con autenticacion de usuarios puedes utilizar JWT (Jason waits tokens) y
Auth0.

OTRAS CONSIDERACIONES 
*Cuando trabajes con dependencias, utiliza uan herramienta para verificar vulnerabilidades como 
snyck.io
*ofuscar el codigo si lo concideras nescesario
*Hashea informacion sensible con bcrypt
*/