# object-cleaner  [![Dependency Status](https://david-dm.org/danibram/object-cleaner.svg)](https://david-dm.org/danibram/object-cleaner)

A little function to clean dirty Objects, find any array with lenght one and and put his content without array.

## Getting Started
Install the module with: `npm install object-cleaner`

```javascript
var objCleaner = new require('object-cleaner');
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

## License
Copyright (c) 2014 Daniel Biedma Ramos
Licensed under the MIT license.
