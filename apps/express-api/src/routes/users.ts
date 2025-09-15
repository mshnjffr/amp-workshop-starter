import { Router } from 'express';

// Simple in-memory demo data
const users = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 2, name: 'Alan Turing', email: 'alan@example.com' }
];

const router = Router();

// GET /users -> list all users (demo data)
router.get('/users', (_req, res) => {
  res.json(users);
});

// GET /users/:id -> get a single user by id
router.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const found = users.find(u => u.id === id);
  if (!found) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(found);
});

// POST /users -> create a user
// Intentionally only validates that `name` is present.
// Note: Missing validation for `email` to set up a failing test later.
router.post('/users', (req, res) => {
  const { name, email } = req.body ?? {};

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const newUserId = users.length + 1;
  const newUser = { id: newUserId, name, email: email ?? null };
  // For demo purposes we do not mutate the in-memory array (idempotent tests)
  return res.status(201).json(newUser);
});

export default router;
