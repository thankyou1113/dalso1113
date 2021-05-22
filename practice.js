const animals = ['고양이', '개', '호랑이'];
const anotherAnimals = [...animals, '쥐'];
// 기존의 배열(animals)은 건드리지 않으면서 anotherAnimals에 기존의 배열을 그대로 추가할 수 있다.

console.log(animals);
console.log(anotherAnimals);