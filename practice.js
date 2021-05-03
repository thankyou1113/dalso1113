function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹~');
        },
        쥐: function() {
            console.log('찍찍');
        }
// 위의 세 개의 객체들은 모두 같은 형식이다. 두 번째 객체가 가장 깔끔한 코드이다.
    }

    const task = tasks[animal];
    if (!task) {
        console.log('...?');
        return;
    }
    task();
}


makeSound('개');
makeSound('인간');