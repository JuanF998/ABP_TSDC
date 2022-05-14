Feature: Crear post
@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos, se inicia a crear un post, no se selecciona la opcion guardar y se regresa a la lista de post para ver que quedo como borrador
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I click on new post
  And I wait for 2 seconds
  And I click on the redact post title inputbox
  And I enter text "$name_1"
  And I click on the redact post content text inputbox
  And I enter text "$string_1"
  And I wait for 1 seconds
  And I click on link to return to posts list without saving
  And I wait for 4 seconds