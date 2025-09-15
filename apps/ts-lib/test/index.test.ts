import { describe, it, expect } from 'vitest';
import { getUserProfile, getUserInfo } from '../src/index.js';

// Passing test: verifies the supported API shape
describe('getUserProfile', () => {
  it('returns { id, fullName }', () => {
    const result = getUserProfile('123');
    expect(result).toEqual({ id: '123', fullName: 'User 123' });
  });
});

// Intentionally failing test for Sprint 1 exercise
// Expecting getUserInfo to match the new shape; currently it returns `{ id, name }`.
describe('getUserInfo (deprecated)', () => {
  it('returns { id, fullName } (intentional failure to drive refactor)', () => {
    const result = getUserInfo('123');
    // This will fail until getUserInfo is updated or replaced in consumers
    expect(result).toEqual({ id: '123', fullName: 'User 123' });
  });
});
