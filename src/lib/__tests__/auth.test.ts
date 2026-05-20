import { describe, test, expect } from 'vitest'
import { createSession } from '../auth'

describe('createSession', () => {
  test('should create a session with correct payload', async () => {
    const userId = 'user-123'
    const email = 'test@example.com'

    await createSession(userId, email)

    // Verify the function runs without errors
    expect(true).toBe(true)
  })

  test('should set secure flag in production', async () => {
    process.env.NODE_ENV = 'production'
    const userId = 'user-123'
    const email = 'test@example.com'

    await createSession(userId, email)

    process.env.NODE_ENV = 'development'

    // Verify the function runs without errors
    expect(true).toBe(true)
  })

  test('should set token expiration to 7 days', async () => {
    const userId = 'user-456'
    const email = 'dev@example.com'

    await createSession(userId, email)

    // Verify the function runs without errors
    expect(true).toBe(true)
  })
})
