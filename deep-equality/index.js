
const equals = (obj1, obj2) => {
  const key1 = Object.keys(obj1), key2 = Object.keys(obj2);

  if (key1.length !== key2.length) return false

  let match = true;

  for (const key of key1) {
    // if either of them is object
    if ((typeof obj1[key] === 'object' && !Array.isArray(obj1[key])) || (typeof obj2[key] === 'object' && !Array.isArray(obj2[key]))) {
      match = equals(obj1[key], obj2[key])
      break
    }

    // if two values are different
    if (obj1[key] !== obj2[key]) {
      match = false;
      break
    }
  }

  return match
}

console.log(equals({"key1" : "value", 
           "key2" : {"key3": 1}},
          {"key1" : "value", 
           "key2" : {"key3": 1}}))

console.log(equals({"key1" : "value1", 
           "key2" : {"key3": 1},
           "key4" : "value2"},
          {"key1" : "value", 
           "key2" : {"key3": 1}}))