# Javascript BestPractices

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/bestpractices.js** file(inside exports.asyncAnswers object).

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


## globals:

Implement **globals** function containing in it's closure new object with name property of 'Jory'. This function should return this object.

## functions:

Implement **functions** that consumes one parameter:

    flag

**functions** should include in it's closure two functions that should have their own closures and return string value from within them. 
Depending on the **flag** if it's truthy it should return value from first function, in other case from the other one. First function
should return `a` string value and second `b`.

## parseInt:

The **parseInt** function is expected to parse a String to Number. Make sure that the result is decimal and ignore all incorrect Strings.

## identity:

**identity** function with two parameters:

    item1
    item2

This function is expected to return result of strict comparison between two items.

