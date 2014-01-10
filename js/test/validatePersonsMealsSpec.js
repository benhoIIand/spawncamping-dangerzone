describe('Given a set of meals to validate', function() {

    var meals;

    describe('When passed an empty meal', function() {

        it('should return false', function() {
            expect(validatePersonsMeals([])).toBe('Please select at least 2 meals per person');
        });

    });

    describe('When passed a meal', function() {

        var meals;

        it('should return false when only passed one meal', function() {
            meal = [{
                name: 'Spaghetti',
                type: 'main'
            }];

            expect(validatePersonsMeals(meal)).toBe('Please select at least 2 meals per person');
        });

        it('should return false when passed no main meals', function() {
            meal = [{
                name: 'Soup',
                type: 'starter'
            }, {
                name: 'Sticky Toffee Pudding',
                type: 'dessert'
            }];

            expect(validatePersonsMeals(meal)).toBe('Please select a main course');
        });

        it('should return true when passed a main meal with another meal', function() {
            meal = [{
                name: 'Soup',
                type: 'starter'
            }, {
                name: 'Spaghetti',
                type: 'main'
            }];

            expect(validatePersonsMeals(meal)).toBe(true);

            meal = [{
                name: 'Spaghetti',
                type: 'main'
            }, {
                name: 'Sticky Toffee Pudding',
                type: 'dessert'
            }];

            expect(validatePersonsMeals(meal)).toBe(true);
        });

        it('should return false when the meal contains prawn cocktail and salmon fillet', function() {
            meal = [{
                name: 'Prawn cocktail',
                type: 'starter'
            }, {
                name: 'Salmon fillet',
                type: 'main'
            }];

            expect(validatePersonsMeals(meal)).toBe('You can\'t have prawn cocktail and salmon fillet in the same meal!');
        });

    });

});
