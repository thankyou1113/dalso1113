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

const redCuteDalso = {
    ...grayCuteDalso,
    color: 'red'
};

console.log(dalso);
console.log(cuteDalso);
console.log(grayCuteDalso);
console.log(redCuteDalso);