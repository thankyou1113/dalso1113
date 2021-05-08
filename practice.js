const object = { a: 1 };
function print({ a, b = 2}) {
    console.log(a);
    console.log(b);
}

print(object);