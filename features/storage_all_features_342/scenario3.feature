Feature: Crear post
@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos y creo un nuevo post publico que el usuario 2 puede consultar
  Given I navigate to page "http://localhost:3001/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email version 3.42 "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password version 3.42 "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin version 3.42
  And I wait for 2 seconds
  And I click on new post version 3.42
  And I wait for 2 seconds
  And I click on the redact post title inputbox version 3.42
  And I enter text "$name_1"
  And I click on the redact post content text inputbox version 3.42
  And I enter text "$string_1"
  And I click on the publish post button 1 version 3.42
  And I wait for 2 seconds
  And I click on the publish post button 2 version 3.42
  And I wait for 2 seconds
  And I click on the publish post button to confirm version 3.42
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3001/"
  And I wait for 2 seconds