Feature: Modificar post 
@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos, creo un nuevo post publico, luego modifico el nombre y contenido de texto del post
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
  And I navigate to page "http://localhost:3001/ghost/#/posts"
  And I wait for 2 seconds
  And I click on previous created post to edit version 3.42
  And I wait for 1 seconds
  And I click on the update post title inputbox version 3.42
  And I enter text "$name_1"
  And I click on the update post content text inputbox version 3.42
  And I enter text "$string_1"
  And I click on the publish post button 1 version 3.42
  And I wait for 2 seconds
  And I click on the publish post button 2 version 3.42
  And I wait for 2 seconds
  And I click on the publish post button to confirm version 3.42
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3001/ghost/#/posts"
  And I wait for 2 seconds

