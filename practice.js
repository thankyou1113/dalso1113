function sum(a, b, c, d, e, f, g) {
    let result = 0;
    if (a) result += a;
// 만약 a 값이 존재한다면, result에 a를 더한다.
    if (b) result += b;
    if (c) result += c;
    if (d) result += d;
    if (e) result += e;
    if (f) result += f;
    if (g) result += g;
    return result
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));