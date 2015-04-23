exports = (typeof window === 'undefined') ? global : window;


exports.asyncAnswers = {
    async: function(value) {
        var dfd = Q.defer();
        setTimeout(function() {
            dfd.resolve(value);
        }, 10);
        return dfd.promise;
    },
    httpGet: function (url)
    {
        var xmlHttp = new XMLHttpRequest(), dfd = Q.defer();
        xmlHttp.open( "GET", url, false );
        xmlHttp.onreadystatechange = function(data) {
            if ( xmlHttp.readyState === 4 ) {
                dfd.resolve(data);
            }
        };
        xmlHttp.send( null );
        return dfd.promise;
    },
    manipulateRemoteData : function(url) {
        var dfd = Q.defer(), i = 0, people = [];

        this.httpGet(url).then(function(resp) {
            for (; i < resp.people.length; i++) {
                people.push(resp.people.name);
            }
            dfd.resolve(people.sort());
        });

        return dfd.promise;
    }
};
