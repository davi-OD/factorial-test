/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
module.exports = class Calculate {
    factorial(num) {
        if (num < 0) { return null; }

            let fact = 1;
            for (let i = num; i >= 1; i--) {
                fact *= i;
            }
            return fact;
    }
  };
