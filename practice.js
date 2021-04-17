const todos = [{
        id: 1,
        text: '자바스크립트',
        done: true,
    },
    {
        id: 2,
        text: '자바',
        done: true,
    },
    {
        id: 3,
        text: 'C언어',
        done: true,
    },
    {
        id: 4,
        text: '파이썬',
        done: false,
    }
]

const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);