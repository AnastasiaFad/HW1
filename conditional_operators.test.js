var { conditionalOperators, coordinates, Sum_3_Positive, Max, multip, sum, rating} = require('./conditional_operators.js');

describe('conditionalOperators', function () {
    it('conditionalOperators is defined', function () {
        expect(conditionalOperators()).toBeDefined();
    })
    it('Проверка "а" на не четность', function () {
        expect(conditionalOperators(1, 2)).toBe(3);
    })
    it('Проверка "а" на не четность (not)', function () {
        expect(conditionalOperators(1, 2)).not.toBe(2);
    })
    it('Проверка "а" на четность', function () {
        expect(conditionalOperators(4, 2)).toBe(8);
    })
    it('Проверка "а" на четность (not)', function () {
        expect(conditionalOperators(4, 2)).not.toBe(6);
    })
})

describe('coordinates', function () {
    it('coordinates is defined', function () {
        expect(coordinates).toBeDefined();
    })
    test.each([
        [1, 6, '1 quarter'],
        [1, -6, '1 quarter'],
        [-1, -6, '1 quarter'],
        [0, 7, '1 quarter'],
    ])('coordinates x: %i with y: %i not => %s', (arg1, arg2, result) => {
        expect(rating(arg1, arg2)).not.toBe(result);
    });
    test.each([
        [-1, 6, '2 quarter'],
        [1, -6, '2 quarter'],
        [-1, -6, '2 quarter'],
        [0, 7, '2 quarter'],
    ])('coordinates x: %i with y: %i not => %s', (arg1, arg2, result) => {
        expect(rating(arg1, arg2)).not.toBe(result);
    });
    test.each([
        [-1, 6, '3 quarter'],
        [1, 6, '3 quarter'],
        [-1, -6, '3 quarter'],
        [0, 7, '3 quarter'],
    ])('coordinates x: %i with y: %i not => %s', (arg1, arg2, result) => {
        expect(rating(arg1, arg2)).not.toBe(result);
    });
    test.each([
        [-1, 6, '4 quarter'],
        [1, 6, '4 quarter'],
        [1, -6, '4 quarter'],
        [0, 7, '4 quarter'],
    ])('coordinates x: %i with y: %i not => %s', (arg1, arg2, result) => {
        expect(rating(arg1, arg2)).not.toBe(result);
    });
    test.each([
        [-1, 6, 'no quarter'],
        [1, 6, 'no quarter'],
        [1, -6, 'no quarter'],
        [-1, -6, 'no quarter'],
    ])('coordinates x: %i with y: %i not => %s', (arg1, arg2, result) => {
        expect(rating(arg1, arg2)).not.toBe(result);
    });
    it('x < 0 && y > 0', function () {
        expect(coordinates(-1, 6)).toBe('1 quarter');
    })
    it('x > 0 && y > 0', function () {
        expect(coordinates(1, 6)).toBe('2 quarter');
    })
    it('x > 0 && y < 0', function () {
        expect(coordinates(1, -6)).toBe('3 quarter');
    })
    it('x < 0 && y < 0', function () {
        expect(coordinates(-1, -6)).toBe('4 quarter');
    })
    it('x = 0 || y = 0', function () {
        expect(coordinates(0, 7)).toBe('no quarter');
    })
})

describe('Sum_3_Positive', function () {
    it('Sum_3_Positive is defined', function () {
        expect(Sum_3_Positive).toBeDefined();
    })
    it('sum NOT only positive', function () {
        expect(Sum_3_Positive(1, -5, 0)).toBe('pechal');
    })
    it('not sum only positive', function () {
        expect(Sum_3_Positive(1, -5, 0)).not.toBe(-4);
    })
    it('sum only positive', function () {
        expect(Sum_3_Positive(4, 0, 8)).toBe(12);
    })
    it('not sum NOT only positive', function () {
        expect(Sum_3_Positive(4, 0, 8)).not.toBe('pechal');
    })
})

describe('Max', function () {
    it('Max is defined', function () {
        expect(Max).toBeDefined();
    })
    it('Max: (multip >= sum) => multip + 3', function () {
        expect(Max(-4, -8)).toBe(-1);
    })
    it('Max: (multip >= sum) => not sum + 3', function () {
        expect(Max(-4, -8)).not.toBe(-5);
    })
    it('Max: (multip <= sum) => sum + 3', function () {
        expect(Max(5, 8)).toBe(11);
    })
    it('Max: (multip <= sum) => not multip + 3', function () {
        expect(Max(5, 8)).not.toBe(8);
    })
    it('sum works', function () {
        expect(sum(4, 9, -8)).toBe(5);
    })
    it('sum != multip', function () {
        expect(sum(4, 9, -8)).not.toBe(-288);
    })
    it('multip works', function () {
        expect(multip(3, 2, 1)).toBe(6);
    })
    it('multip != sum', function () {
        expect(multip(3, 2, 2)).not.toBe(7);
    })
})

describe('rating', function () {
    it('rating is defined', function () {
        expect(rating).toBeDefined();
    })
    test.each([
        [19, 'rating: F'],
        [23, 'rating: E'],
        [56, 'rating: D'],
        [61, 'rating: C'],
        [89, 'rating: B'],
        [98, 'rating: A'],
    ])('testing %i with expected result %s', (arg, result) => {
        expect(rating(arg)).toBe(result);
    });
    test.each([
        [-1, 'rating: F'],
        [20, 'rating: F'],
        [56, 'rating: F'],
        [61, 'rating: F'],
        [89, 'rating: F'],
        [98, 'rating: F'],
    ])('testing %i is not rating: %s', (arg, result) => {
        expect(rating(arg)).not.toBe(result);
    });
    test.each([
        [-1, 'rating: E'],
        [56, 'rating: E'],
        [61, 'rating: E'],
        [89, 'rating: E'],
        [101, 'rating: E'],
    ])('testing %i is not rating: %s', (arg, result) => {
        expect(rating(arg)).not.toBe(result);
    });
    test.each([
        [-1, 'rating: D'],
        [17, 'rating: D'],
        [61, 'rating: D'],
        [89, 'rating: D'],
        [101, 'rating: D'],
    ])('testing %i is not rating: %s', (arg, result) => {
        expect(rating(arg)).not.toBe(result);
    });
    test.each([
        [-1, 'rating: C'],
        [17, 'rating: C'],
        [39, 'rating: C'],
        [89, 'rating: C'],
        [101, 'rating: C'],
    ])('testing %i is not rating: %s', (arg, result) => {
        expect(rating(arg)).not.toBe(result);
    });
    test.each([
        [-1, 'rating: C'],
        [17, 'rating: C'],
        [39, 'rating: C'],
        [89, 'rating: C'],
        [101, 'rating: C'],
    ])('testing %i is not rating: %s', (arg, result) => {
        expect(rating(arg)).not.toBe(result);
    });
    test.each([
        [-1, 'rating: B'],
        [17, 'rating: B'],
        [39, 'rating: B'],
        [73, 'rating: B'],
        [101, 'rating: B'],
    ])('testing %i is not rating: %s', (arg, result) => {
        expect(rating(arg)).not.toBe(result);
    });
    test.each([
        [-1, 'rating: A'],
        [17, 'rating: A'],
        [39, 'rating: A'],
        [73, 'rating: A'],
        [88, 'rating: A'],
    ])('testing %i is not rating: %s', (arg, result) => {
        expect(rating(arg)).not.toBe(result);
    });
})
