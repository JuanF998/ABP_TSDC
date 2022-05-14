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
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario13/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario14/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario17/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/EnterEmail.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario13/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario14/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario17/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/EnterPassword.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario13/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario14/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario17/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario17/ClickSignin01.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickSignin.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario13/ClickOnNewPost.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnNewPost.png');
    return await element.click();
});

Then('I click on the redact post title inputbox', async function () {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario13/ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnTheRedactPostTitleInputbox.png');
    return await element.click();
});

Then('I click on the redact post content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnTheRedactPostContentTextInputbox.png'); 
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnTheRedactPostContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnTheRedactPostContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario13/ClickOnTheRedactPostContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnTheRedactPostContentTextInputbox.png');
    return await element.click();
});

Then('I click on the publish post button 1', async function () {
    let element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton01.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnThePublishPostButton01.png');
    return await element.click();
});

Then('I click on the publish post button 2', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButton02.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnThePublishPostButton02.png');
    return await element.click();
});

Then('I click on the publish post button to confirm', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/ClickOnThePublishPostButtonToConfirm01.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnThePublishPostButtonToConfirm01.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnNewMember.png');
    return await element.click();
});

Then('I click on the new member email inputbox', async function () {
    let element = await this.driver.$('#member-email');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickOnTheNewMemberEmailInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnTheNewMemberEmailInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnTheNewMemberEmailInputbox.png');
    return await element.click();
});

Then('I click on the new member note inputbox', async function () {
    let element = await this.driver.$('#member-note');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickOnTheNewMemberNoteInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnTheNewMemberNoteInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnTheNewMemberNoteInputbox.png');
    return await element.click();
});

Then('I click on save member', async function () {
    let element = await this.driver.$('button.gh-btn-primary');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/ClickOnSaveMember.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnSaveMember.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnSaveMember.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnSaveMember02.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickOnNewPage.png');
    return await element.click();
});


Then('I click on the redact page content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickOnTheRedactPageContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnTheRedactPageContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickOnTheRedactPageContentTextInputbox.png');
    return await element.click();
});

Then('I click on the publish page button 1', async function () {
    let element = await this.driver.$('div.gh-publishmenu');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickOnThePublishPageButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnThePublishPageButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickOnThePublishPageButton1.png');
    return await element.click();
});

Then('I click on the publish page button 2', async function () {
    let element = await this.driver.$('button.gh-publishmenu-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/ClickOnThePublishPageButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnThePublishPageButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickOnThePublishPageButton2.png');
    return await element.click();
});

Then('I click on the publish page button to confirm', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    return await element.click();
});

Then('I click on previous created page to edit', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/ClickOnPreviousCreatedPageToEdit.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickOnPreviousCreatedPageToEdit.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnPreviousCreatedPostToEdit.png');
    return await element.click();
});

Then('I click on the post settings', async function () {
    let element = await this.driver.$('button.settings-menu-toggle');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePostSettings.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnThePostSettings.png');
    return await element.click();
});

Then('I click on the delete post button', async function () {
    let element = await this.driver.$('button.settings-menu-delete-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnTheDeletePostButton.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnTheDeletePostButton.png');
    return await element.click();
});

Then('I click on the post delete confirmation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnThePostDeleteConfirmation.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario20/ClickOnThePostDeleteConfirmation.png');
    return await element.click();
});

Then('I click on previous created member to edit', async function () {
    let element = await this.driver.$('img.gh-member-avatar-image');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnPreviousCreatedMemberToEdit.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnPreviousCreatedMemberToEdit.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/ClickOnTheMemberDeleteConfirmation.png');
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
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickOnTheUpdatePageTitleInputbox.png');
    return await element.click();
});

Then('I click on the update page content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/ClickOnTheUpdatePageContentTextInputbox.png');
    return await element.click();
});

Then('I click on admin site settings', async function () {
    let element = await this.driver.$('a.gh-nav-bottom-tabicon');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnAdminSiteSettings.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/ClickOnAdminSiteSettings.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/ClickOnAdminSiteSettings.png');
    return await element.click();
});

Then('I click on staff page', async function () {
    let element = await this.driver.$('#staff_svg__Regular');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnStaffPage.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/ClickOnStaffPage.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/ClickOnStaffPage.png');
    return await element.click();
});

Then('I click on invite people', async function () {
    let element = await this.driver.$('button.gh-btn-primary');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnInvitePeople.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/ClickOnInvitePeople.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/ClickOnInvitePeople.png');
    return await element.click();
});

Then('I click on send invitation now', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnSendInvitationNow.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/ClickOnSendInvitationNow.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/ClickOnSendInvitationNow.png');
    return await element.click();
});

