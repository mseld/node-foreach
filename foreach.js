module.exports = function foreach(array, callback, complete) {

    callback = (typeof callback === 'function') ? callback : function() {};
    complete = (typeof complete === 'function') ? complete : function() {};

    var index = 0;

    var done = function(err) { return (err) ? complete(err) : complete(); };

    if (array == null || array == undefined) return done(new Error('Array is null or undefined'));

    (function next() {
        if (array.length == 0) return done(new Error('Array is empty'));
        if (index == array.length) return done();
        var item = array[index];
        index = index + 1;
        callback(item, index, next);
    })();
}