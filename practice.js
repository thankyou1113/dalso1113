function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
// 기본값은 0으로 시작해서, 이 0이 acc값이 되고, current는 1,2,3,4,5,6,7,8이 된다. 그래서 acc + current가 순차적으로 실행된다.
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));