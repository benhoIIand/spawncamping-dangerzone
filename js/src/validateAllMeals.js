var validateAllMeals = function() {

    var meals = [].slice.call(arguments).reduce(function(a, b) {
        return a.concat(b);
    });

    var cheesecakes = meals.filter(function(obj) {
        return obj.name.toLowerCase() === 'chocolate cheesecake';
    });

    if(cheesecakes.length > 1) {
        return 'There is only 1 cheesecake up for grabs';
    }

    return true;

};
