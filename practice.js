const dalso = {
    name: '달소'
};

const cuteDalso = {
    ...dalso,
    attribute: 'cute'
};

const grayCuteDalso = {
    ...cuteDalso,
    color: 'gray'
};

console.log(dalso);
console.log(cuteDalso);
console.log(grayCuteDalso);