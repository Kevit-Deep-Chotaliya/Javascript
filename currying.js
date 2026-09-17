function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(10)(20)(30));

// add(10)
//   ↓
// a = 10
//   ↓
// returns function waiting for b

// (20)
//   ↓
// b = 20
//   ↓
// returns function waiting for c

// (30)
//   ↓
// c = 30
//   ↓
// 10 + 20 + 30 = 60

const multiply = a => b => c => a*b*c;

console.log(multiply(10)(20)(2));

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
}
 
async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}
 
getBeans();
console.log("Describe what happens with this `console.log()` statement as well.");
