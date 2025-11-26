// Sum function
const sum = (a, b) => {
    return a + b
}

// Transform dolars to yens (1 dollar = 145.08 yens)
const yensFromDolars = (dolars) => {
    return dolars * 145.98;
}

// Transform eurso to dollars (1 euro = 1.07 dollars)
const dollarsFromEuros = (euros) => {
    return euros * 1.07;
}

// Transform yens to pounds (1 pound = 178.41 yens)
const poundsFromYens = (yens) => {
    return yens / 178.41;
}

module.exports = {sum, yensFromDolars, dollarsFromEuros, poundsFromYens};