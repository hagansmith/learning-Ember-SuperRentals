import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    andThen(function() {
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
  });
  
  test('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function() {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });
  
  test('should link to contact information.', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function() {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });
  
  test('should list available rentals.', function (assert) {
  });
  
  test('should filter the list of rentals by city.', function (assert) {
  });
  
  test('should show details for a selected rental', function (assert) {
  });
});

