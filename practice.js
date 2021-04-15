const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
      console.log('calculate');
      this.sum = this._a + this._b;
   },
  get a() {
      return this._a;
  },
  get b() {
      return this._b;
  },
  set a(value) {
// set 함수 때는 값을 무조건 넣어 주어야 한다.
      this._a = value;
// this._a를 value로 바꿨다.
      this.calculate();
// sum 값을 업데이트해주었다.
  },
  set b(value) {
      this._b = value;
      this.calculate();
  }
};

console.log(numbers.sum);
// 여기까지는 출력값이 3이다.
numbers.a = 5;
// 여기까지는 calculate이라고 출력값이 뜬다.
/* 5가 set a(value)의 value로 들어가서 this._a를 갖게 되고, 그러면서 _a: 1한테 설정이 된다.
그러고 나서 this.calculate()가 실행되면서 claculate()이 실행되면 this.sum = this._a + this._b;이 연산된 값(sum: 3)으로 바뀌게 된다. */
console.log(numbers.sum);
numbers.a = 6;
numbers.b = 7;
// 값이 바뀔 때마다 sum 출력값도 달라진다.
console.log(numbers.sum);