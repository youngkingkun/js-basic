let quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    console.log('pivotIndex=', pivotIndex, 'pivot=', pivot);
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

let arr = [1, 23, 434, 5, 12, 2, 334];

//console.log(quickSort(arr));


function quick(arr) {
    //数组长度
    const l = arr.length;
    //如果数组长度小于2，则直接返回数组
    if (l < 2) return arr;
    const basic = arr[0], left = [], right = [];
    for (let i = 1; i < l; i++) {
        const iv = arr[i];
        iv >= basic && right.push(iv);
        iv < basic && left.push(iv);
    }
    //递归调用
    return quick(left).concat(basic, quick(right));
}

console.log(quick(arr));
