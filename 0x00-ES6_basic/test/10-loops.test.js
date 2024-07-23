export default function appendToEachArrayValue(array, appendString) {
  let newarr = [];
  for (let value of array) {
    value = appendString + value;
    newarr.push(value);
  }

  return newarr;
}
