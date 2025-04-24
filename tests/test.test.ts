// tests/greet.test.ts
import { describe, it, expect } from 'vitest';
import { testFunction } from '../src/commands/testFunction';

describe('greet', () => {
  it('returns a greeting message', () => {
    expect(testFunction('Derek')).toBe('Derek');
  });
});
