# Pruebas E2E con Kraken sobre Ghost App

## Funcionalidades Bajo Prueba:

1. Eliminar página:Funcionalidad para que el administrador del contenido del sitio web pueda eliminar una página.
2. Crear una página: Funcionalidad para que el administrador del contenido del sitio web pueda crear una página.
3. Crear nuevo post: Funcionalidad para que el administrador del contenido del sitio web pueda agregar nuevos posts.
4. Eliminar post:
5. Modificar post:
7. Iniciar sesión como miembro del staff: Funcionalidad para que un usuario del staff pueda inciar sesión.
8. Consultar post: Funcionalidad para que un usuario del sitio web pueda visualizar un post específico previamente publicado por el staff del sitio web.
9. Consultar autor: Funcionalidad para que un usuario del sitio web pueda visualizar un el autor de un post específico previamente publicado por el staff del sitio web.
10. Crear miembro:  
11. Eliminar miembro:
12. Modificar miembre:
13. Modificar página:
14. Invitar miembro de staff:
15. Revocar invitación miembro de staff:
16. Crear tag:
17. Editar tag:
18. Eliminar tag:
19. Cerrar sesión:
20. Cambiar tema de visualización:

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
* **Scenario12.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como contribuidor .
* **Scenario13.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo post, no se selecciona la opcion guardar y finalemnte se da en el boton regresar a la lista de post para ver que quedo como borrador.
* **Scenario14.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva tag.
* **Scenario15.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo miembro y finalmente se procede a editar cambiandole el nombre.
* **Scenario16.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva tag y finalmente se da en la opción de eliminar tag.
* **Scenario17.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para cerrar la sesión.
* **Scenario18.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio, visualizar que se muestra como contribuidor y finalmente eliminar la invitación.
* **Scenario19.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para cambiar el tema de oscuro a claro o de claro a oscuro, seguido cierrar sesión y finalmente iniciar sesión para comprabar que el fondo seleccionado.
* **Scenario20.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nuevo tag, actualizar su nombre y descripción y finalmente eliminar el tag.

<img src="https://user-images.githubusercontent.com/65487235/157884383-1b75feb1-45d8-4430-b636-3f7e06577347.png" alt="Ghost" width="200px">

## Instrucciones de Instalación de Ghost V4.42.0

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

## Instrucciones de Ejecución de Pruebas con Kraken

## Pros y Contras de Kraken
| **Pros**                                                                                                                                                                     | **Contras**                                                                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Construir los pasos que detallan el escenario con una facilidad   en la sintaxis.                                                                                            | Funcionalidades   se limitan a lo que podría hacer un usuario común sobre el browser y la   aplicación por medio de la interfaz gráfica. |
| Son pruebas de extremo a extremo por lo tanto nos permite crear   escenarios de prueba que combina varios casos de uso, no se restringe a   probar a una sola funcionalidad. | No   se pueden probar todos los escenarios de forma secuencial, para ejecutar las   pruebas toca ejecutar uno a uno.                     |
|                                                                                                                                                                              | Son   pruebas frágiles a los cambios de interfaz.                                                                                        |
|                                                                                                                                                                              | Pruebe   presentar problemas con la latencia en la reproducción.                                                                         |
