function persistence(num) {
  let count = 0;
  let currentNumAsString = num.toString();

  while (currentNumAsString.length > 1) {
    let multiplyTotal = 1;
    currentNumAsString.split('').forEach((number) => multiplyTotal *= number);
    count++;
    currentNumAsString = multiplyTotal.toString();
  }

  return count;
}

export default persistence;
