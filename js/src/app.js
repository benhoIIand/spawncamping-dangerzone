$(function() {

    var $total   = $('.total');
    var $error   = $('.error-container');
    var $people  = $('.people');
    var $person1 = $('.person1');
    var $person2 = $('.person2');

    var formatMeal = function(el) {
        var $el   = $(el);
        var $meal = $el.parents('.meal-row').find('.meal');

        return {
            name: $meal.data('name'),
            price: $meal.data('price'),
            type: $el.data('type')
        };
    };

    var error = {
        show: function(msg) {
            $error.html(msg).show();
        },
        clear: function() {
            $error.empty().hide();
        }
    };

    var validateSelection = function() {

        error.clear();
        $total.html('£0');

        var person1Meals = $person1.filter(':checked');
        var person2Meals = $person2.filter(':checked');

        person1Meals = $.map(person1Meals, formatMeal);
        person2Meals = $.map(person2Meals, formatMeal);

        var person1Validation  = validatePersonsMeals(person1Meals);
        var person2Validation  = validatePersonsMeals(person2Meals);
        var allMealsValidation = validateAllMeals(person1Meals, person2Meals);

        if(person1Validation !== true) {
            error.show(person1Validation);
            return false;
        }

        if(person2Validation !== true) {
            error.show(person2Validation);
            return false;
        }

        if(allMealsValidation !== true) {
            error.show(allMealsValidation);
            return false;
        }

        $total.html(calculateNewTotal(person1Meals, person2Meals));
    };

    $people.find('input[type="radio"]').on('change', validateSelection);

});
