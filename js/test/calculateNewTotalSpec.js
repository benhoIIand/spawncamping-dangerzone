describe('Given an unknown number of meals', function() {

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
        name: 'Ice cream',
        price: '£5.25',
        type: 'dessert'
    }];

    describe('When I calculate the total of my meals', function() {

        it('should return the correct amount with one meal', function() {
            meal1 = [{
                name: 'Soup',
                price: '£5.40',
                type: 'starter'
            }, {
                name: 'Steak',
                price: '£15.00',
                type: 'main'
            }];

            expect(calculateNewTotal(meal1)).toEqual('£20.40');
        });

        it('should return the correct amount with two meals', function() {
            expect(calculateNewTotal(meal1, meal2)).toEqual('£39.05');
        });

        it('should return the correct amount with three meals', function() {
            expect(calculateNewTotal(meal1, meal2, meal1)).toEqual('£59.45');
        });

    });

});
