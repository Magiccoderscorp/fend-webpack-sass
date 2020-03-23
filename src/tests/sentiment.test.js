
const sentiment = require('./sentiment')

it('Sentiment testing', async () => {
    await expect(sentiment('Black is black')).resolves.toBe('neutral');
})
