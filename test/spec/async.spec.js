var asyncAnswers = exports.asyncAnswers;

describe('async behavior', function ()
{
    it('you should understand how to use promises to handle asynchronicity', function (done)
    {
        var flag = false;
        var finished = 0;
        var total = 2;

        function finish(done)
        {
            if (++finished === total) {
                done();
            }
        }

        asyncAnswers.async(true).then(function (result)
        {
            flag = result;
            expect(flag).toBe(true);
            finish(done);
        });

        asyncAnswers.async('success').then(function (result)
        {
            flag = result;
            expect(flag).toBe('success');
            finish(done);
        });

        expect(flag).toBe(false);
    });

    it('you should be able to retrieve data from server', function (done)
    {
        var url = '/test/data/testData.json';

        asyncAnswers.httpGet(url).then(function (result) {
            expect(result.join(' ')).toBe('Adam Alex Matt Paul Rebecca');
        });
    });

    it('you should be able to retrieve data from the server and return a sorted array of names', function (done)
    {
        var url = '/test/data/testData.json';

        asyncAnswers.manipulateRemoteData(url).then(function (result)
        {
            expect(result).to.have.length(5);
            expect(result.join(' ')).toBe('Adam Alex Matt Paul Rebecca');
            done();
        });
    });
});
