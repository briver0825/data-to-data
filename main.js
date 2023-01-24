import { get } from "./utils"

export function dataToData(target, mapping){

  if(!target || !mapping){
    return null
  }

  if(typeof target !== 'object') return null
  if(typeof mapping !== 'object') return null

  const result = {}
  for (const key in mapping) {
    const value = mapping[key]
    if(typeof value === 'string'){
      result[key] = get(target, value)
    }

    const valueType = Object.prototype.toString.call(value)

    if(valueType === '[object Object]'){
      result[key] = dataToData(target, value)
    }
    if(valueType === '[object Array]'){
      const k = value[0]
      const callback = value[1]
      const arr = get(target, k)
      result[key] = arr.map(v => {
        return callback(v)
      })
    }
  }

  if(Object.keys(result).length > 0){
    return result
  }

  return null
}