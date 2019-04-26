// 解构赋值
/**
 let [foo = true] = [];
 console.log(foo);
 foo;

 let [x, y = 'b'] = ['a'];
 console.log(x, y);

 let [x, y = 'b'] = ['a', undefined];
 console.log(x, y);


 function f() {
    console.log('aaa');
}

 let [x = f()] = [1];
 console.log(x);


 let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
 console.log(foo, bar);

 let {baz} = {foo: 'aaa', bar: 'bbb'};
 console.log(baz);

 let {log, sin, cos} = Math;
 console.log(log, sin, cos);


 const {log} = console;
 log('hello');


 let {bar: baz} = {foo: 'aaa', bar: 'bbb'};
 console.log(baz);
 **/

console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));