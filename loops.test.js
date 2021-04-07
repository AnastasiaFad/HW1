var { sumChetny, isPrime, getPodbor, getBinary, isFactorial, Sum, Mirror } = require('./loops.js');

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

describe('isPrime', function () {
    it('isPrime is defined', function () {
        expect(isPrime()).toBeDefined();
    })
    it('')
})