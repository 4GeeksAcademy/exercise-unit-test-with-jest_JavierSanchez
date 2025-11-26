// Import sum function of app.js
const { sum, yensFromDolars, dollarsFromEuros, poundsFromYens } = require('./app.js');

// Sum test
test('adds 14 + 9 to equal 23', () => {
    // Call sum function
    let total = sum(14, 9);

    // We expect the sum to be 23 in this case
    expect(total).toBe(23);
});

test('One dollar should be 145.98 yens', () => {
    let yens = yensFromDolars(2.8);

    expect(yens).toBe(2.8 * 145.98);
})

test('One euro should be 1.07 dollars', () => {
    let yens = dollarsFromEuros(5.6);

    expect(yens).toBe(5.6 * 1.07);
})

test('One pound should be 178.41 yens', () => {
    let yens = poundsFromYens(687);

    expect(yens).toBe(687 / 178.41);
})