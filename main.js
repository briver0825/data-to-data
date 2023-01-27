import { get, getInjectValue, isArray, isInjectValue, isObject, objectTypeString } from "./utils"

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

    const valueType = objectTypeString(value)

    if(isObject(value)){
      result[key] = dataToData(target, value)
    }

    if(isArray(value)){
      const k = value[0]
      const callback = value[1]
      const arr = get(target, k)
      result[key] = arr.map(v => {
        return callback(v)
      })
    }

    if(isInjectValue(value)){
      result[key] = getInjectValue(value)
    }
  }

  if(Object.keys(result).length > 0){
    return result
  }

  return null
}