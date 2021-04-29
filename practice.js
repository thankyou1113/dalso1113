function getSound(animal) {
    switch (animal) {
// animal 값에 따라 다른 작업을 하기 때문에 인자로 animal을 넣는다.
        case '쥐':
            return '찍찍';
        case '개':
            return '멍멍!';   
        case '고양이':
            return '야옹~';
        case '호랑이':
            return '어흥';  
// switch의 case 코드 내에서 return하게 되면, break를 작성할 필요가 없다.
        default:
// 없을 때를 대비하여 출력하려면 default를 작성한다.
            return '...?';
    }
}

console.log(getSound('쥐'));
console.log(getSound('인간'));