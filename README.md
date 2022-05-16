````
npm install
````
### Proyecto Final Coderhouse (Cuarta entrega y  prácticas pendientes)
<ul>
    <li> Implementación Factory y DAO. </li>
</ul>

### Proyecto Final Coderhouse (Tercera entrega)
<ul>
    <li>Se crea un controlador de rutas</li>
    <li>Re-estructuración del proyecto, se deja con Arquitectura SOA. Se renombran las carpetas services_old y controllers_old para no perder queries en MongoDb</li>
    <li>Archivo principal -> src/server.js</li>
    <li>
        <ul>
            <li>Se crea el objeto utils/Response.js para los response de las peticiones a la BBDD.</li>
            <li>Se crea el objeto utils/Encrypt.js para el manejo de encriptación y comparación.</li>
        </ul>
    </li>
    <li>
        <ul>
            <li>Menú de registro "/api/usuarios/registro" y autenticación "api/usuarios/login" con passport local.</li>
            <li>Imagen, dentro del proyecto "./images" desde la url "localhost:PORT/resources/FICHERO.ext"</li>
        </ul>
    </li>
    <li>Se configura Nodemailer y se dejan en el .env_example como deben ser los parámetros.</li>
    <li>Whatsapp (pendiente) </li>
    <li>Looger: Winston</li>

</ul>


### Correcciones tras primera entrega
<ul>
    <li>3) No creaste un controlador de rutas.</li>
    <li>4) Creaste una carpeta de controladores, esats utilizando una arquitectura parecida a un MVC. Recuerda utilizar la arquitectura SOA.</li>
</ul>