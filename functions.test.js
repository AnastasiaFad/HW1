var { dayOfWeek, sumAB, wordNum } = require('./functions.js');
describe('dayOfWeek', function () {
    it('dayOfWeek is defined', function () {
        expect(dayOfWeek).toBeDefined();
    })
    // test.each([
    //     [1, 'Monday'],
    //     [2, 'Tuesday'],
    //     [3, 'Wednesday'],
    //     [4, 'Thursday'],
    //     [5, 'Friday'],
    //     [6, 'Saturday'],
    //     [7, 'Sunday'],
    //     [9, 'Такого дня не существует...']
    // ])('testing %i with expected result %s', (arg, result) => {
    //     expect(rating(arg)).toBe(result);
    // });
    it('1 is "Monday"', function () {
        expect(rating(1)).toBe('Monday');
    })
})
