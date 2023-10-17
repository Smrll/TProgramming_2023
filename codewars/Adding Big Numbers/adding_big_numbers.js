function amount(summands) {
	let first_summand = Number(summands[0]);
	let second_summand = Number(summands[1]);
	let summ = first_summand + second_summand;
	let result_summ = String(summ);
	console.log(result_summ);
}

const summands = ["123", "12"];
amount(summands);