Then('I click on post settings', async function () {
    let element = await this.driver.$('button.settings-menu-toggle');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/ClickOnPostSettings.png');
    return await element.click();
});

Then('I click on link to return to posts list without saving', async function () {
    let element = await this.driver.$('a.gh-editor-back-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnLinkToReturnToPstsListWithoutSaving.png');
    return await element.click();
});

// Then('I click on the confirmation to leave the post creation', async function () {
//     let element = await this.driver.$('button.gh-btn-red');
//     return await element.click();
// });

Then('I click on the user account options', async function () {
    let element = await this.driver.$('div.gh-user-avatar');
    await this.driver.saveScreenshot('./features/Screenshot/scenario17/ClickOnTheUserAccountOptions.png');
    return await element.click();
});

// Then('I click on the user profile', async function () {
//     let element = await this.driver.$('a.dropdown-item');
//     return await element.click();
// });

Then('I click on the edit member name inputbox', async function () {
    let element = await this.driver.$('#member-name');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnTheEditMemberNameInputbox.png');
    return await element.click();
});

Then('I click on the signout button', async function () {
    let element = await this.driver.$('a.user-menu-signout');
    await this.driver.saveScreenshot('./features/Screenshot/scenario17/ClickOnTheSignoutButton.png');
    return await element.click();
});

Then('I click on the button to revoke the member invitation', async function () {
    let element = await this.driver.$('a.apps-configured-action');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/ClickOnTheButtonToRevokeTheMemberInvitation.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/ClickOnTheButtonToRevokeTheMemberInvitation.png');
    return await element.click();
});

// Then('I click on general settings page', async function () {
//     let element = await this.driver.$('span.yellow');
//     return await element.click();
// });

// Then('I click on nightshift togglee', async function () {
//     let element = await this.driver.$('div.nightshift-toggle ');
//     return await element.click();
// });

Then('I click on new tag', async function () {
    let element = await this.driver.$('a.gh-btn-primary');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnNewTag.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario15/ClickOnNewTag.png');
    return await element.click();
});
Then('I click on the redact tag name inputbox', async function () {
    let element = await this.driver.$('#tag-name');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnTheRedactTagNameInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/ClickOnTheRedactTagNameInputbox.png');
    return await element.click();
});
// Then('I click on the redact tag name inputbox2', async function () {
//     let element = await this.driver.$('#tag-description');
//     return await element.click();
// });
Then('I click on the save tag button 1', async function () {
    let element = await this.driver.$('button.gh-btn-primary');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/ClickOnTheSaveTagButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/ClickOnTheSaveTagButton1.png');
    return await element.click();
});
Then('I click select tag old', async function () {
    let element = await this.driver.$('li.gh-tags-list-item');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/ClickSelectTagOld.png');
    return await element.click();
});
Then('I click on delete tag', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/ClickOnDeleteTag.png');
    return await element.click();
});
Then('I click confirm delete tag', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario16/ClickConfirmDeleteTag.png');
    return await element.click();
});



When('I enter email version 3.42 {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember8');
    await this.driver.saveScreenshot('./features/Screenshot/scenario1/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario2/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_EnterEmail.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/before_EnterEmail.png');
    return await element.setValue(email);
});

When('I enter password version 3.42 {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    await this.driver.saveScreenshot('./features/Screenshot/scenario1/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario2/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_EnterPassword.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/before_EnterPassword.png');
    return await element.setValue(password);
});

When('I click signin version 3.42', async function () {
    let element = await this.driver.$('#ember12');
    await this.driver.saveScreenshot('./features/Screenshot/scenario1/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario2/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario5/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario9/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickSignin.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/before_ClickSignin.png');
    return await element.click();
})

Then('I click on new page version 3.42', async function () {
    let element = await this.driver.$('a.ember-view.gh-btn.gh-btn-green');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/before_ClickOnNewPage.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnNewPage.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickOnNewPage.png');
    return await element.click();
});

Then('I click on the redact page title text inputbox version 3.42', async function () {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    return await element.click();
});

Then('I click on the redact page content text inputbox version 3.42', async function () {
    let element = await this.driver.$('article.koenig-editor');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/before_ClickOnTheRedactPageContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnTheRedactPageContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickOnTheRedactPageContentTextInputbox.png');
    return await element.click();
});

Then('I click on the publish page button 1 version 3.42', async function () {
    let element = await this.driver.$('div.gh-publishmenu');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/before_ClickOnThePublishPageButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnThePublishPageButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickOnThePublishPageButton1.png');
    return await element.click();
});

Then('I click on the publish page button 2 version 3.42', async function () {
    let element = await this.driver.$('button.gh-publishmenu-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario6/before_ClickOnThePublishPageButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnThePublishPageButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickOnThePublishPageButton2.png');
    return await element.click();
});

