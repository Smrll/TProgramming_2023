function missing_letter(arr, len) {
	for (i = 0; i < len; i ++) {
		let letters = arr[i];
		arr[i] = letters.charCodeAt();
	}
	for (i = 0; i < len - 1; i++) {
		if ((arr[i + 1] - arr[i]) != 1) {
			let numb = arr[i] + 1;
			let letter = String.fromCharCode(numb);
			console.log(letter);
		}
	}

}

const arr_ex = ["a","b","c", "e", "f", "h"];
const len = arr_ex.length;
missing_letter(arr_ex, len);