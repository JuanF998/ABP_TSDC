# Pruebas E2E con Kraken sobre Ghost App

## Funcionalidades Bajo Prueba:

**1. Eliminar página:** Funcionalidad para que el administrador del contenido del sitio web pueda eliminar una página.\
**2. Crear una página:** Funcionalidad para que el administrador del contenido del sitio web pueda crear una página.\
**3. Modificar página:** Funcionalidad para que el administrador del contenido del sitio web pueda modificar una página.\
**4. Crear nuevo post:** Funcionalidad para que el administrador del contenido del sitio web pueda crear un nuevo post.\
**5. Eliminar post:** Funcionalidad para que el administrador del contenido del sitio web pueda eliminar un post existente.\
**7. Modificar post:** Funcionalidad para que el administrador del contenido del sitio web pueda modificar un post existente.\
**8. Consultar post:** Funcionalidad para que un usuario del sitio web pueda visualizar un post específico previamente publicado por el staff del sitio web.\
**9. Iniciar sesión como miembro del staff:** Funcionalidad para que un usuario del staff pueda iniciar sesión.\
**10. Cerrar sesión como miembro del staff:** Funcionalidad para que un usuario del staff que tenga activa su sesión pueda cerrar sesión.\
**11. Consultar autor:** Funcionalidad para que un usuario del sitio web pueda visualizar un el autor de un post específico previamente publicado por el staff del sitio web.\
**12. Crear miembro:** Funcionalidad para que el administrador del contenido del sitio web pueda agregar un nuevo miembro de forma manual.\
**13. Eliminar miembro:** Funcionalidad para que el administrador del contenido del sitio web pueda eliminar un miembro existente.\
**14. Modificar miembro:** Funcionalidad para que el administrador del contenido del sitio web pueda modificar un miembro existente.\
**15. Invitar miembro de staff:** Funcionalidad para invitar colaboradores o usuarios de tipo autor, editor y administrador de contenido del sitio web.\
**16. Revocar invitación miembro de staff:** Funcionalidad para revocar la invitación existente para colaboradores o usuarios de tipo autor, editor y administrador de contenido del sitio web.\
**17. Crear tag:** Funcionalidad para que el administrador del contenido del sitio web pueda crear un nuevo tag.\
**18. Editar tag:** Funcionalidad para que el administrador del contenido del sitio web pueda editar un tag existente.\
**19. Eliminar tag:** Funcionalidad para que el administrador del contenido del sitio web pueda eliminar un tag existente.\
**20. Cambiar tema de visualización:** Funcionalidad para que el administrador del contenido del sitio web pueda cambiar el tema de oscuro a claro o de claro a oscuro.

## Escenarios de Prueba

* **Scenario1.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, y acceder a la opción de ver el sitio web publicado desde la plataforma de administración de Ghost.
* **Scenario2.feature:** Como admninistrador de Ghost iniciar sesión con datos inválidos, e intenar acceder a la plataforma de administración sin estar autenticado.
* **Scenario3.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, y crear un nuevo post público que pueda ser consultado luego.
* **Scenario4.feature:** Como visitante de Ghost ver un post, acceder a la página de su autor y finalmente regresar a la página de inicio del sitio.
* **Scenario5.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo miembro y visualizar la creación exitosa de este en el sitio web.
* **Scenario6.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nueva página y visualizar la creación exitosa de esta en el sitio web.
* **Scenario7.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nueva página y luego eliminarla del sitio web.
* **Scenario8.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo post público y eliminar post.
* **Scenario9.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo miembro y eliminar miembro.
* **Scenario10.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo post público, luego modificar el nombre y contenido de texto del post y visualizar cambios aplicados.
* **Scenario11.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva página, posterior modificar el nombre y contenido de texto de esta.
* **Scenario12.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como contribuidor.
* **Scenario13.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo post, no se selecciona la opcion guardar y finalemnte se da en el boton regresar a la lista de post para ver que quedo como borrador.
* **Scenario14.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva tag.
* **Scenario15.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo miembro y finalmente se procede a editar cambiandole el nombre.
* **Scenario16.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva tag y finalmente se da en la opción de eliminar tag.
* **Scenario17.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para cerrar la sesión.
* **Scenario18.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio, visualizar que se muestra como contribuidor y finalmente eliminar la invitación.
* **Scenario19.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para cambiar el tema de oscuro a claro o de claro a oscuro, seguido cierrar sesión y finalmente iniciar sesión para comprabar que el fondo seleccionado.
* **Scenario20.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nuevo tag, actualizar su nombre y descripción y finalmente eliminar el tag.

