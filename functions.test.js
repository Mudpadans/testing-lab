const { returnTwo, greeting, add, multiply, subtract, divide } = require("./functions.js");

test('returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('sends a greeting with a given name', () => {
    expect(greeting('James')).toBe("Hello, James.")
    expect(greeting('Jill')).toBe("Hello, Jill.")
})

const mathFunctions = { add, multiply, subtract, divide }

describe('mathFunctions', () => {
    test('adds two given numbers into a sum', () => {
        expect(add(1, 2)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })

    test('multiplies two given numbers into another number', () => {
        expect(multiply(1, 2)).toBe(2)
        expect(multiply(5, 9)).toBe(45)
    })

    test('subtracts two given numbers into another number', () => {
        expect(subtract(2, 1)).toBe(1)
        expect(subtract(9, 5)).toBe(4)
    })

    test('divides two given numbers into another number', () => {
        expect(divide(2, 1)).toBe(2)
        expect(divide(9, 5)).toBe(1.8)
    })
})
