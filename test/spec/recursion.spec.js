var recursionAnswers = exports.recursionAnswers;

describe('recursion', function() {
    var fileData = {
        dir : 'app',
        files : [
            'index.html',
            {
                dir : 'js',
                files: [
                    'main.js',
                    'app.js',
                    'misc.js',
                    {
                        dir : 'vendor',
                        files : [
                            'jquery.js',
                            'underscore.js'
                        ]
                    }
                ]
            },
            {
                dir : 'css',
                files : [
                    'reset.css',
                    'main.css'
                ]
            }
        ]
    };

    it('you should be able to return a list of files from the data', function() {
        var result = recursionAnswers.listFiles(fileData);
        expect(result.length).toEqual(8);
        expect(result.indexOf('index.html') > -1).toBeTruthy();
        expect(result.indexOf('main.js') > -1).toBeTruthy();
        expect(result.indexOf('underscore.js') > -1).toBeTruthy();
    });

    it('you should be able to return a list of files in a subdir', function() {
        var result = recursionAnswers.listFiles(fileData, 'js');
        expect(result.length).toEqual(5);
        expect(result.indexOf('main.js') > -1).toBeTruthy();
        expect(result.indexOf('underscore.js') > -1).toBeTruthy();
    });
});

describe('permutation', function() {
    var arr = [ 1, 2, 3, 4 ];
    var answer = [
        [1, 2, 3, 4],
        [1, 2, 4, 3],
        [1, 3, 2, 4],
        [1, 3, 4, 2],
        [1, 4, 2, 3],
        [1, 4, 3, 2],
        [2, 1, 3, 4],
        [2, 1, 4, 3],
        [2, 3, 1, 4],
        [2, 3, 4, 1],
        [2, 4, 1, 3],
        [2, 4, 3, 1],
        [3, 1, 2, 4],
        [3, 1, 4, 2],
        [3, 2, 1, 4],
        [3, 2, 4, 1],
        [3, 4, 1, 2],
        [3, 4, 2, 1],
        [4, 1, 2, 3],
        [4, 1, 3, 2],
        [4, 2, 1, 3],
        [4, 2, 3, 1],
        [4, 3, 1, 2],
        [4, 3, 2, 1]
    ];

    it('you should be able to return the permutations of an array', function() {
        var result = recursionAnswers.permute(arr);
        var resultStrings = _.map(result, function(r) { return r.join(''); });

        expect(result.length).toEqual(answer.length);

        _.each(answer, function(a) {
            expect(resultStrings.indexOf(a.join('')) > -1).toBeTruthy();
        });
    });

    it('you should be able to return the nth number in a fibonacci sequence', function() {
        expect(recursionAnswers.fibonacci(2)).toEqual(1);
        expect(recursionAnswers.fibonacci(6)).toEqual(8);
    });

    it('you should be able to return the set of all valid combinations of n pairs of parentheses.', function() {
        var expected = [ '((()))', '(()())', '(())()', '()(())', '()()()'];
        var result = recursionAnswers.validParentheses(3);

        expect(result.length).toEqual(5);
        _.each(expected, function(c) {
            expect(result).toContain(c);
        });
    });
});
