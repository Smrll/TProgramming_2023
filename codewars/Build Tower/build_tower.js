function tower(floors) {
	let res_tower = new Array(floors);
	let places = floors * 2 - 1; 
	for (i = 1; i <= floors; i ++) {
		count_whiteplace = floors - i;
		count_asterisk = places - (floors - i) * 2;
		whiteplace = ' '.repeat(count_whiteplace);
		asterisk = '*'.repeat(count_asterisk);
		str = whiteplace + asterisk + whiteplace;
		res_tower[i - 1] = str;
	}
	for (j = 0; j < floors; j ++) {
		console.log(res_tower[j]);
	}
}

let floors = 9;
tower(floors);