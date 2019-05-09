/**
 * 1.函数参数的默认值
 * 2.rest参数
 * 3.严格模式
 * 4.name属性
 * 5.箭头函数
 * 6.尾调用优化
 * 7.函数参数的尾逗号
 **/

/**
 *箭头函数注意点
 * 1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * 2.不可以当作构造函数，也就是说，不可以使用new命令，否则会抛一个错误。
 * 3.不可以使用arguments对象，该对象在函数体内不存在。如果使用，可以用rest参数代替。
 * 4.不可以使用yield命令，因此箭头函数不能作用Generator函数。
 */

/*
function log(x, y) {
    y = y || 'World';
    console.log(x, y);
}
log('Hello');
log('Hello', 'China');
log('Hello', '');

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

const p = new Point();
console.log(p);

function foo({x, y = 5}) {
    console.log(x, y);
}

foo({});
foo({x: 1});
foo({x: 1, y: 2});

function foo({x, y = 5} = {}) {
    console.log(x, y);
}

foo();

function fetch(url, {body = '', method = 'GET', headers = {}}) {
    console.log(method);
}

fetch('https://api.51xiaoqu.com', {});
fetch('https://api.51xiaoqu.com');


function fetch(url, {body = '', method = 'GET', headers = {}} = {}) {
    console.log(method);
}

fetch('https://api.51xiaoqu.com');

function add(...values) {
    let sum = 0;
    for (let val of values) {
        sum += val;
    }
    return sum;
}

console.log(add(2, 3, 4));

function f(a, b = a) {
    'use strict';
    console.log(a, b)
}

f(1, 2);

const bar = function baz() {

};
console.log(bar.name);

console.log((new Function).name);

function foo() {

}

console.log(foo.bind({}).name);


var f = v => v;
var f = function (v) {
    return v;
};
var f = () => 5;
var f = function () {
    return 5;
};

var sum = (num1, num2) => num1 + num2;
console.log(sum(1, 2));

let getTempItem = id => ({id: id, name: "Temp"});
let foo = () => {
    a:1
};
console.log(foo());

let fn = () => void doesNotReturn();

const full = ({first, last}) => first + ' ' + last;
const isEven = n => n % 2 === 0;
const square = n => n * n;

//正常函数
[1, 2, 3].map(function (x) {
    return x * x;
});
//箭头函数
[1, 2, 3].map(x => x * x);

var result = values.sort(function (a, b) {
    return a - b;
});

var result = vaules.sort((a, b) => a - b);
const numbers = (...nums) => nums;
console.log(numbers(1, 2, 3, 4, 5, 6));

const headAndTail = (head, ...tail) => [head, tail];
console.log(headAndTail(1, 2, 3, 4, 5, 6));
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

var id = 21;
foo.call({id: 52});

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));


function Fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(100));
*/

/**
 *
 * @param n
 * @param ac1
 * @param ac2
 * @returns {number}
 * @constructor
 */
function Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) {
        return ac2
    }
    return Fibonacci2(n - 1, ac2, ac1 + ac2);
}

console.log(Fibonacci2(10000));

function clownsEverywhere(
    param1,
    param2,
) { /* ... */
}

clownsEverywhere(
    'foo',
    'bar',
);
