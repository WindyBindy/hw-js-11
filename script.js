// Завдання 1
let user = {
	name: 'Nikita',
	age: 12,
	hobby: 'reading',
	premium: true,
}

user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false

for (const key of Object.keys(user)) {
	console.log(`${key}: ${user[key]}`)
}

// Завдання 2
function countProps(obj) {
	return Object.keys(obj).length
}

console.log('кількість властивостей:', countProps(user))

// Завдання 3
function findBestEmployee(employees) {
	let bestName = ''
	let maxTasks = 0

	for (const [name, tasks] of Object.entries(employees)) {
		if (tasks > maxTasks) {
			maxTasks = tasks
			bestName = name
		}
	}

	return bestName
}

const team = {
	Ann: 29,
	David: 35,
	Helen: 1,
	Lorence: 99,
}
console.log(findBestEmployee(team))

// Завдання 4
function countTotalSalary(employees) {
	let total = 0
	for (const salary of Object.values(employees)) {
		total += salary
	}
	return total
}

const salaries = {
	John: 1000,
	Ann: 1500,
	Pete: 2500,
}
console.log(countTotalSalary(salaries))

// Завдання 5
function getAllPropValues(arr, prop) {
	const result = []

	for (const obj of arr) {
		if (prop in obj) {
			result.push(obj[prop])
		}
	}

	return result
}

const products = [
	{ name: 'Radar', price: 1300, quantity: 4 },
	{ name: 'Scanner', price: 2700, quantity: 3 },
	{ name: 'Droid', price: 400, quantity: 7 },
	{ name: 'Grip', price: 1200, quantity: 9 },
]

console.log(getAllPropValues(products, 'name'))
console.log(getAllPropValues(products, 'quantity'))

// Завдання 6
function calculateTotalPrice(allProducts, productName) {
	let total = 0

	for (const product of allProducts) {
		if (product.name === productName) {
			total = product.price * product.quantity
			break
		}
	}

	return total
}

console.log(calculateTotalPrice(products, 'Radar'))
console.log(calculateTotalPrice(products, 'Grip'))
