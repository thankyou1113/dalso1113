const deepObject = {
    state: {
        information: {
            name: 'Dalso',
            languages: ['Korean', 'English', 'French', 'Chinese']
        }
    },
    value: 5
}

const {
    state: {
        information: {
            name, languages
        }
    },
    value
} = deepObject;

const extracted = {
    name, 
    languages,
    value
};
console.log(extracted)