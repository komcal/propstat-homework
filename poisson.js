import fact from './fact'

let sum = 0;
let param = 20;
for(let x=0;x<=30;x++) {
	let p = Math.pow(Math.E, -param) * Math.pow(param, x) / fact(x)
	console.log(`P(${x}): ` + p)
	sum += p
}

console.log(`SUM = ` + sum)
// console.log(`ANS = ` + (1-sum))