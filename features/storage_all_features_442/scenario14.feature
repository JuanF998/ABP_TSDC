Feature: Crear un nuevo tag
@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos para crear un nuevo tag
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I click on the redact tag name inputbox
  And I wait for 2 seconds
  And I enter text "$name_1"
  And I wait for 2 seconds
  And I click on the save tag button 1
  And I wait for 2 seconds
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/tags"
  And I wait for 2 seconds
