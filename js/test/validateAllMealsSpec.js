describe('Given a set of meals', function() {

    var meal1 = [{
        name: 'Soup',
        price: '£5.40',
        type: 'starter'
    }, {
        name: 'Steak',
        price: '£15.00',
        type: 'main'
    }];

    var meal2 = [{
        name: 'Meatballs',
        price: '£13.40',
        type: 'main'
    }, {
        name: 'Chocolate cheesecake',
        price: '£5.25',
        type: 'dessert'
    }];

    var meal3 = [{
        name: 'Soup',
        price: '£5.40',
        type: 'starter'
    }, {
        name: 'Chocolate cheesecake',
        price: '£5.25',
        type: 'dessert'
    }];

    describe('When validating them', function() {

        it('should return false if more than 1 cheesecake is selected', function() {
            expect(validateAllMeals(meal1, meal2, meal3)).toBe('There is only 1 cheesecake up for grabs');
        });

    });

});
