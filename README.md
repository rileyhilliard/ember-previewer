# Ember-previewer

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

## Using the Module
Handlebard block, components or HTML passed into the block will be yielded as the media item to be used for the previewer/

#### Explained:
```
{{#media-previewer
  dismiss-text="*text for the preview dismiss button*"
  caption="*text for the media's caption. Don't include if you have no caption to show*"
}}
  <!-- Media element to use for the previewer -->
  <img src="http://i.giphy.com/pCO5tKdP22RC8.gif" alt="" />
{{/media-previewer}}
```

#### Working Demo Code:
```
{{#media-previewer
  dismiss-text="Done"
  caption="Odd Future tofu DIY, Williamsburg sustainable tilde raw denim gastropub brunch fashion axe viral paleo."
}}
  <img src="http://i.giphy.com/pCO5tKdP22RC8.gif" alt="" />
{{/media-previewer}}
```
