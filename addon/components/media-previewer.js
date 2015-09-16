import Ember from 'ember';
import layout from 'ember-previewer/templates/media-previewer';

export default Ember.Component.extend(Ember.Evented, {
  /**
   * Simple class name to denote a image preview element.
   * Additional classes should be specified with the class attribute:
   *
   *   {{#shared/image-previewer classNames="some-class"}}
   *
   * @type {Array}
   */
  classNames: ['media-previewer'],
  classNameBindings: ['expanded'],
  layout: layout,

  /**
   * Default value for the image.
   * @type {Array}
   */
  expanded: false,
  showCaption: Ember.computed.and('expanded', 'caption', 'toggleCaption'),
  toggleCaption: undefined,
  dismissText: undefined,
  caption: undefined,

  /**
   * Sets values when the component receives data
   */
  didReceiveAttrs(){
    this._setDismissText();
    this._setCaption();
  },

  _setCaption(){
    this.set('caption', this.getAttr('caption'));
  },

  _toggleCaption(){
    let captionState = this.get('toggleCaption');
    if(captionState === undefined) {
      this.set('toggleCaption', false);
    } else {
      this.set('toggleCaption', !captionState);
    }
  },

  _setDismissText(){
    let dismissText = this.getAttr('dismiss-text');
    dismissText = dismissText ? dismissText : "Done";

    this.set('dismissText', dismissText);
  },

  _emitEvents(){
    let expanded = this.get('expanded');
    this.trigger('previewerActionFired');
    if(expanded){
      this.trigger('previewerOpened');
    } else {
      this.trigger('previewerClosed');
    }
  },

  click() {
    this._toggleCaption();
  },

  actions: {

    togglePreview(){
      this.set('expanded', !this.get('expanded'));
      this.get('_emitEvents').call(this);
    }

  }

});
