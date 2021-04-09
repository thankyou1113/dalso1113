// 생성자 함수

function A() {}

const a = new A();
// new A();를 통해 개체가 만들어지고, 그 개체가 a변수에 할당이 된다.
console.log(a, typeof a);
console.log(A());

//생성하면서 데이터 넣기
function B(name, age) {
//함수B 안에 인자로 넣어줄 변수(name, age)를 입력한다.
    console.log(name, age);
}

//const b는 객체
const b = new B();
//B라는 생성자 함수를 호출할 때 new B(); 안에 name과 age를 넣지 않으면,
//function B()와 console.log();에 undefined가 찍혀서
//결과적으로 출력값은 undefined로 나온다. 
const c = new B('dalso', '28');
// dalso와 28이 위쪽의 functionB()와 console.log();에 찍혀서 출력된다.
console.log(B());
// B값이 없기 때문에 출력값은 undefined이다.