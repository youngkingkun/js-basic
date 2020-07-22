/**
 * 1.扩展运算符
 * 2.Array.from()
 * 3.Array.of()
 * 4.数组实例的 copyWithin()
 * 5.数组实例的 find()和findIndex()
 * 6.数组实例的 fill()
 * 7.数组实例的 entries()，keys()和values()
 * 8.数组实例的 includes()
 * 9.数组实例的 flat()，flatMap()
 **/
/**
 console.log(...[1, 2, 3]);
 console.log(1, ...[2, 3, 4, 5]);

 function push(array, ...items) {
    array.push(...items);
}

 function add(x, y) {
    return x + y;
}

 const numbers = [4, 38];
 console.log(add(...numbers));

 console.log(Math.max(...[14, 3, 77]));
 console.log(Math.max(14, 3, 77));

 let arr1 = [0, 1, 2];
 let arr2 = [3, 4, 5];
 arr1.push(...arr2);
 console.log(arr1);


 const arr1 = ['a', 'b'];
 const arr2 = ['c'];
 const arr3 = ['d', 'e'];

 console.log(arr1.concat(arr2, arr3));
 console.log(...arr1, ...arr2, ...arr3);


 const [first, ...rest] = [1, 2, 3, 4, 5, 6];
 console.log(first);
 console.log(rest);

 console.log([...'hello']);

 console.log('x\uD83D\uDE80y'.length);
 console.log([...'x\uD83D\uDE80y'].length);


 Number.prototype[Symbol.iterator] = function* () {
    let i = 0;
    let num = this.valueOf();
    while (i < num) {
        yield i++;
    }
};
 console.log([...5]);

 let map = new Map([
 [1, 'one'],
 [2, 'two'],
 [3, 'three'],
 ]);
 let arr = [...map.keys()];
 console.log(arr);


 const go = function* () {
    yield 1;
    yield 2;
    yield 3;
};
 console.log([...go()]);

 let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
 let arr1 = [].slice.call(arrayLike);
 console.log(arr1);
 let arr2 = Array.from(arrayLike);
 console.log(arr2);


 console.log(Array.from([1, 2, 3], (x) => x * x));
 console.log([1, 2, 3].map(x => x * x));

 console.log(Array.from([1, 2, 3, false, -1,], x => x || 0));
 console.log(Array.from([null, [], NaN], v => typeof v));
 **/
console.log(Array.from({length: 3}, () = > 'jack')
)
;
