const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    await this.driver.saveScreenshot('./features/Screenshot/scenario1/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario2/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/EnterEmail.png');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    await this.driver.saveScreenshot('./features/Screenshot/scenario1/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario2/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/EnterPassword.png');
    return await element.setValue(password);
});

When('I click signin', async function () {
    let element = await this.driver.$('#ember11');
    await this.driver.saveScreenshot('./features/Screenshot/scenario1/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario2/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickSignin.png');
    return await element.click();
})

When('I click view site', async function () {
    let element = await this.driver.$('#ember25');
    await this.driver.saveScreenshot('./features/Screenshot/scenario1/ClickViewSite.png');
    return await element.click();
})

Then('I click on new post', async function () {
    let element = await this.driver.$('#ember27');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnNewPost.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnNewPost.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnNewPost.png');
    return await element.click();
});

Then('I click on the redact post title inputbox', async function () {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnTheRedactPostTitleInputbox.png');
    return await element.click();
});

Then('I click on the redact post content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnTheRedactPostContentTextInputbox.png'); 
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnTheRedactPostContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnTheRedactPostContentTextInputbox.png');
    return await element.click();
});

Then('I click on the publish post button 1', async function () {
    let element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton01.png');
    return await element.click();
});

Then('I click on the publish post button 2', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton02.png');
    return await element.click();
});

Then('I click on the publish post button to confirm', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButtonToConfirm01.png');
    return await element.click();
});

Then('I click on the post author', async function () {
    let element = await this.driver.$('a.author-avatar');
    await this.driver.saveScreenshot('./features/Screenshot/scenario4/ClickOnThePostAuthor.png');
    return await element.click();
});

Then('I click on one published post link', async function () {
    let element = await this.driver.$('a.post-card-content-link');
    await this.driver.saveScreenshot('./features/Screenshot/scenario4/ClickOnOnePublishedPostLink.png');
    return await element.click();
});

Then('I click on the ghost home link', async function () {
    let element = await this.driver.$('a.gh-head-logo');
    await this.driver.saveScreenshot('./features/Screenshot/scenario4/ClickOnTheGhostHomeLink.png');
    return await element.click();
});

Then('I click on new member', async function () {
    let element = await this.driver.$('a.gh-btn-primary');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickOnNewMember.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnNewMember.png');
    return await element.click();
});

Then('I click on the new member email inputbox', async function () {
    let element = await this.driver.$('#member-email');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickOnTheNewMemberEmailInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnTheNewMemberEmailInputbox.png');
    return await element.click();
});

Then('I click on the new member note inputbox', async function () {
    let element = await this.driver.$('#member-note');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickOnTheNewMemberNoteInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnTheNewMemberNoteInputbox.png');
    return await element.click();
});

Then('I click on save member', async function () {
    let element = await this.driver.$('button.gh-btn-primary');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickOnSaveMember.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnSaveMember.png');
    return await element.click();
});

Then('I click on pages', async function () {
    let element = await this.driver.$('#ember423');
    return await element.click();
});

Then('I click on new page', async function () {
    let element = await this.driver.$('a.gh-btn-primary');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickOnNewPage.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnNewPage.png');
    return await element.click();
});


Then('I click on the redact page content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickOnTheRedactPageContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnTheRedactPageContentTextInputbox.png');
    return await element.click();
});

Then('I click on the publish page button 1', async function () {
    let element = await this.driver.$('div.gh-publishmenu');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickOnThePublishPageButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnThePublishPageButton1.png');
    return await element.click();
});

Then('I click on the publish page button 2', async function () {
    let element = await this.driver.$('button.gh-publishmenu-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickOnThePublishPageButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnThePublishPageButton2.png');
    return await element.click();
});

Then('I click on the publish page button to confirm', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    return await element.click();
});

Then('I click on previous created page to edit', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnPreviousCreatedPageToEdit.png');
    return await element.click();
});

Then('I click on the page settings', async function () {
    let element = await this.driver.$('button.settings-menu-toggle');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnThePageSettings.png');
    return await element.click();
});

Then('I click on the delete page button', async function () {
    let element = await this.driver.$('button.settings-menu-delete-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnTheDeletePageButton.png');
    return await element.click();
});

