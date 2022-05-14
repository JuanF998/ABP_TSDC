Feature: Cerra sesión 

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos y luego cierro la sesión
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I click on the user account options
  And I wait for 2 seconds
  And I click on the signout button
  And I wait for 1 seconds
  And I click signin
  And I wait for 1 seconds
