function convert (str){
	let str_new = "";
	for (i = 0; i < str.length; i++) {
		if (str[i] === "-") {
			let letter = str[i+1].toUpperCase();
			str_new = str_new.concat(letter);
			i = i + 2;
		}
		str_new = str_new.concat(str[i]); 
	}
	console.log(str_new);
}

const str_ex = "the-stealth-warrior";
convert(str_ex);