function isAnimal(text) {
    const animals = ['개', '다람쥐', '고양이', '호랑이'];
    return animals.includes(text);
// 배열[]안에 text가 존재하면 true, 존재하지 않으면 false
}

console.log(isAnimal('다람쥐'));
console.log(isAnimal('시계'));