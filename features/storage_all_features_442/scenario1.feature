Feature: Iniciar sesión como administrador 

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos y accedo a la opción de ver el sitio web publicado
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 7 seconds
  And I click view site
  And I wait for 5 seconds

