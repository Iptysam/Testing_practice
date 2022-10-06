const capitalize = require('./capitalize');

test('capitalize the first letter', () => {
    const phrase = 'example'
    const output = phrase.replace(/^\w/, c => c.toUpperCase())
        expect(capitalize(output)).toBe('Example');
}); 