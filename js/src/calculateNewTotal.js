var convertToPennies = function(str) {
    return str.replace('£', '') * 100;
};

var convertToPounds = function(total) {
    return '£' + (total / 100).toFixed(2);
};

var calculateNewTotal = function() {

    var meals = [].slice.call(arguments).reduce(function(a, b) {
        return a.concat(b);
    });

    var total = meals.reduce(function(a, b) {
        return a + convertToPennies(b.price);
    }, 0);

    return convertToPounds(total);

};
