/**
 * 1. Iterator（遍历器，迭代器）的感念
 * 2. 默认Iterator接口
 * 3. 调用Iterator接口的场景
 * 4. 字符串的Iterator接口
 * 5. Iterator 接口与 Generator 函数
 * 6. 遍历器对象的return(), throw()
 * 7. for...of 循环
 *
 **/

/*
function makeIterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++]} :
                {done: true}
        }
    }
}
let it = makeIterator(['a', 'b']);

console.log(it.next());
console.log(it.next());
console.log(it.next());

function idMaker() {
    let index = 0;
    return {
        next: function () {
            return {value: index++, done: false};
        }
    };
}

let it = idMaker();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
*/
const obj = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};
