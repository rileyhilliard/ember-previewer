import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('media-previewer', 'Integration | Component | media previewer', {
  integration: true,
  beforeEach() {
    this.render(hbs`{{#media-previewer
                      dismiss-text="Exit"
                      caption="Odd Future tofu DIY, Williamsburg sustainable tilde raw denim gastropub brunch fashion axe viral paleo."
                    }}
                      <img src="http://i.giphy.com/pCO5tKdP22RC8.gif" alt="" />
                    {{/media-previewer}}`);
  }
});

test('it renders', function(assert) {
  assert.expect(3);

  // Template block usage:
  // NOTE: This is getting it's rendered template from the beforeEach() function
  assert.ok(this.$('img').length > 0, '<img /> tag is yielded in .media-wrapper');

  this.render(hbs`{{media-previewer}}`);
  assert.ok(this.$('.media-previewer').length, 'renders the media previewer');
  assert.notOk(this.$('img').length > 0, '<img /> tag is not yielded in .media-wrapper');
});

test('it toggels previewer state', function(assert) {
  assert.expect(8);

  assert.notOk(this.$('.caption').length > 0, '.caption should not be rendered');
  assert.notOk(this.$('.media-previewer').hasClass('expanded'), '.media-previewer should not have .expanded class when rendered');

  this.$('button').click();

  assert.ok(this.$('.caption').length > 0, '.caption should be rendered');
  assert.ok(this.$('.caption').hasClass('hide'), '.caption should have class .hide present on default open state');
  assert.ok(this.$('.media-previewer').hasClass('expanded'), '.media-previewer should have .expanded class when media item is clicked on');

  this.$('.media-previewer').click();

  assert.ok(this.$('.caption').hasClass('show'), '.caption should should be shown when clicked on in preview state');

  this.$('button.dismiss-previewer').click();
  assert.notOk(this.$('.caption').length > 0, '.caption should not be rendered when previewer has been dismissed');
  assert.notOk(this.$('.media-previewer').hasClass('expanded'), '.media-previewer should not have .expanded class after previewer has been dismissed');
});

test('it renders passed in attributes', function(assert) {
  assert.expect(2);

  this.$('button').click();
  this.$('.media-previewer').click();

  assert.equal(this.$('.caption').text().trim(), 'Odd Future tofu DIY, Williamsburg sustainable tilde raw denim gastropub brunch fashion axe viral paleo.', '.caption text should be passed in by attribute');
  assert.equal(this.$('button.dismiss-previewer').text().trim(), 'Exit', '.dismiss-previewer text should be passed in by attribute');
});
