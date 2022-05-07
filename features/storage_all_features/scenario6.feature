Feature: Crear nueva página 

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos para crear un nueva página y visualizar la creación exitosa de esta
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I click on new page
  And I wait for 2 seconds
  And I enter text "$name_1"
  And I click on the redact page content text inputbox
  And I enter text "$string_1"
  And I click on the publish page button 1
  And I wait for 2 seconds
  And I click on the publish page button 2
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  
