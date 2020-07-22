/**
 * 1.Set
 * 2.WeakSet
 * 3.Map
 * 4.WeakMap
 **/
/**
 const s = new Set();

 [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
 console.log(s);

 for (let i of s) {
    console.log(i);
}

 const set = new Set([1, 2, 3, 4, 5, 6]);
 console.log([...set]);
 console.log(set);
 console.log(set.size);

 const set = new Set(document.querySelectorAll('div'));
 console.log(set.size);

 console.log([...new Set([1, 1, 1, 1, 2, 2, 2, 2])]);
 console.log([...new Set('abcabcasbas')].join(''));

 let set = new Set()


 for (let i = 1; i < 13; i++) {
    console.log(i * 3);
}


 const items = new Set([1, 2,3, 3, 4, 5]);
 const array = Array.from(items);
 console.log(array);
 let arr = [1, 2, 3, 4, 5];
 console.log(arr);


 let a = new Set([1, 2, 3]);
 let b = new Set([4, 3, 2]);
 let union = new Set([...a, ...b]);
 console.log('union: ', union);

 let intersect = new Set([...a].filter(x => b.has(x)));
 console.log('intersect: ', intersect);

 let difference = new Set([...a].filter(x => !b.has(x)));
 console.log('difference: ', difference);

 let set = new Set([1, 2, 3]);
 set = new Set([...set].map(v => v * 2));
 console.log(set);

 let set = new Set([1, 2, 3]);
 set = new Set(Array.from(set, val => val * 2));
 **/
const ws = new WeakSet();
for (let i = 1; i < 13; i++) {
    console.log(i * 3);
}
