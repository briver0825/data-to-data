export function objectTypeString(object){
  return Object.prototype.toString.call(object)
}

export const isObject = (object) => objectTypeString(object) === '[object Object]'
export const isArray = (object) => objectTypeString(object) === '[object Array]'
export const isMap = (object) => objectTypeString(object) === '[object Map]'


function clone(target){
  if(typeof target !== 'object'){
    return target
  }

  return JSON.parse(JSON.stringify(target))
}

export function get(target, keys){
  if(!keys){
    return null
  }

  if(typeof keys === 'string'){
    const keyArr = keys.split('.')

    const key = keyArr[0]
    const value = target[key]

    if(keyArr.length === 1){
      if(value){
        return clone(value)
      }
    }else{
      if(value && typeof value === 'object'){
        const keys = keyArr.splice(1).join('.')
        return get(value, keys)
      }
    }
  }

  return null
}

const injectSymbol = Symbol('injectValue')

export function injectValue(value){
  const injectObject = new Map()
  injectObject.set(injectSymbol, value)
  return injectObject
}

export function isInjectValue(injectObject){
  if(!isMap(injectObject)){
    return false
  }

  return injectObject.has(injectSymbol)
}

export function getInjectValue(injectObject){
  if(!isInjectValue(injectObject)){
    return null
  }

  const value = injectObject.get(injectSymbol)

  if(value){
    return value
  }

  return null
}