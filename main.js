// const myBtn = document.getElementById('myBtn');
// const spoiler = document.getElementById('spoiler');

// function openClose(e) {
// 	spoiler.classList.toggle('closed');

// 	document.addEventListener('keydown', function (e) {
// 		if (e.key === 'Escape') {
// 			spoiler.classList.add('closed');
// 		}

// 		console.log(e);
// 	});
// }

// myBtn.addEventListener('click', openClose);
// myBtn.addEventListener('click', openClose);

// function collatz(n) {
// 	let sequence = [n]; // Initialize the sequence array with the starting number

// 	while (n !== 1) {
// 		if (n % 2 === 0) {
// 			// If n is even, divide it by 2
// 			n = n / 2;
// 		} else {
// 			// If n is odd, multiply it by 3 and add 1
// 			n = 3 * n + 1;
// 		}
// 		sequence.push(n); // Add the new value of n to the sequence array
// 	}

// 	return sequence.join('->'); // Join the elements of the sequence array with '->' delimiter
// }

// // Pyramid Slide Down task
// function longestSlideDown(pyramid) {
// 	const rows = pyramid.length;

// 	// Create a 2D array to store the maximum sums
// 	const dp = [];
// 	for (let i = 0; i < rows; i++) {
// 		dp.push([...pyramid[i]]);
// 	}

// 	// Start from the second-last row and calculate the maximum sums bottom-up
// 	for (let i = rows - 2; i >= 0; i--) {
// 		for (let j = 0; j <= i; j++) {
// 			// Calculate the maximum sum by choosing the larger value from the two adjacent numbers below
// 			dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
// 		}
// 	}

// 	// The top element of the dp array will contain the maximum slide down sum
// 	return dp[0][0];
// }

// function numberToEnglish(number) {
// 	if (!Number.isInteger(number) || number < 0 || number > 99999) {
// 		return '';
// 	}

// 	if (number === 0) {
// 		return 'zero';
// 	}

// 	const units = [
// 		'',
// 		'one',
// 		'two',
// 		'three',
// 		'four',
// 		'five',
// 		'six',
// 		'seven',
// 		'eight',
// 		'nine',
// 		'ten',
// 		'eleven',
// 		'twelve',
// 		'thirteen',
// 		'fourteen',
// 		'fifteen',
// 		'sixteen',
// 		'seventeen',
// 		'eighteen',
// 		'nineteen',
// 	];

// 	const tens = [
// 		'',
// 		'',
// 		'twenty',
// 		'thirty',
// 		'forty',
// 		'fifty',
// 		'sixty',
// 		'seventy',
// 		'eighty',
// 		'ninety',
// 	];

// 	const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

// 	function convertThreeDigit(num) {
// 		let result = '';

// 		const hundreds = Math.floor(num / 100);
// 		const tensAndOnes = num % 100;

// 		if (hundreds > 0) {
// 			result += `${units[hundreds]} hundred`;
// 		}

// 		if (tensAndOnes > 0) {
// 			if (result !== '') {
// 				result += ' ';
// 			}

// 			if (tensAndOnes < 20) {
// 				result += units[tensAndOnes];
// 			} else {
// 				const tensDigit = Math.floor(tensAndOnes / 10);
// 				const onesDigit = tensAndOnes % 10;
// 				result += `${tens[tensDigit]}`;

// 				if (onesDigit > 0) {
// 					result += ` ${units[onesDigit]}`;
// 				}
// 			}
// 		}

// 		return result;
// 	}

// 	const numString = number.toString();
// 	const numDigits = numString.length;
// 	let result = '';
// 	let groupCount = 0;

// 	for (let i = numDigits; i > 0; i -= 3) {
// 		const startIndex = Math.max(0, i - 3);
// 		const endIndex = i;
// 		const group = parseInt(numString.slice(startIndex, endIndex));

// 		if (group > 0) {
// 			const groupResult = convertThreeDigit(group);

// 			if (groupCount > 0 && groupResult !== '') {
// 				result = `${groupResult} ${thousands[groupCount]} ${result}`;
// 			} else {
// 				result = `${groupResult} ${result}`;
// 			}
// 		}

// 		groupCount++;
// 	}

// 	return result.trim();
// }

// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}

// 	calc() {
// 		return this.width * this.height;
// 	}
// }

// const myParam = new Rectangle(5, 6);
// const result = myParam.calc();

//////////////////////////
// опишите класс Collapser
class Collapser {
	constructor(className) {
		this.className = className;
		this.init = this.init;
	}

	init() {
		this.addClassName();
	}

	addClassName() {
		this.addEventListener('click', function () {
			this.collapsible.toggle('active');
		});
	}
}

new Collapser('collapsible');
new Collapser('collapsible2');

function convert(sum, initialCurrency, convertCurrency) {
	const allCurrencies = [
		{ name: 'USD', mult: 1 },
		{ name: 'UAH', mult: 1 / 37 },
		{ name: 'EUR', mult: 1.1 },
	];

	const initial = allCurrencies.find((c) => c.name === initialCurrency);
	if (!initial) {
		return null;
	}

	const convert = allCurrencies.find((c) => c.name === convertCurrency);
	if (!convert) {
		return null;
	}

	return new Intl.NumberFormat('ua-Ua', {
		style: 'currency',
		currency: convert.name,
	}).format((sum * initial.mult) / convert.mult);
}

console.log(convert(2500, 'USD', 'EUR'));
