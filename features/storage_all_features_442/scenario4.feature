Feature: Consultar post

@user1 @web
Scenario: Como visitante de Ghost ver un post, acceder a la pagina de su autor y finalmente regresar a la página de inicio
  Given I navigate to page "http://localhost:2368/"
  And I wait for 2 seconds
  And I click on one published post link
  And I wait for 2 seconds
  And I click on the post author
  And I wait for 2 seconds
  And I click on the ghost home link
  And I wait for 2 seconds

  