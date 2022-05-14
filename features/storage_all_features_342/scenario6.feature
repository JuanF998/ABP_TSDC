Feature: Crear nueva página 

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos para crear un nueva página y visualizar la creación exitosa de esta
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email version 3.42 "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password version 3.42 "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin version 3.42
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3001/ghost/#/pages"
  And I wait for 2 seconds
  And I click on new page version 3.42
  And I wait for 2 seconds
  And I click on the redact page title text inputbox version 3.42
  And I enter text "$name_1"
  And I click on the redact page content text inputbox version 3.42
  And I enter text "$string_1"
  And I click on the publish page button 1 version 3.42
  And I wait for 2 seconds
  And I click on the publish page button 2 version 3.42
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3001/ghost/#/pages"
  And I wait for 2 seconds
  
