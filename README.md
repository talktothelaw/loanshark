## This package is meant for calculating long charges


## Installation

```sh
npm install loanshark
```

or

```sh
yarn add loanshark
```

## Example Usage

### Using the rule of 78, also known as the sum-of-the-digits

```js
import { ruleOf78 } from 'loanshark'
```



* The above function takes three arguments: the loan amount, the interest rate, and the length of the loan in months. It then calculates the amount of interest earned or charged using the rule of 78 and returns the result.

* To use this function, you would call it like this:

```js
let loanAmount = 1000; // The loan amount is $1000
let interestRate = 0.05; // The interest rate is 5%
let loanLength = 12; // The loan length is 12 months

let interest = ruleOf78(loanAmount, interestRate, loanLength);
console.log(interest); // Output: 25

```
* In the example above, the function is called with the loan amount, interest rate, and loan length as arguments. The function calculates the amount of interest earned or charged using the rule of 78 and returns 25. This value is then printed to the console.


### Using the reducing balance method

```js
import { reducingBalance } from 'loanshark'
```

* The above function takes three arguments: the loan amount, the interest rate, and the monthly payment amount. It then calculates the remaining balance on the loan using the reducing balance method and returns the result.

* To use this function, you would call it like this:
```js
let loanAmount = 1000; // The loan amount is $1000
let interestRate = 0.05; // The interest rate is 5%
let monthlyPayment = 100; // The monthly payment is $100

let remainingBalance = reducingBalance(loanAmount, interestRate, monthlyPayment);
console.log(remainingBalance); // Output: 950

```

* In the example above, the function is called with the loan amount, interest rate, and monthly payment as arguments. The function calculates the remaining balance on the loan after making the payment and returns 950. This value is then printed to the console.

### Using the straight-line 

```js
import { straightLine } from 'loanshark'
```

* This function takes three arguments: the loan amount, the interest rate, and the monthly payment amount. It then calculates the remaining balance on the loan using the straight-line method and returns the result.

* To use this function, you would call it like this:

```js
let loanAmount = 1000; // The loan amount is $1000
let interestRate = 0.05; // The interest rate is 5%
let monthlyPayment = 100; // The monthly payment is $100

let remainingBalance = straightLine(loanAmount, interestRate, monthlyPayment);
console.log(remainingBalance); // Output: 950
```

* In this example, the function is called with the loan amount, interest rate, and monthly payment as arguments. The function calculates the remaining balance on the loan after making the payment and returns 950. This value is then printed to the console.
* Note that the straight-line method is very similar to the reducing balance method, and the calculation for the remaining balance is the same in both methods. The main difference between the two methods is how the interest is applied: in the straight-line method, the interest is applied evenly to the remaining balance each month, while in the reducing balance method, the interest is applied to the remaining balance after each payment is made.


### Using declining balance method

```js
import {decliningBalance} from 'longshark'
```

* This function takes three arguments: the loan amount, the interest rate, and the monthly payment amount. It then calculates the remaining balance on the loan using the declining balance method and returns the result.

* To use this function, you would call it like this:

```js
let loanAmount = 1000; // The loan amount is $1000
let interestRate = 0.05; // The interest rate is 5%
let monthlyPayment = 100; // The monthly payment is $100

let remainingBalance = decliningBalance(loanAmount, interestRate, monthlyPayment);
console.log(remainingBalance); // Output: 950
```

* In the example above, the function is called with the loan amount, interest rate, and monthly payment as arguments. The function calculates the remaining balance on the loan after making the payment and returns 950. This value is then printed to the console.

* Note that the declining balance method is very similar to the reducing balance method, and the calculation for the remaining balance is the same in both methods. The main difference between the two methods is how the interest is applied: in the declining balance method, the interest is applied to a decreasing balance each month, while in the reducing balance method, the interest is applied to the remaining balance after each payment is made.
