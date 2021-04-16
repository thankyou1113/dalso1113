const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index);
// 여기서 출력값은 2. 여기서 우리는 index === 2인 것을 slice를 이용하여 제거할 것이다.
numbers.splice(index, 1);
// index부터 시작해서 한 개 지우겠다는 뜻.
// 파라미터로 1 대신 2를 넣으면 30, 40이 제거된다.
console.log(numbers);