const functions = require('./functions');

it('Should return 4 when given 2 + 2', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Shouldnt return 5 when given 2 + 2', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

it('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});