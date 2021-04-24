function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area);