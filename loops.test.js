var { sumChetny, isPrime, getPodbor, getBinary, isFactorial, Sum, Mirror } = require('./loops.js');
//test 1
describe('sumChetny', function () {
    it('Summ_chetny is defined', function () {
        expect(sumChetny()).toBeDefined();
    })
    it('Summ_chetny содержит массив элемент с ожидаемой структурой:', function () {
        expect(sumChetny(100)).toContainEqual(2450, 49);
    })
    it('Соответствие значений полей', function () {
        expect(sumChetny(100)).toContain(2450, 49);
    })
    it('НЕ Соответствие значений полей', function () {
        expect(sumChetny(100)).not.toContain(2449, 49);
    })
})
//test 2
describe('isPrime', function () {
    it('isPrime is defined', function () {
        expect(isPrime()).toBeDefined();
    })
    it('отрицательное или дробное', function () {
        expect(isPrime(0)).toBe("Некорректно");
    })
    it('Проверка на корректность', function () {
        expect(isPrime(11)).not.toBe("Некорректно");
    })
    it('Число простое = истина', function () {
        expect(isPrime(11)).toBe(true);
    })
    it('Число простое = не ложь', function () {
        expect(isPrime(11)).not.toBe(false);
    })
    it('Число не простое = ложь', function () {
        expect(isPrime(9)).toBe(false);
    })
    it('Число не простое = не истина', function () {
        expect(isPrime(9)).not.toBe(true);
    })
})
//test 3.1
describe('getPodbor', function () {
    it('getPodbor is defined', function () {
        expect(getPodbor).toBeDefined();
    })
    it('Корень из 9 = 3', function () {
        expect(getPodbor(9)).toBe(3);
    })
    it('Корень из 9  НЕ = 3', function () {
        expect(getPodbor(9)).not.toBe(2);
    })
    it('Корень из 10 до целых = 3', function () {
        expect(getPodbor(10)).toBe(3);
    })
    it('Корень из 10 до целых  НЕ = 4', function () {
        expect(getPodbor(10)).not.toBe(4);
    })
})
// test 4
describe('isFactorial', function () {
    it('isFactorial is defined', function () {
        expect(isFactorial).toBeDefined();
    })
    it('Factorial is ', function () {
        expect(isFactorial(4)).toBe(24);
    })
    it('Factorial is ', function () {
        expect(isFactorial(3)).not.toBe(9);
    })
})
// test 5
describe('Sum', function () {
    it('Sum is defined', function () {
        expect(Sum).toBeDefined();
    })
    it('Sum "954" = 18', function () {
        expect(Sum('954')).toBe(18);
    })
    it('Sum "954" Not= 20', function () {
        expect(Sum('954')).not.toBe(20);
    })
})
//test 6
describe('Mirror', function () {
    it('Mirror is defined', function () {
        expect(Mirror).toBeDefined();
    })
    it('123 Mirror 321', function () {
        expect(Mirror(123)).toBe(321);
    })
    it(' 123 not Mirror 231', function () {
        expect(Mirror(123)).not.toBe(231);
    })
})