Then('I click on the delete confirmation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnTheDeleteConfirmation.png');
    return await element.click();
});

Then('I click on previous created post to edit', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnPreviousCreatedPostToEdit.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnPreviousCreatedPostToEdit.png');
    return await element.click();
});

Then('I click on the post settings', async function () {
    let element = await this.driver.$('button.settings-menu-toggle');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePostSettings.png');
    return await element.click();
});

Then('I click on the delete post button', async function () {
    let element = await this.driver.$('button.settings-menu-delete-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnTheDeletePostButton.png');
    return await element.click();
});

Then('I click on the post delete confirmation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePostDeleteConfirmation.png');
    return await element.click();
});

Then('I click on previous created member to edit', async function () {
    let element = await this.driver.$('img.gh-member-avatar-image');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnPreviousCreatedMemberToEdit.png');
    return await element.click();
});

Then('I click on the member settings', async function () {
    let element = await this.driver.$('button.gh-btn-action-icon');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnTheMemberSettings.png');
    return await element.click();
});

Then('I click on the member delete button', async function () {
    let element = await this.driver.$('span.red');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnTheMemberDeleteButton.png');
    return await element.click();
});

Then('I click on the member delete confirmation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
});

Then('I click on the update post title inputbox', async function () {
    let element = await this.driver.$('textarea.gh-editor-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnTheUpdatePostTitleInputbox.png');
    return await element.click();
});

Then('I click on the update post content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnTheUpdatePostContentTextInputbox.png');
    return await element.click();
});

Then('I click on the update page title inputbox', async function () {
    let element = await this.driver.$('textarea.gh-editor-title');
    return await element.click();
});

Then('I click on the update page content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor');
    return await element.click();
});

Then('I click on admin site settings', async function () {
    let element = await this.driver.$('a.gh-nav-bottom-tabicon');
    return await element.click();
});

Then('I click on staff page', async function () {
    let element = await this.driver.$('#staff_svg__Regular');
    return await element.click();
});

Then('I click on invite people', async function () {
    let element = await this.driver.$('button.gh-btn-primary');
    return await element.click();
});

Then('I click on send invitation now', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    return await element.click();
});

Then('I click on post settings', async function () {
    let element = await this.driver.$('button.settings-menu-toggle');
    return await element.click();
});

Then('I click on link to return to posts list without saving', async function () {
    let element = await this.driver.$('a.gh-editor-back-button');
    return await element.click();
});

Then('I click on the confirmation to leave the post creation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
});

Then('I click on the user account options', async function () {
    let element = await this.driver.$('div.gh-user-avatar');
    return await element.click();
});

Then('I click on the user profile', async function () {
    let element = await this.driver.$('a.dropdown-item');
    return await element.click();
});

Then('I click on the edit member name inputbox', async function () {
    let element = await this.driver.$('#member-name');
    return await element.click();
});

Then('I click on the signout button', async function () {
    let element = await this.driver.$('a.user-menu-signout');
    return await element.click();
});

Then('I click on the button to revoke the member invitation', async function () {
    let element = await this.driver.$('a.apps-configured-action');
    return await element.click();
});

Then('I click on general settings page', async function () {
    let element = await this.driver.$('span.yellow');
    return await element.click();
});

Then('I click on nightshift togglee', async function () {
    let element = await this.driver.$('div.nightshift-toggle ');
    return await element.click();
});

Then('I click on new tag', async function () {
    let element = await this.driver.$('a.gh-btn-primary');
    return await element.click();
});
Then('I click on the redact tag name inputbox', async function () {
    let element = await this.driver.$('#tag-name');
    return await element.click();
});
Then('I click on the redact tag name inputbox2', async function () {
    let element = await this.driver.$('#tag-description');
    return await element.click();
});
Then('I click on the save tag button 1', async function () {
    let element = await this.driver.$('button.gh-btn-primary');
    return await element.click();
});
Then('I click select tag old', async function () {
    let element = await this.driver.$('li.gh-tags-list-item');
    return await element.click();
});
Then('I click on delete tag', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
});
Then('I click confirm delete tag', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return await element.click();
});

