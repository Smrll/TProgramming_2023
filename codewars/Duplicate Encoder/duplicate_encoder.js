function transformation(exemple_string) {
	for (let i = 0; i < exemple_string.length + 1; i++) {
		let letter = exemple_string[i];
		let count = 0;
		let new_string = '';
		for (let j = 0; j < exemple_string.length + 1; i++) {
			if (letter == exemple_string[j]) {
				count ++;
			}
		}
		if (count === 1) {
			new_string = new_string + '(';
		}
		else { 
			new_string = new_string + ')';
		}

	}
	console.log(new_string);
}

let a = 'recede';
transformation(a);
