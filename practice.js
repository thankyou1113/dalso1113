function subtract(x, y) {
    return x - y;
}

const numbers = [1, 2];
const result = subtract(...numbers);
// 여기서 ...numbers는 numbers[0], numbers[1]와 같다.
console.log(result);