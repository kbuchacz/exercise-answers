var countAnswers = exports.countAnswers;

describe('counter', function () {
    var nums;
    var origConsoleLog;

    beforeEach(function () {
        nums = [];
        if (typeof console === 'undefined') {
            console = {
                log: undefined
            };
        }
        origConsoleLog = console.log;
        console.log = function (val) {
            nums.push(val);
        };
        this.clock = sinon.useFakeTimers();
    });

    afterEach(function () {
        console.log = origConsoleLog;
        this.clock.restore();
    });

    it('should count from start number to end number, one per 1/10th of a second', function () {
        countAnswers.count(1, 5);
        for (var i = 1; i <= 5; i++) {
            expect(nums.length).toBe(i);

            this.clock.tick(100);
        }
        expect(nums.length).toBe(5);
        expect(nums[0]).toBe(1);
        expect(nums[4]).toBe(5);
    });

    it('should provide a method to cancel the counting', function () {
        var counter = countAnswers.count(1, 5);
        counter.cancel();
        this.clock.tick(550);
        expect(nums.length < 5).toBeTruthy();
    });
});
