
// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// async function asyncSetTimeout(func,time){
//   await wait(time).then(() => func());
// }
async function asyncSetTimeout2(func, time) {
  await new Promise(resolve => setTimeout(resolve, time)).then(() => func());
}

async function main() {
  console.log('start');
  await asyncSetTimeout2(() => { console.log('time'); }, 1000);
  console.log('finish');

}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
const start = async () => {
  await asyncForEach([1, 2, 3], async (num) => {
    await waitFor(50);
    console.log(num);
  }
  );
  console.log('Done');
};
start();

