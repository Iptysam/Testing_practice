const calculator = require ('./calculator');

describe('addition', () => {
    test('adds 1 + 2 equal 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
  
    test('adds 1 + 2 equal 3', () => {
        expect(calculator.add(2, 2)).toBe(4);
      });

    test('adds 1 + 2 equal 3', () => {
        expect(calculator.add(3, 3)).toBe(6);
      });
  });

  describe('subtraction', () => {
    test('minus 3 - 2 equal 1', () => {
      expect(calculator.sub(3, 2)).toBe(1);
    });
  
    test('minus 4 - 2 equal 2', () => {
        expect(calculator.sub(4, 2)).toBe(2);
      });

    test('minus 7 - 2 equal 5', () => {
        expect(calculator.sub(7, 2)).toBe(5);
      });
  });

  describe('multiply', () => {
    test('mulitply 1 * 2 equal 2', () => {
      expect(calculator.mul(1, 2)).toBe(2);
    });
  
    test('mulitply 2 * 2 equal 4', () => {
        expect(calculator.mul(2, 2)).toBe(4);
      });

    test('multiply 4 * 2 equal 8', () => {
        expect(calculator.mul(4, 2)).toBe(8);
      });
  });

  describe('division', () => {
    test('divide 2 / 2 equal 1', () => {
      expect(calculator.div(2, 2)).toBe(1);
    });
  
    test('divide 4 / 2 equal 2', () => {
        expect(calculator.div(4, 2)).toBe(2);
      });

    test('divide 6 / 2 equal 3', () => {
        expect(calculator.div(6, 2)).toBe(3);
      });
  });