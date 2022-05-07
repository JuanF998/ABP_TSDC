const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember7');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click signin', async function () {
    let element = await this.driver.$('#ember11');
    return await element.click();
})

When('I click view site', async function () {
    let element = await this.driver.$('#ember25');
    return await element.click();
})

Then('I click on new post', async function () {
    let element = await this.driver.$('#ember27');
    return await element.click();
});

Then('I click on the redact post title inputbox', async function () {
    let element = await this.driver.$('#ember76');
    return await element.click();
});

Then('I click on the redact post content text inputbox', async function () {
    let element = await this.driver.$('#ember77');
    return await element.click();
});

Then('I click on the publish post button 1', async function () {
    let element = await this.driver.$('div.gh-publishmenu');
    return await element.click();
});

Then('I click on the publish post button 2', async function () {
    let element = await this.driver.$('button.gh-publishmenu-button');
    return await element.click();
});

Then('I click on the publish post button to confirm', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    return await element.click();
});

Then('I click on the post author', async function () {
    let element = await this.driver.$('a.author-avatar');
    return await element.click();
});

Then('I click on one published post link', async function () {
    let element = await this.driver.$('a.post-card-content-link');
    return await element.click();
});

Then('I click on the ghost home link', async function () {
    let element = await this.driver.$('a.gh-head-logo');
    return await element.click();
});

Then('I click on new member', async function () {
    let element = await this.driver.$('a.gh-btn-primary');
    return await element.click();
});

Then('I click on the new member email inputbox', async function () {
    let element = await this.driver.$('#member-email');
    return await element.click();
});

Then('I click on the new member note inputbox', async function () {
    let element = await this.driver.$('#member-note');
    return await element.click();
});

Then('I click on save member', async function () {
    let element = await this.driver.$('button.gh-btn-primary');
    return await element.click();
});

Then('I click on pages', async function () {
    let element = await this.driver.$('#ember423');
    return await element.click();
});

Then('I click on new page', async function () {
    let element = await this.driver.$('a.gh-btn-primary');
    return await element.click();
});


Then('I click on the redact page content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor');
    return await element.click();
});

Then('I click on the publish page button 1', async function () {
    let element = await this.driver.$('div.gh-publishmenu');
    return await element.click();
});

Then('I click on the publish page button 2', async function () {
    let element = await this.driver.$('button.gh-publishmenu-button');
    return await element.click();
});

Then('I click on the publish page button to confirm', async function () {
    let element = await this.driver.$('button.gh-btn-black');
    return await element.click();
});

Then('I click on previous created page to edit', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    return await element.click();
});

Then('I click on the page settings', async function () {
    let element = await this.driver.$('button.settings-menu-toggle');
    return await element.click();
});

Then('I click on the delete page button', async function () {
    let element = await this.driver.$('button.settings-menu-delete-button');
    return await element.click();
});

Then('I click on the delete confirmation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
});

Then('I click on previous created post to edit', async function () {
    let element = await this.driver.$('h3.gh-content-entry-title');
    return await element.click();
});

Then('I click on the post settings', async function () {
    let element = await this.driver.$('button.settings-menu-toggle');
    return await element.click();
});

Then('I click on the delete post button', async function () {
    let element = await this.driver.$('button.settings-menu-delete-button');
    return await element.click();
});

Then('I click on the post delete confirmation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
});

Then('I click on previous created member to edit', async function () {
    let element = await this.driver.$('img.gh-member-avatar-image');
    return await element.click();
});

Then('I click on the member settings', async function () {
    let element = await this.driver.$('button.gh-btn-action-icon');
    return await element.click();
});

Then('I click on the member delete button', async function () {
    let element = await this.driver.$('span.red');
    return await element.click();
});

Then('I click on the member delete confirmation', async function () {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
});

Then('I click on the update post title inputbox', async function () {
    let element = await this.driver.$('textarea.gh-editor-title');
    return await element.click();
});

Then('I click on the update post content text inputbox', async function () {
    let element = await this.driver.$('article.koenig-editor');
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