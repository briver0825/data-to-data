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