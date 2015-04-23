exports = (typeof window === 'undefined') ? global : window;

exports.bestPracticesAnswers = {

    globals : function() {
        var myObject = {
            name : 'Jory'
        };

        return myObject;
    },

    functions : function(flag) {
        var getValue;

        if (flag) {
            getValue = function() { return "a"; }
        } else {
            getValue = function() { return "b"; }
        }

        return getValue();
    },

    parseInt : function(num) {
        return parseInt(num, 10);
    },

    identity : function(val1, val2) {
        return val1 === val2;
    }
};
