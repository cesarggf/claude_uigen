import { vi } from 'vitest'

// Mock server-only modules to avoid client component import errors
vi.mock('next/headers', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    cookies: () => ({
      get: () => null,
      set: () => vi.fn(),
      delete: () => vi.fn(),
    }),
  }
})

vi.mock('next/server', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    cookies: () => ({
      get: () => null,
      set: () => vi.fn(),
      delete: () => vi.fn(),
    }),
    headers: () => new Headers(),
  }
})

vi.mock('next/navigation', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useRouter: () => ({
      pathname: '/test',
      push: () => {},
      replace: () => {},
      back: () => {},
      forward: () => {},
      refresh: () => {},
    }),
  }
})

// Mock all server-only exports
vi.mock('server-only', async () => ({ default: null }))
