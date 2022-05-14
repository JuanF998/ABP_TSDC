Feature: Agregar staff

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como contribuidor 
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email version 3.42 "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password version 3.42 "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin version 3.42
  And I wait for 2 seconds
  And I click on admin site settings version 3.42
  And I wait for 3 seconds
  And I click on staff page version 3.42
  And I wait for 1 seconds
  And I click on invite people version 3.42
  And I wait for 1 seconds
  And I enter text "$email_1"
  And I wait for 1 seconds
  And I click on send invitation now 3.42
  And I wait for 4 seconds
  And I navigate to page "http://localhost:3001/ghost/#/staff"
  And I wait for 3 seconds
