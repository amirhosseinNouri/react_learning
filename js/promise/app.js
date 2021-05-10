const delay = (timeout) => new Promise((done) => setTimeout(done, timeout));

const functionA = async () => {
  await delay(1000);
  //   console.log('A is done');
  return 'A';
};

const functionB = async () => {
  await delay(2000);
  //   console.log('B is done');
  return 'B';
};

const functionC = async () => {
  await delay(3000);
  //   console.log('C is done');
  return 'C';
};
// Promise.all([functionA(), functionB(), functionC()]).then(() =>
//   console.log('All resolved'),
// );

// [(functionA(), functionB(), functionC())]
//   .reduce((acc, curr) => acc.then(curr), Promise.resolve())
//   .then(console.log('All resolved'));

const applyAsync = (acc, curr) => acc.then(curr);

// [(functionA(), functionB(), functionC())]
//   .reduce(applyAsync, Promise.resolve())
//   .then(console.log('All resolved'));

const composeAsync = (...funcs) => (x) =>
  funcs.reduce(applyAsync, Promise.resolve(x));

const sequential = composeAsync(functionA, functionB, functionC);
// sequential();

Promise.race([functionA(), functionB(), functionC()]).then((value) =>
  console.log(value),
);
