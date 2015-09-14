import Ember from 'ember';

export default Ember.Component.extend({
  /**
   * Simple class name to denote a image preview element.
   * Additional classes should be specified with the class attribute:
   *
   *   {{#shared/image-previewer classNames="some-class"}}
   *
   * @type {Array}
   */
  classNames: ['image-previewer'],

  /**
   * Default value for the image.
   * @type {Array}
   */
  image: undefined,

  /**
   * Sets values when the component receives data
   */
  didReceiveAttrs(){
    let image = this.getAttr('image');
    this.set('image', image);
  }

});
