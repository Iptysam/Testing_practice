const revstr = require('./strreverse');

test('hello reversed is olleh', () => {
      expect(revstr('Hello')).toBe('olleH');
    });