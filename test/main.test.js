import { describe, it, expect } from "vitest";
import { dataToData, injectValue } from "../main";

describe('main test', () => {
  it("basic using", () => {
    
    const target = {
      a: {
        b: {
          c: 'c'
        }
      },
      a1: [1,2,3]
    }

    const result = {
      a: {
        b: {
          c: 'c'
        },
        c: {
          c1 : [1,2,3],
          c2: 'c'
        }
      }
    }

    const mapping1 = {
      a: 'a.b'
    }

    const mapping2 = {
      a: {
        b: 'a.b',
        c: {
          c1: 'a1',
          c2: 'a.b.c'
        }
      }
    }

    expect(dataToData()).toBe(null)
    expect(dataToData(target)).toBe(null)
    expect(dataToData(target, mapping1)).toEqual({
      a: {
        c: 'c'
      }
    })
    expect(dataToData(target, mapping2)).toEqual(result)
  })

  it("array operation", () => {

    const target = {
      arr: [
        { firstName: 'John', lastName: 'Smith' },
        { firstName: 'Xi', lastName: 'Peter' },
      ]
    }

    const mapping = {
      arrName: ['arr', (item) => {
        item.name = 123
        return `${item.firstName}-${item.lastName}`
      }]
    }

    const result = {
      arrName: [
        'John-Smith',
        'Xi-Peter'
      ]
    }
    expect(dataToData(target, mapping)).toEqual(result)
  })

  it("inject value", () => {
    const target = {
      a: 'a',
      b: 'b'
    }

    const mapping = {
      a: 'a',
      b: injectValue(123)
    }

    const result = {
      a: 'a',
      b: 123
    }

    expect(dataToData(target, mapping)).toEqual(result)
  })
})