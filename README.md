# Javascript Async

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/async.js** file(inside exports.asyncAnswers object).

#### Before you start...

Resolve provided dependencies by typing in console:

    npm install
    bower install

To test your solution locally, type:

    npm start
    
or

    npm test

JavaScript basic functions:

    http://www.w3schools.com/jsref/
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

For this exercise, you are supposed to use Q promise library already included in the app, 
you can find the documentation in the following address

    https://github.com/kriskowal/q


## async:

Implement **async** function with following parameter:

    value

The **value** parameter should be passed as a resolve value to the promise. Function should return that promise, but be resolved after a small timeout.


## httpGet:

Implement **httpGet** function:

    url

This function should send GET request to this certain **url** using `XMLHttpRequest`. Function is expected to return new promise,
moreover it should be resolved after the data is fetched - with the response data.

## manipulateRemoteData:

**manipulateRemoteData** integrate previous tasks and also accepts one parameter:

    url

This function should make use of **httpGet** to retrieve and manipulate data from server. When the data is retrieved, you should create
an array of people.name strings, sorted by default and return it.
