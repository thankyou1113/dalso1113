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
            name, languages: [firstLang, secondLang, thirdLang, fourthLang]
        }
    },
    value
} = deepObject;

const extracted = {
    name, 
    firstLang, secondLang, thirdLang, fourthLang,
    value
};
console.log(extracted)