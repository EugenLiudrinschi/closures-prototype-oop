//Create a function which returns a module with the following accesible functions:
//sum, subtract, multiply, divide - that will perform the operations over 2 values
//should be passed as a parameter to the module function, the other one should be a local variable.

function getMathModule(x) {
  let y = 2;

  return {
    sum() {
      return x + y;
    },

    subtract() {
      return x - y;
    },

    multiply() {
      return x * y;
    },

    divide() {
      return x / y;
    },
  };
}

//Test data
const test1 = getMathModule(5);

console.log(test1.sum());
console.log(test1.subtract());
console.log(test1.multiply());
console.log(test1.divide());
