/*
2. 나이에 따라 문자 출력하기 (10점)
입력되는 파라미터 n이 나이라고 했을 때, 입력되는 n에 따라 해당하는 문자열을 리턴하는 함수, printAge를 만들어주세요.
변수 answer는 사용하지 않아도 됩니다. 다른 변수를 지정하셔도 되고 변수를 사용하지 않는 것도 괜찮습니다.

**출력예시**
* n이 1살 이상이고 19살 이하이면 "미성년자",
* n이 20살 이상이고 64살 이하이면 "성인",
* n이 65살 이상이면 "노인",
* n이 1 이상 120 이하가 아닌 경우 "출력할 수 없습니다"라는 문자열을 출력합니다.
*/

function printAge(n) {
    if (n >= 1 && n <= 19) {
        return "미성년자";
    } else if (n >= 20 && n <= 64) {
        return "성인";
    } else if (n >= 65 && n <= 120) {
        return "노인";
    } else {
        return "출력할 수 없습니다";
    }
}

console.log(printAge(0)); // 출력할 수 없습니다
console.log(printAge(10)); // 미성년자
console.log(printAge(20)); // 성인
console.log(printAge(64)); // 성인
console.log(printAge(65)); // 노인
console.log(printAge(120)); // 노인
console.log(printAge(121)); // 출력할 수 없습니다