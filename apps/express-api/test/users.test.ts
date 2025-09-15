import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../src/index.js'; // .js for ESM-compiled path consistency

// Basic API tests using supertest against the Express app

describe('users routes', () => {
  it('GET /users returns two demo users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[1]).toHaveProperty('email');
  });

  it('GET /users/:id returns one user', async () => {
    const res = await request(app).get('/users/1');
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ id: 1, name: 'Ada Lovelace' });
  });

  it('GET /users/:id returns 404 for missing user', async () => {
    const res = await request(app).get('/users/9999');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

  it('POST /users creates a user when name is provided', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Grace Hopper', email: 'grace@example.com' })
      .set('Content-Type', 'application/json');

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ name: 'Grace Hopper', email: 'grace@example.com' });
  });

  // Intentionally failing test: we expect email to be required, but the route only checks `name`.
  it('POST /users should reject when email is missing (expected to fail)', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'No Email User' })
      .set('Content-Type', 'application/json');

    expect(res.status).toBe(400); // Will fail because the route currently allows missing email
  });
});
