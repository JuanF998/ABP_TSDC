Feature: Cambiar a modo oscuro o claro el tema del sitio de adminitración

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos, cambio el tema de oscuro a claro o de claro a oscuro, cierro sesión y vuelvo a iniciar sesión para comprabar que el fondo seleccionado continue
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I click on nightshift togglee
  And I click on the user account options
  And I wait for 2 seconds
  And I click on the signout button
  And I wait for 1 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds