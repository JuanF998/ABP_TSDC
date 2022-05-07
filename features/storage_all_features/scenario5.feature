Feature: Crear nuevo miembro 

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos para crear un nuevo miembro y visualizar la creación exitosa de este
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 2 seconds
  And I click on new member
  And I wait for 2 seconds
  And I enter text "$name_1"
  And I click on the new member email inputbox
  And I enter text "$email_1"
  And I click on the new member note inputbox
  And I enter text "$url_1"
  And I click on save member
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 2 seconds

