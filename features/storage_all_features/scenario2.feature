Feature: Iniciar sesión como administrador

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos inválidos y no debería poder acceder a la plataforma de administración
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 5 seconds
  When I enter email "<USERNAME2>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD2>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 7 seconds
  And I click signin
