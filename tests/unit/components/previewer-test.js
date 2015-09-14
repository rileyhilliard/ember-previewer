import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('previewer', 'Unit | Component | previewer', {
  unit: true
});

test('component builds vars correctly', function(assert) {
  let subject = this.subject();

  assert.equal(subject.get('image'), undefined, 'Image should init "undefined"');
});
