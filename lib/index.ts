export const ruleOf78 = (loanAmount: number, interestRate: number, loanLength: number): number => {
	// Calculate the total interest to be earned or charged
	let totalInterest = loanAmount * interestRate * loanLength;
	
	// Calculate the sum of the digits from 1 to loanLength
	let sum = 0;
	for (let i = 1; i <= loanLength; i++) {
		sum += i;
	}
	
	// Calculate the amount of interest earned or charged using the rule of 78
	// Return the calculated interest
	return totalInterest * (sum / loanLength) / sum;
}

export const reducingBalance = (loanAmount: number, interestRate: number, monthlyPayment: number)=> {
	
	// Calculate the monthly interest rate
	let monthlyInterestRate = interestRate / 12;
	
	// Calculate the remaining balance
	// Return the calculated remaining balance
	return loanAmount * (1 + monthlyInterestRate) - monthlyPayment;
}

export const straightLine = (loanAmount: number, interestRate: number, monthlyPayment: number): number=> {
	let monthlyInterestRate = interestRate / 12;
	
	// Calculate the remaining balance
	// Return the calculated remaining balance
	return loanAmount * (1 + monthlyInterestRate) - monthlyPayment;
}

export const decliningBalance = (loanAmount: number, interestRate:number, monthlyPayment: number): number => {
	let monthlyInterestRate = interestRate / 12;
	
	// Calculate the remaining balance
	// Return the calculated remaining balance
	return loanAmount * (1 + monthlyInterestRate) - monthlyPayment;
}