## Instrucciones de Instalación de Ghost V4.42.0
<img src="https://user-images.githubusercontent.com/65487235/157884383-1b75feb1-45d8-4430-b636-3f7e06577347.png" alt="Ghost" width="200px">

### Inicio rápido 

Si desea ejecutar su propia instancia de Ghost, en la mayoría de los casos, la mejor manera es utilizar el **CLI tool** de Ghost:
```
npm install ghost-cli@latest -g
```
&nbsp;
Luego, si instala localmente, agregue el indicador `local` para comenzar a funcionar en menos de un minuto - [Local install docs](https://ghost.org/docs/install/local/)
```
ghost install local
```
o en un servidor ejecute la instalación completa, incluida la configuración automática de SSL usando LetsEncrypt - [Production install docs](https://ghost.org/docs/install/ubuntu/)
```
ghost install
```
Adicionalmente, para instalar una versión local especifica se seguirá el siguiente comando, para nuestro caso la versión utilizada es la 4.42.0.
```
ghost install 4.42.0 --local
```
¡Eso es todo! Estás listo.

### Iniciar y detener 
Ghost se ejecuta en un proceso en segundo plano separado y permanece ejecutándose hasta que lo detenga o reinicie su computadora. Así que puede encontrar estos comandos útiles para manejarlo:
```
• ghost stop para detener Ghost
• ghost start para iniciar Ghost
• ghost log ver registros (logs).
• ghost ls para enumerar todos los blogs de Ghost en ejecución.
```

Ejecute la ayuda de Ghost para obtener una lista de los comandos disponibles o explore la [documentación completa de Ghost-CLI](https://ghost.org/docs/ghost-cli/).

<!-- End GHOST documentation  -->

## Instrucciones de Ejecución de Pruebas con Kraken
```
1. Clonar el presente respositorio con git clone en su equipo.
2. Abrir desde la terminal la carpeta raíz del repositorio y ejcutar el comando npm install.
3. Modificar los valores de las llaves de "USERNAME1" y "PASSWORD1" del archivo nombrado "properties.json" por las credenciales configuradas para la cuenta de administración de Ghost cuando lo instaló y ejecutó por primera vez.
4. Ejecutar el siguiente comando desde la terminal para verificar que se cuentan con los requisitos para ejecuatar Kraken: kraken-node doctor.
5. Ejecuter el siguiente comando para correr las pruebas: npx kraken-node run
```
**Nota:** En la ubicación Ghost_ABP_Kraken/features/storage_all_features/ podrá encontrar todos los escenarios creados para nuestra ABP y en la ubicación Ghost_ABP_Kraken/features/ solo aparece el escenario que se desea probar (Ejemplo: Scenario20.feature), por lo que si desea probar todos los escenarios debe copiar de la carpeta storage_all_features el escenario a probar, pegarlo en la carpeta features y eliminar el escenario que estaba previamente en esa carpeta para probar el nuevo escenario pegado. Esto lo indicamos porque al tener todos los escenarios en la carpeta feature y ejecutar el comado npx kraken-node run se genera un error al cambiar de escenario.


## Pros y Contras de Kraken
| **Pros**                                                                                                                                                                     | **Contras**                                                                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Construir los pasos que detallan el escenario con una facilidad   en la sintaxis.                                                                                            | Funcionalidades   se limitan a lo que podría hacer un usuario común sobre el browser y la   aplicación por medio de la interfaz gráfica. |
| Son pruebas de extremo a extremo por lo tanto nos permite crear   escenarios de prueba que combina varios casos de uso, no se restringe a   probar a una sola funcionalidad. | No   se pueden probar todos los escenarios de forma secuencial, para ejecutar las   pruebas toca ejecutar uno a uno.                     |
|                                                                                                                                                                              | Son   pruebas frágiles a los cambios de interfaz.                                                                                        |
|                                                                                                                                                                              | Pruebe   presentar problemas con la latencia en la reproducción.                                                                         |
