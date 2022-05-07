Feature: Modificar post 
@user1 @web
Scenario: Como admninistrador de ghost inicio sesión con datos correctos, creo un nuevo post publico, luego modifico el nombre y contenido de texto del post
  Given I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  When I enter email "<USERNAME1>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click signin
  And I wait for 2 seconds
  And I click on new post
  And I wait for 2 seconds
  And I click on the redact post title inputbox
  And I enter text "$name_1"
  And I click on the redact post content text inputbox
  And I enter text "$string_1"
  And I click on the publish post button 1
  And I wait for 2 seconds
  And I click on the publish post button 2
  And I wait for 2 seconds
  And I click on the publish post button to confirm
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 2 seconds
  And I click on previous created post to edit
  And I wait for 1 seconds
  And I click on the update post title inputbox
  And I enter text "$name_1"
  And I click on the update post content text inputbox
  And I enter text "$string_1"
  And I click on the publish post button 1
  And I wait for 2 seconds
  And I click on the publish post button 2
  And I wait for 2 seconds
  And I click on the publish post button to confirm
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 2 seconds

