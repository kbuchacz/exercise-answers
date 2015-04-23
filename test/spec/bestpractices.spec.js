var bestPracticesAnswers = exports.bestPracticesAnswers;

describe('best practices', function(){
    it('you should avoid global variables', function() {
        bestPracticesAnswers.globals();
        expect(window.myObject).toBeFalsy();
    });

    it('you should declare functions safely', function() {
        var val = bestPracticesAnswers.functions(true);
        expect(val).toBe('a');
    });

    it('you should use parseInt correctly', function() {
        expect(bestPracticesAnswers.parseInt('12')).toBe(12);
        expect(bestPracticesAnswers.parseInt('12px')).toBe(12);
        expect(bestPracticesAnswers.parseInt('0x12')).toBe(0);
    });

    it('you should understand strict comparison', function() {
        expect(bestPracticesAnswers.identity(1, '1')).toBe(false);
        expect(bestPracticesAnswers.identity(1, 1)).toBe(true);
        expect(bestPracticesAnswers.identity(0, false)).toBe(false);
    });
});
