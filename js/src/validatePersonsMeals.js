/**
 * Function to validate a selections of meal from a person
 *
 * @param  {array} meals [The array of meals select by a person]
 * @return {bool}        [Whether the person's meals are a valid selection]
 */
var validatePersonsMeals = function(meal) {

    if(meal.length < 2) {
        return 'Please select at least 2 meals per person';
    }

    var numberOfMains = meal.filter(function(obj) {
        return obj.type.toLowerCase() === 'main';
    });

    var numberOfPrawnCocktail = meal.filter(function(obj) {
        return obj.name.toLowerCase() === 'prawn cocktail';
    });

    var numberOfSalmonFillet = meal.filter(function(obj) {
        return obj.name.toLowerCase() === 'salmon fillet';
    });

    if(numberOfMains < 1) {
        return 'Please select a main course';
    }

    if(numberOfPrawnCocktail.length > 0 && numberOfSalmonFillet.length > 0) {
        return 'You can\'t have prawn cocktail and salmon fillet in the same meal!';
    }

    return true;

};
