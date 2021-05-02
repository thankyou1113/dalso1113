function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        쥐: '찍찍',
        호랑이: '어흥'
    };
    return sounds[animal] || '...?';
}


console.log(getSound('개'));
console.log(getSound('인간'));