# Javascript Count

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/count.js** file(inside exports.asyncAnswers object).

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


## count:

Your task is to implement **count** function, that consumes following parameters:

    start
    end
    
This function should provided the **start** and **end** value wait the difference in **end** - **start** multiplied by 100 milliseconds.
Moreover, **count** should provide user with cancel function returned (as `cancel` field of new object). This cancel function should
cancel the timeout count to ensure that no more timeouts are set.
