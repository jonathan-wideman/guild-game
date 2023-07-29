export function newFilledArray(length, callback) {
  return [...new Array(length)].map(callback)
}

export function classNames(...classNames) {
  return classNames.join(' ')
}
