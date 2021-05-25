const grayCuteDalso = {
    name: '달소',
    attribute: '큐트',
    color: '회색'
};

const { color, ...rest } = grayCuteDalso;
// 객체 비구조화 할당을 하면서 그 안에 rest 연산자를 사용했다.
console.log(color);
console.log(rest);
// color 객체를 제외한 다른 객체와 값들(name, attribute)이 rest 안에 들어와서, 그 rest값들이 출력된다.

const { attribute, ...dalso } = rest;
console.log(dalso);