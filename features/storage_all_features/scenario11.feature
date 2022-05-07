Feature: Modificar página

@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos, creo una nueva página, luego modifico el nombre y contenido de texto de esta
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
  And I click on previous created page to edit
  And I wait for 1 seconds
  And I click on the update page title inputbox
  And I enter text "$name_1"
  And I click on the update page content text inputbox
  And I enter text "$string_1"
  And I click on the publish page button 1
  And I wait for 2 seconds
  And I click on the publish page button 2
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds

  


