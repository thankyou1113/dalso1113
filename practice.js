const object = { a: 1 };

const { a, b = 2} = object;
console.log(a);
console.log(b);