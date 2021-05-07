const object = { a: 1 };
function print({ a, b }) {
    console.log(a);
    console.log(b || 2);
}

print(object);