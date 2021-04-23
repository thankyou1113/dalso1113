console.log(false || 'Dalso');
// || 왼쪽의 값이 false이거나 falsy한 값이면 || 오른쪽의 값이 출력된다.

console.log('' || 'Hello');
// ''(공백)은 falsy한 값이면 출력 결과는 || 오른쪽의 값이 출력된다.

console.log(null || '달소');
console.log(undefined || 'Hello World');
console.log(0 || '제로');


console.log(1 || '달소의 블로그');
// 1이 truthy한 값이기 때문에 컴퓨터는 || 뒤의 값을 보지 않는다.
console.log(true || '달소의 블로그');
console.log('달소' || '달소의 블로그');
console.log([] || '달소의 블로그');