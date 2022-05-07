Feature: Agregar staff

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos para invitar una nueva persona al staff del sitio y visualizar que se agrega efectivamente como contribuidor 
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I click on admin site settings
  And I wait for 1 seconds
  And I click on staff page
  And I wait for 1 seconds
  And I click on invite people
  And I wait for 1 seconds
  And I enter text "$email_1"
  And I wait for 1 seconds
  And I click on send invitation now
  And I wait for 4 seconds
  And I navigate to page "http://localhost:2368/ghost/#/settings/staff"
  And I wait for 3 seconds
