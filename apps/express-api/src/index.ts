// Minimal Express server. Exports `app` for tests and starts the server in non-test environments.
import express from 'express';
import usersRouter from './routes/users.js'; // .js extension for ESM output compatibility

export const app = express();

// Parse JSON bodies
app.use(express.json());

// Mount feature routes
app.use(usersRouter);

// Start server only when not under test
const PORT = Number(process.env.PORT || 3000);
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    // Educational log; remove/replace with proper logger in production
    console.log(`express-api listening on http://localhost:${PORT}`);
  });
}
