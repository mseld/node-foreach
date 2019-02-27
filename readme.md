
# foreach

Iterate over array - control flow sync

## Installation

`npm install node-foreach`

## API

### foreach(item, onRead, onComplete)

```js
const foreach = require('node-foreach');

function onRead(item, index, next) {
    // item === 1, 2, 3
    // index === 0, 1, 2
    
    // move to next item
    next() 
}

function onComplete(err) {
    if (err) {
        console.log(err.message);
    }
}

foreach([1,2,3], onRead, onComplete);
```