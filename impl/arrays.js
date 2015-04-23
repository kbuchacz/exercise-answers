exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        for (var i = 0, k = 0; i < arr.length; i++) {
            k += arr[i];
        }
        return k;
    },

    remove : function(arr, item) {
        var nArr = [], i = 0;
        
        for (; i < arr.length; i++) {
            if (item != arr[i]) {
                nArr.push(arr[i]);
            }
        }
        return nArr;
    },

    removeWithoutCopy : function(arr, item) {
        var i = 0, length = arr.length;

        for (; i < length; i++) {
            if (item != arr[0]) {
                arr.push(arr[0]);
            }
            arr.shift();
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        for (var i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);
        }
        return arr1;
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0 , item);
        return arr;
    },

    count : function(arr, item) {
        for (var i = 0, j = 0; i < arr.length; i++) {
            if (item === arr[i]) {
                j++;
            }
        }
        return j;
    },

    duplicates : function(arr) {
        var dIndexes = {}, i, length = arr.length;
        for (i = 0; i < length; i++) {
            dIndexes[arr[i]] = dIndexes[arr[i]] + 1 || 1;
        }
        for (var j in dIndexes) {
            if (1 < dIndexes[j]) {
                arr.push(Number(j));
            }
        }
        arr.splice(0, length);
        return arr;
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = Math.pow(arr[i], 2);
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === target) {
                ret.push(i);
            }
        }

        return ret;
    }
};
