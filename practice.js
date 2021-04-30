function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        쥐: '찍찍',
        호랑이: '어흥'
    };
    return sounds[animal] || '...?';
// animal 인자는 각 객체들을 가리킨다.
// animal의 각 객체들을 확인한 후, 해당 객체가 없으면 ...?을 출력한다.

}


console.log(getSound('쥐'));
console.log(getSound('인간'));