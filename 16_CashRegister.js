// Cash Register ;

// Design a cash register drawer function checkCashRegister()
// that accepts purchase price as the first argument (price),
// payment as the second argument (cash), and cash-in-drawer (cid)
// as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object
// with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer
// is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as
// the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change
// due in coins and bills, sorted in highest to lowest order, as the
// value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

const unitValue = [
	["PENNY", 0.01],
	["NICKEL", 0.05],
	["DIME", 0.1],
	["QUARTER", 0.25],
	["ONE", 1],
	["FIVE", 5],
	["TEN", 10],
	["TWENTY", 20],
	["ONE HUNDRED", 100]
];

const cidToObj = cidArray => {
	let obj = {}
	let copiedArray = [...cidArray] // avoid the original array changed
	copiedArray.reverse().forEach(item => {
		obj[item[0]] = item[1];
	});
	return obj;
};

function checkCashRegister(price, cash, cid) {

	// Convert current cid and unitValue to object
	// Make them easy to access
	const cidObj = cidToObj(cid);
	const unitValueObj = cidToObj(unitValue)

	// Prepare values before running the loop 
	let res = { status: '', change: [] }
	let updatedCidObj = {}
	let updatedChange = cash - price

	// Lopp through all units
	for (let unit of Object.keys(cidObj)) {
		let tempResAmount = Math.floor(updatedChange / unitValueObj[unit])
		let currentAmount = Math.round(cidObj[unit] / unitValueObj[unit])

		let resAmount = currentAmount <= tempResAmount ? currentAmount : tempResAmount;
		let resAmountValue = resAmount * unitValueObj[unit]

		updatedCidObj[unit] = parseFloat((cidObj[unit] - resAmountValue).toFixed(2))

		// Only push to res.change array if there is really an amount (>0)
		if (resAmount > 0) {
			res.change.push([unit, resAmountValue])
			updatedChange = parseFloat((updatedChange - resAmountValue).toFixed(2))
		}

	}

	//Analyze and make the final decision for status and change
	if (updatedChange > 0) {
		res = { status: "INSUFFICIENT_FUNDS", change: [] }
	}
	else if (Object.keys(updatedCidObj).every(unit => 0 === updatedCidObj[unit])) {
		// All units have 0 amount in updatedCidObj
		// That means no more money in drawer
		res = { status: 'CLOSED', change: cid }
	}
	else {
		res.status = 'OPEN'
	}

	// Remove this comment in case want to check the result 
	// console.log(res)

	return res;

};

const result = checkCashRegister(19.5, 20, [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100]
]);

console.log(result);

/* 
const unitValue = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]

/* Convert cidArray to object
 * Example for const unitValue 
{ 
  'ONE HUNDRED': 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01 
}
 */
/*
const cidToObj = cidArray => {
	let obj = {}
	let copiedArray = [...cidArray] // avoid the original array changed
	copiedArray.reverse().forEach(item => {
		obj[item[0]] = item[1]
	})
	return obj
}

/* 
 * Main function
 */
/*
function checkCashRegister(price, cash, cid) {
	// Convert current cid and unitValue to object
	// Make them easy to access
	const cidObj = cidToObj(cid);
	const unitValueObj = cidToObj(unitValue)

	// Prepare values before running the loop 
	let res = { status: '', change: [] }
	let updatedCidObj = {}
	let updatedChange = cash - price

	// Lopp through all units
	for (let unit of Object.keys(cidObj)) {
		let tempResAmount = Math.floor(updatedChange / unitValueObj[unit])
		let currentAmount = Math.round(cidObj[unit] / unitValueObj[unit])

		let resAmount = currentAmount <= tempResAmount ? currentAmount : tempResAmount;
		let resAmountValue = resAmount * unitValueObj[unit]

		updatedCidObj[unit] = parseFloat((cidObj[unit] - resAmountValue).toFixed(2))

		// Only push to res.change array if there is really an amount (>0)
		if (resAmount > 0) {
			res.change.push([unit, resAmountValue])
			updatedChange = parseFloat((updatedChange - resAmountValue).toFixed(2))
		}

	}

	//Analyze and make the final decision for status and change
	if (updatedChange > 0) {
		res = { status: "INSUFFICIENT_FUNDS", change: [] }
	}
	else if (Object.keys(updatedCidObj).every(unit => 0 === updatedCidObj[unit])) {
		// All units have 0 amount in updatedCidObj
		// That means no more money in drawer
		res = { status: 'CLOSED', change: cid }
	}
	else {
		res.status = 'OPEN'
	}

	// Remove this comment in case want to check the result 
	// console.log(res)

	return res;
}

checkCashRegister(19.5, 500, [["PENNY", 400], ["NICKEL",], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 800]])

	// return
	// { 
	//  status: 'OPEN',
	//  change: [ [ 'ONE HUNDRED', 400 ], [ 'NICKEL', 80.5 ] ] 
	// }

*/