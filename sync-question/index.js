// using javascript common functions
// efficient aspect of code readability 
const sync1 = (arr1, arr2) => {
  return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)))
}

// using plain javascript
// efficient aspect of speed, but unnessary memory wastage
const sync2 = (a, b) => {
  a.sort();
  b.sort();

  left = []; right = []; 
  i = 0; j = 0;
  while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
          left.push(a[i]);
          ++i;
      } else if (b[j] < a[i]) {
          right.push(b[j]);
          ++j;
      } else {
          ++i; ++j;
      }
  }
  while (i < a.length) {
      left.push(a[i]);
      ++i;
  }
  while (j < b.length) {
      right.push(b[j]);
      ++j;
  }

  return left.concat(right)
}

console.log(sync1([1, 2, 3], [1, 3, 4]))
console.log(sync2([1, 2, 3], [1, 3, 4]))

console.log(sync1([1, 9], [1]))
console.log(sync2([1, 9], [1]))

console.log(sync1([1, 2, 3], [1, 2, 3]))
console.log(sync2([1, 2, 3], [1, 2, 3]))
