function isAnimal(text) {
    return (
        text === '개' || text === '다람쥐' || text === '고양이' || text === '호랑이'
    );
}

console.log(isAnimal('다람쥐'));
console.log(isAnimal('시계'));