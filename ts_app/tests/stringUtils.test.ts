
import { describe, it, expect } from 'vitest'
import { isPalindrome } from '../src/stringUtils'

describe('isPalindrome', () => {
  it('radar_palindromo', () => {
    expect(isPalindrome('radar')).toBe(true)
  })

  it('Radar_palindromo', () => {
    expect(isPalindrome('Radar')).toBe(true)
  })

  it('anita_palindromo', () => {
    expect(isPalindrome('anita lava la tina')).toBe(true)
  })

  it('python_palindromo', () => {
    expect(isPalindrome('python')).toBe(false)
  })

  it('empty_palindromo', () => {
    expect(isPalindrome('')).toBe(true)
  })
})
