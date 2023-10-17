let number = Math.floor(Math.random() * 100);
console.log(number);
number = number % 2 === 0 ? 'Четное' : 'Не Четное';
console.log(number);

const userProfile = {
	Name: 'Alex',
	yearsOld: 34,
	numsOfcomments: 187,
	hair: 'black',
};

const userInfo = ({ Name, yearsOld }) => {
	return `User ${Name} is ${yearsOld} years old`;
};

console.log(userInfo(userProfile));
const userProfile2 = {
	...userProfile,
	student: true,
};

const markedItem = document.createElement('ul');

for (let item in userProfile) {
	const listItem = document.createElement('li');
	listItem.innerText = item + ':' + userProfile[item];
	listItem.style.background = 'rgb(255 194 36)';
	listItem.style.display = 'flex';
	listItem.style.justifyContent = 'center';
	listItem.style.alignItems = 'center';
	listItem.style.fontSize = '30px';
	markedItem.appendChild(listItem);
}

document.body.prepend(markedItem);
