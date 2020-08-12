export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

export const DOES_NOT_EXIST = -1

export const isObject = val => typeof val == 'object' && val != null

export function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return item
  }
  return item.toString()
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS
  }
  return a > b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}