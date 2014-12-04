# object-cleaner  [![Dependency Status](https://david-dm.org/dani/objCleaner.svg)](https://david-dm.org/dani/objCleaner)

A little function to clean dirty Objects, find any array with lenght one and and put his content without array.

## Getting Started
Install the module with: `npm install objCleaner`

```javascript
var objCleaner = new require('objCleaner');
objCleaner(Object_to_clean); // Object_cleaned
```


## Examples

```javascript
var test = [{
    property1: '',
    property2: ''
}];
var result = objCleaner(test);
var result = {
    property1: '',
    property2: ''
};
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Daniel Biedma Ramos
Licensed under the MIT license.
