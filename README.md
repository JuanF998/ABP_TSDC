# Pruebas E2E con Kraken sobre Ghost App

## Intsrucciones de Ejecución de Pruebas con Kraken



## Funcionalidades Bajo Prueba:

1.    Eliminar página: Funcionalidad para que el administrador del contenido del sitio web pueda eliminar una página.
2.    Crear nuevo post: Funcionalidad para que el administrador del contenido del sitio web pueda agregar nuevos posts.
3.    Crear una página: Funcionalidad para que el administrador del contenido del sitio web pueda crear una página.
4.    Iniciar sesión como miembro del staff: Funcionalidad para que un usuario del staff pueda inciar sesión.
5.    Crear suscripción o membresía: Funcionalidad para suscribirse al contenido del sitio web con nombre y correo. 
6.    Consultar post
7.    Consultar autor

## Escenarios de Prueba

* **Scenario1.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, y acceder a la opción de ver el sitio web publicado desde la plataforma de administración de Ghost.
* **Scenario2.feature:** Como admninistrador de Ghost iniciar sesión con datos inválidos, e intenar acceder a la plataforma de administración sin estar autenticado.
* **Scenario3.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, y crear un nuevo post público que pueda ser consultado luego.
* **Scenario4.feature:** Como visitante de Ghost ver un post, acceder a la pagina de su autor y finalmente regresar a la página de inicio del sitio.
* **Scenario5.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo miembro y visualizar la creación exitosa de este en el sitio web.
* **Scenario6.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nueva página y visualizar la creación exitosa de esta en el sitio web.
* **Scenario7.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos para crear un nueva página y luego eliminarla del sitio web.
* **Scenario8.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo post público y eliminar post.
* **Scenario9.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo miembro y eliminar miembro.
* **Scenario10.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo post público, luego modificar el nombre y contenido de texto del post y visualizar cambios aplicados.
* **Scenario11.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva página, posterior modificar el nombre y contenido de texto de esta
* **Scenario12.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como contribuidor 
* **Scenario13.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo post, no se selecciona la opcion guardar y finalemnte se da en el boton regresar a la lista de post para ver que quedo como borrador
* **Scenario14.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva tag
* **Scenario15.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear un nuevo miembro y finalmente se procede a editar para cambiandole el nombre
* **Scenario16.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nueva tag y finalmente se da en la opción de eliminar tag
* **Scenario17.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para cerrar la sesión
* **Scenario18.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para invitar una nueva persona al staff del sitio, visualizar que se muestra como contribuidor y finalmente eliminar la invitación
* **Scenario19.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para cambiar el tema de oscuro a claro o de claro a oscuro, seguido cierrar sesión y finalmente iniciar sesión para comprabar que el fondo seleccionado.
* **Scenario20.feature:** Como admninistrador de Ghost iniciar sesión con datos correctos, para crear una nuevo tag, actualizar su nombre y descripción y finalmente eliminar el tag.


## Pros y Contras de Kraken
| **Pros**                                                                                                                                                                     | **Contras**                                                                                                                              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Construir los pasos que detallan el escenario con una facilidad   en la sintaxis.                                                                                            | Funcionalidades   se limitan a lo que podría hacer un usuario común sobre el browser y la   aplicación por medio de la interfaz gráfica. |
| Son pruebas de extremo a extremo por lo tanto nos permite crear   escenarios de prueba que combina varios casos de uso, no se restringe a   probar a una sola funcionalidad. | No   se pueden probar todos los escenarios de forma secuencial, para ejecutar las   pruebas toca ejecutar uno a uno.                     |
|                                                                                                                                                                              | Son   pruebas frágiles a los cambios de interfaz.                                                                                        |
|                                                                                                                                                                              | Pruebe   presentar problemas con la latencia en la reproducción.                                                                         |