Then('I click on previous created page to edit version 3.42', async function () {
    let element = await this.driver.$('a.ember-view.permalink.gh-list-data.gh-post-list-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnPreviousCreatedPageToEdit.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickOnPreviousCreatedPageToEdit.png');
    return await element.click();
});

Then('I click on the page settings version 3.42', async function () {
    let element = await this.driver.$('button.post-settings');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnThePageSettings.png');
    return await element.click();
});

Then('I click on the delete page button version 3.42', async function () {
    let element = await this.driver.$('button.gh-btn-hover-red').$('span*=Delete')
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnTheDeletePageButton.png');
    return await element.click();
});

Then('I click on the delete confirmation version 3.42', async function () {
    let element = await this.driver.$('button.gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnTheDeleteConfirmation.png');
    return await element.click();
});

Then('I click on new post version 3.42', async function () {
    let element = await this.driver.$('a.gh-secondary-action.gh-nav-new-post.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_ClickOnNewPost.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_ClickOnNewPost.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnNewPost.png');
    return await element.click();
});

Then('I click on the redact post title inputbox version 3.42', async function () {
    let element = await this.driver.$('textarea.gh-editor-title.ember-text-area.gh-input.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_ClickOnTheRedactPostTitleInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnTheRedactPostTitleInputbox.png');
    return await element.click();
});

Then('I click on the redact post content text inputbox version 3.42', async function () {
    let element = await this.driver.$('article.koenig-editor.w-100.flex-grow.relative.center.mb0.mt0.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_ClickOnTheRedactPostContentTextInputbox.png'); 
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_ClickOnTheRedactPostContentTextInputbox.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnTheRedactPostContentTextInputbox.png');
    return await element.click();
});

Then('I click on the publish post button 1 version 3.42', async function () {
    let element = await this.driver.$('div.ember-basic-dropdown-trigger');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnThePublishPostButton1.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnThePublishPostButton01.png');
    return await element.click();
});

Then('I click on the publish post button 2 version 3.42', async function () {
    let element = await this.driver.$('button.gh-btn-blue');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnThePublishPostButton2.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnThePublishPostButton02.png');
    return await element.click();
});

Then('I click on the publish post button to confirm version 3.42', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-outline.gh-btn-link');
    await this.driver.saveScreenshot('./features/Screenshot/scenario3/before_ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario8/before_ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnThePublishPostButtonToConfirm.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnThePublishPostButtonToConfirm01.png');
    return await element.click();
});

Then('I click on previous created post to edit version 3.42', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario7/before_ClickOnPreviousCreatedPostToEdit.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnPreviousCreatedPostToEdit.png');
    return await element.click();
});

Then('I click on the update post title inputbox version 3.42', async function () {
    let element = await this.driver.$('textarea.gh-editor-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnTheUpdatePostTitleInputbox.png');
    return await element.click();
});

Then('I click on the update post content text inputbox version 3.42', async function () {
    let element = await this.driver.$('article.koenig-editor');
    await this.driver.saveScreenshot('./features/Screenshot/scenario10/before_ClickOnTheUpdatePostContentTextInputbox.png');
    return await element.click();
});

Then('I click on the update page title inputbox version 3.42', async function () {
    let element = await this.driver.$('textarea.gh-editor-title');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickOnTheUpdatePageTitleInputbox.png');
    return await element.click();
});

Then('I click on the update page content text inputbox version 3.42', async function () {
    let element = await this.driver.$('article.koenig-editor');
    await this.driver.saveScreenshot('./features/Screenshot/scenario11/before_ClickOnTheUpdatePageContentTextInputbox.png');
    return await element.click();
});

Then('I click on admin site settings version 3.42', async function () {
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/before_ClickOnAdminSiteSettings.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/before_ClickOnAdminSiteSettings.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/before_ClickOnAdminSiteSettings.png');
});

Then('I click on staff page version 3.42', async function () {
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/before_ClickOnStaffPage.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/before_ClickOnStaffPage.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/before_ClickOnStaffPage.png');
    return await this.driver.url("http://localhost:3001/ghost/#/staff")
});

Then('I click on invite people version 3.42', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-green');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/before_ClickOnInvitePeople.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/before_ClickOnInvitePeople.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/before_ClickOnInvitePeople.png');
    return await element.click();
});

Then('I click on send invitation now 3.42', async function () {
    let element = await this.driver.$('button.gh-btn.gh-btn-green.gh-btn-icon.ember-view');
    await this.driver.saveScreenshot('./features/Screenshot/scenario12/before_ClickOnSendInvitationNow.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario18/before_ClickOnSendInvitationNow.png');
    await this.driver.saveScreenshot('./features/Screenshot/scenario19/before_ClickOnSendInvitationNow.png');
    return await element.click();
});