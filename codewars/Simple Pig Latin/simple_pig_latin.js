function pigConvert(str) {
	let new_str = "";
	for (word of str) {
		let end_letter = word[0];
		console.log(word[0]);
		console.log(word.length);
		console.log(word);
		for (i = 0; i < word.length; i++) {
			new_str = new_str.contact(word[i+1]);
		}
		new_str = new_str.contact(end_letter);
	}
	console.log(new_str);
}

const str_ex = "Pig latin is cool";
pigConvert(str_ex);