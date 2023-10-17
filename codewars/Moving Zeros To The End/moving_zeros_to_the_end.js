function bubble_sort(arr, len) {
	zero = Number(0);
	for (i = 0; i < len; i ++) {
		for (j = 0; j < (len - i - 1); j++) {
			if (arr[j] === zero) {
				arr[j] = arr[j+1];
				arr[j+1] = zero;
			}
		}
	}
	console.log(arr)
}

arr = [false,1,0,1,2,0,1,3,"a"];
len = arr.length
bubble_sort(arr, len);