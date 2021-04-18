/*
4. 교집합과 합집합 구하기 (10점)
입력된 두 개의 배열의 교집합과 합집합을 리턴하는 함수를 만들어주세요.
변수 answer는 사용하지 않아도 됩니다. 다른 변수를 지정하셔도 되고 변수를 사용하지 않는 것도 괜찮습니다.

**구현조건**
* 교집합: 교집합이 없을 때는 빈 배열을 리턴합니다.
* 합집합: 리턴되는 배열을 오름차순으로 정렬합니다.
* for문은 사용하지 않습니다.
*/

// 교집합
function intersect(a, b) {
    let answer1 = new Set(['a', 'b']);
    let answer2 = new Set(['b','c']);
    let intersection = new Set([...answer1].filter(x => answer2.has(x)));
}

console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(intersect([1, 4, 7], [2])); // []

// 합집합
function sum(a, b) {
    let answer = new Set(a.concat(b));
    return Array.from(answer);
}

console.log(sum([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
console.log(sum([1, 4, 7], [2])); // [1, 2, 4, 7]