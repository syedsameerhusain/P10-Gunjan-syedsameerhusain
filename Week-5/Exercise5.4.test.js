// Exercise5.4:
// Create a simple Javascript function code for addition, subtraction, and multiplication of 2 numbers and write the corresponding Jest based tests for it
const mathOperations=require('./Exercise5.4');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      let sum=mathOperations.sum(1, 2);
      expect(sum).toBe(3);
    });
    test('Subtracting 1 - 2 should return -1', () => {
        let difference=mathOperations.diff(1, 2);
        expect(difference).toBe(-1);
    });
    test('Subtracting 1 - 2 should return -1', () => {
        let difference=mathOperations.diff(1, 2);
        expect(difference).toBe(-1);
    });
    test('Multiply 1 * 2 and 3 * 6 should return 2 and 18', () => {
        let product=mathOperations.product(1, 2);
        expect(product).toBe(2);
        product=mathOperations.product(-3, 6);
        expect(product).toBe(-18);
    });
    test('Divide 2 / 1 and 3 * 2 should return 2 and 1.5', () => {
        let quotient=mathOperations.quotient(2, 1);
        expect(quotient).toBe(2);
        quotient=mathOperations.quotient(3,2);
        expect(quotient).toBe(1.5);
    });
})