import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

var component;
var mock = {
  attrs: {
    caption: 'Odd Future tofu DIY, Williamsburg sustainable tilde raw denim gastropub brunch fashion axe viral paleo.',
    'dismiss-text': 'Exit'
  }
};

moduleForComponent('media-previewer', 'Unit | Component | media previewer', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true,
  beforeEach(){
    component = this.subject(mock);
    this.render();
  },

  afterEach() {
    component = null;
  }
});

test('it renders', function(assert) {
  assert.expect(1);

  assert.equal(this.$().text().trim(), '');
});

test('it inits vars correctly', function(assert) {
  assert.expect(5);

  assert.equal(component.get('expanded'), false, 'should be instantiated as falsy');
  assert.equal(component.get('showCaption'), false, 'should be instantiated as falsy');
  assert.equal(component.get('toggleCaption'), undefined, 'should be instantiated as falsy');
  assert.equal(component.get('dismissText'), mock.attrs['dismiss-text'], 'should be instantiated with passed in attr.dismiss-text value');
  assert.equal(component.get('caption'), mock.attrs.caption, 'should be instantiated with passed in attr.caption value');
});

test('it sets the caption', function(assert) {
  assert.expect(1);

  assert.equal(component.get('caption'), mock.attrs.caption, 'caption var should be same as mock.attrs.caption');
});

test('it toggels the caption', function(assert) {
  assert.expect(4);

  assert.equal(component.get('toggleCaption'), undefined, '"toggleCaption" var should instantiated as undefined');

  component._toggleCaption();
  assert.equal(component.get('toggleCaption'), false, '"toggleCaption" var should be toggeled to false on first toggle');

  component._toggleCaption();
  assert.equal(component.get('toggleCaption'), true, '"toggleCaption" var should be toggeled to true on second toggle');

  component._toggleCaption();
  assert.equal(component.get('toggleCaption'), false, '"toggleCaption" var should be toggeled to false on third toggle');

});

test('it toggels the preview state', function(assert) {
  assert.expect(3);

  assert.notOk(component.get('expanded'), 'media previewer should not be open by default');

  Ember.run(function(){
    component.send('togglePreview');
  });
  assert.ok(component.get('expanded'), 'media previewer should be toggeled open');

  Ember.run(function(){
    component.send('togglePreview');
  });
  assert.notOk(component.get('expanded'), 'media previewer should be toggeled closed');

});

test('it toggels the caption show state', function(assert) {
  assert.expect(3);

  assert.notOk(component.get('showCaption'), 'caption should be deactivated by default');

  Ember.run(function(){
    component.set('expanded', true);
    component.set('caption', true);
    component.set('toggleCaption', true);
  });
  assert.ok(component.get('showCaption'), 'caption should be activated when computed properties are all true');

  Ember.run(function(){
    component.set('expanded', false);
    component.trigger('didReceiveAttrs');
  });
  assert.notOk(component.get('showCaption'), 'caption should be deactivated when one computed property is false');

});
