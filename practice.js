const deepObject = {
    state: {
        information: {
            name: 'Dalso',
            languages: ['Korean', 'English', 'French', 'Chinese']
        }
    },
    value: 5
}

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
    name, 
    languages,
    value
};
console.log(extracted)