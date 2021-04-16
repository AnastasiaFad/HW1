var { dayOfWeek, sumAB, wordNum } = require('./functions.js');
// describe('dayOfWeek', function () {
//     it(" dayOfWeek should be defined ", function () {
//     expect(dayOfWeek).toBeDefined();
//     });
//     it(" dayOfWeek should be function", function () {
//         expect(typeof dayOfWeek).toBe("function");
//     });
//     it(" dayOfWeek should be without arguments", function () {
//         expect(getStringDayNumber()).toBe(false);
//     });
//     it("should be  < 1", function () {
//         expect(dayOfWeek(0)).toBe("wrong input, in week only 7 days");
//     });
//     it("should be  > 7", function () {
//         expect(dayOfWeek(8)).toBe("wrong input, in week only 7 days");
//     });
//     it("should be  1", function () {
//         expect(dayOfWeek(1)).toBe("Sunday");
//     });
//     it("should be  2", function () {
//         expect(dayOfWeek(2)).toBe("Monday");
//     });
//     it("should be  3", function () {
//         expect(dayOfWeek(3)).toBe("Tuesday");
//     });
//     it("should be  4", function () {
//         expect(dayOfWeek(4)).toBe("Wednesday");
//     });
//     it("should be  5", function () {
//         expect(dayOfWeek(5)).toBe("Thursday");
//     });
//     it("should be  6", function () {
//         expect(dayOfWeek(6)).toBe("Friday");
//     });
//     it("should be  7", function () {
//         expect(dayOfWeek(7)).toBe("Saturday");
//     });
// })

describe('sumAB', function () {
    it("sumAB should be defined ", function () {
        expect(sumAB).toBeDefined();
    });
    it("sumAB should be function", function () {
        expect(typeof sumAB).toBe("function");
    });
    it("sumAB расстояние от точек координат", function () {
        expect(sumAB(-1, 3, 2, 9)).toBe(8.06225774829855);
    });
    it("sumAB should be function", function () {
        expect(sumAB(-1, 3, 2, 9)).not.toBe(8.062257);
    });
});