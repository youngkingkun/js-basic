function bubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        console.log('i=', i);
        for (let j = 0; j < len - 1 - i; j++) {
            console.log('***j=', j);
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

let arr = [1, 23, 434, 5, 12, 2, 334];

console.log(bubbleSort(arr));
