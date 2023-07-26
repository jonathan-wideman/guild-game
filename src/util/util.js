export function newFilledArray(length, callback) {
  return [...new Array(length)].map(callback);
}