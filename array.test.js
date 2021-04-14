var { Min, Revers, Revers_Ops, countNechetny, bubbleSort, selectSort, insertionSort } = require('./array.js');
describe('Min', function () {
    it('Min is defined', function () {
        expect(Min).toBeDefined();
    })
    it('Min is ...', function () {
        expect(Min([2, 4, 0, 1, 8, 9, -4])).toBe('Min: -4, index min: 6, Max: 9, index max: 5, Сумма нечетных индексов: 14');
    })
    it('Min is not...', function () {
        expect(Min([2, 4, 0, 1, 8, 9, -4])).not.toBe('Min: 0, index min: 6, Max: 9, index max: 5, Сумма нечетных индексов: 14');
    })
})
describe('Revers', function () {
    it('Revers is defined', function () {
        expect(Revers).toBeDefined();
    })
    it('Revers is true', function () {
        expect(Revers([2, 4, 0, 1, 8, 9])).toStrictEqual([ 9, 8, 1, 0, 4, 2 ]);//может это вообще не верно, но походу при реверсе это теперь строки 
    })
    it('Revers is false', function () {
        expect(Revers([2, 4, 0, 1, 8, 9])).not.toStrictEqual([ 9, 8, 1, 4, 0, 2 ]);
    })
})
describe('countNechetny', function () {
    it('countNechetny is defined', function () {
        expect(countNechetny).toBeDefined();
    })
    it('countNechetny is true', function () {
        expect(countNechetny([2, 4, 0, 1, 8, 9, 7])).toBe(3);
    })
    it('countNechetny is false', function () {
        expect(countNechetny([2, 4, 0, 1, 8, 9, 7])).not.toBe(4);
    })
})
describe('Revers_Ops', function () {
    it('Revers_Ops is defined', function () {
        expect(Revers_Ops).toBeDefined();
    })
    it('Revers_Ops is true', function () {
        expect(Revers_Ops([2, 4, 0, 1, 8, 9])).toStrictEqual([ 1, 8, 9, 2, 4, 0 ]);
    })
    it('Revers_Ops is false', function () {
        expect(Revers_Ops([2, 4, 0, 1, 8, 9])).not.toStrictEqual([ 0, 8, 9, 2, 4, 1 ]);
    })
})
describe('bubbleSort', function () {
    it('bubbleSort is defined', function () {
        expect(bubbleSort).toBeDefined();
    })
    it('bubbleSort is true', function () {
        expect(bubbleSort([2, 4, 0, 1, 8, 9])).toStrictEqual([ 0, 1, 2, 4, 8, 9 ]);
    })
    it('bubbleSort is false', function () {
        expect(bubbleSort([2, 4, 0, 1, 8, 9])).not.toStrictEqual([ 0, 1, 2, 4, 9, 8 ]);
    })
})
describe('selectSort', function () {
    it('selectSort is defined', function () {
        expect(selectSort).toBeDefined();
    })
    it('selectSort is true', function () {
        expect(selectSort([2, 4, 0, 1, 8, 9])).toStrictEqual([ 0, 1, 2, 4, 8, 9 ]);
    })
    it('selectSort is false', function () {
        expect(selectSort([2, 4, 0, 1, 8, 9])).not.toStrictEqual([ 0, 1, 2, 4, 9, 8 ]);
    })
})
describe('insertionSort', function () {
    it('insertionSort is defined', function () {
        expect(insertionSort).toBeDefined();
    })
    it('insertionSort is true', function () {
        expect(insertionSort([5, 2, 4, 6, 1, 3])).toStrictEqual([ 1, 2, 3, 4, 5, 6 ]);
    })
    it('insertionSort is false', function () {
        expect(insertionSort([5, 2, 4, 6, 1, 3])).not.toStrictEqual([ 1, 2, 0, 4, 5, 6 ]);
    })
})