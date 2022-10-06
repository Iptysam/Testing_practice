const strlen = require ('./stringlen');

test('char is greater than 1 but less than 10', () => {
  for(x = 1; x.length < 10; x++)
    expect(strlen(x)).not.toBe(10);
  });