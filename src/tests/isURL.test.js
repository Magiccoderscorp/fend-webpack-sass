const isURL = require('./isURL')

test('isURL testing', () => {
    expect(isURL('http://wwww.google.com')).toBe(true)
})
