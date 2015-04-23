# Javascript Recursion

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/recursion.js** file(inside exports.recursionAnswers object).

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


## listFiles:

Write **listFiles** function that find files in directory recursively:
 
    data
    dirName
    
This function should search through **data** property that shall follow this pattern:

    { 
      dir: <name>,
      files: [ '<file name with extension>',
               { dir: <name>, ... }
             ]
      ]
    }
    
Of course as the example show, directories can contain other directories or files, but they can also be empty.
Moreover, **dirName** should specify file extensions that the function is supposed to return, it can also
be empty. The return value should be an array of strings of files in **data** directory.

## permute:

This function consume one parameter:

    arr
    
The return value of this function should be permutation of **arr** using recursion.

## fibonacci:

The **fibonacci** function consume:

    num
    
The return value of this function should be nth number of fibonacci sequence. Function should also make use of
recursion.

## validParentheses:

Implement **validParentheses** function consuming:

    num
    
The **num** parameter is a number of parentheses bracket pairs to generate array of combinations for.
For example if you pass **num = 2** the function should generate following array:

    ['()()', '(())']

Following this simple example, **validParentheses** should generate an array of possible combinations and return it.
