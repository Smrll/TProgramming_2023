function count_sort(str) {
	let str_index = [];
	for (let i = 0; i < str.length; i++) {
		str_index[i] = str.charCodeAt(i) - str.charCodeAt('a');
	}
	
	let count_str = new Array(26);
	
	for (i of str_index) {
		tmp = (count_str[i] ?? 0) + 1;
		count_str[i] = tmp;
		
	}
	return count_str;
}


function anagrams(str_1, str_2) {
	let count_str_1 = count_sort(str_1);
	let count_str_2 = count_sort(str_2);
	let anagram = 0; 
	for (i = 0; i < 26; i ++) {
		anagram = anagram + Math.abs((count_str_1[i] ?? 0) - (count_str_2[i] ?? 0));
	}
	console.log(anagram);
}

const str_1 = 'codewars';
const str_2 = 'hackerrank';
anagrams(str_1, str_2);

