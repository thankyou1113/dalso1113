function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

(async function dalso() {
  const results = await Promise.race([p(1000), p(2000), p(3000)]);
// 3개 중 가장 빠른 p 하나만 출력될 것이다.
  console.log(results);
})();