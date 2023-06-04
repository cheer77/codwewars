const myBtn = document.getElementById('myBtn');
const spoiler = document.getElementById('spoiler');

function openClose(e) {
	spoiler.classList.toggle('closed');

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			spoiler.classList.add('closed');
		}

		console.log(e);
	});
}

myBtn.addEventListener('click', openClose);
myBtn.addEventListener('click', openClose);

// Collatz
function collatz(n) {
	let sequence = [n]; // Initialize the sequence array with the starting number

	while (n !== 1) {
		if (n % 2 === 0) {
			// If n is even, divide it by 2
			n = n / 2;
		} else {
			// If n is odd, multiply it by 3 and add 1
			n = 3 * n + 1;
		}
		sequence.push(n); // Add the new value of n to the sequence array
	}

	return sequence.join('->'); // Join the elements of the sequence array with '->' delimiter
}

// Pyramid Slide Down task
function longestSlideDown(pyramid) {
	const rows = pyramid.length;

	// Create a 2D array to store the maximum sums
	const dp = [];
	for (let i = 0; i < rows; i++) {
		dp.push([...pyramid[i]]);
	}

	// Start from the second-last row and calculate the maximum sums bottom-up
	for (let i = rows - 2; i >= 0; i--) {
		for (let j = 0; j <= i; j++) {
			// Calculate the maximum sum by choosing the larger value from the two adjacent numbers below
			dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
		}
	}

	// The top element of the dp array will contain the maximum slide down sum
	return dp[0][0];
}
