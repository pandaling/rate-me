const request = require('supertest');
const app = require('../app');

test('Fetch test data', async () => {
  const response = await request(app)
    .get('/v1/test')
    .send()
    .expect(200)

  expect(response.statusCode).toEqual(200)
  expect(response.text).toEqual('Hello boss!')
})