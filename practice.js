function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

function subtract(x, y) {
    return x - y;
}
// x와 y는 파라미터이다.

const result = subtract(1, 2);
// 1과 2는 인자이다.