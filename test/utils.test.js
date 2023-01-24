import { describe, it, expect } from "vitest";
import { get } from "../utils";

describe('get function test', () => {
  it("basic using", () => {
    const target = {
      foo: 'foo',
      bar: {
        foo: 'bar',
        a: {
          b: 'c'
        }
      }
    }
    
    expect(get(target)).toBe(null)

    expect(get(target, 'foo')).toBe('foo')
    expect(get(target, 'bar.bar')).toBe(null)
    expect(get(target, 'bar.foo')).toBe('bar')
    expect(get(target, 'bar.a.b')).toBe('c')
  })
})