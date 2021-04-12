function p(ms) {
  return new Promise((resolve, reject) => {
//p 함수가 new Promise를 return하고 있다.
    setTimeout(() => {
      // resolve(ms);
      reject(new Errors('reason'));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return 'Dalso: ' + ms;
}

(async function dalso() {
  try {
  const name = await asyncP();
  console.log(name);
} catch (error) {
console.log(error);
}
})();