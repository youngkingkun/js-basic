/**
 * 1.属性的简洁表示法
 * 2.属性名表达式
 * 3.方法的name属性
 * 4.属性的可枚举性和遍历
 * 5.super关键字
 * 6.对象的扩展运算符
 **/

/**
 const foo = 'bar';
 const baz = {foo};
 console.log(baz);

 const bazz = {foo: foo};
 console.log(bazz);


 function f(x, y) {
    return {x, y};
}

 console.log(f(1, 2));

 function ff(x, y) {
    return {x: x, y: y};
}

 console.log(ff(1, 2));

 const o = {
    method() {
        return 'Hello!';
    }
};

 console.log(o.method());

 const oo = {
    methodaaa: function () {
        return 'Hello!oo';
    }
};
 console.log(oo.methodaaa());

 let birth = '2019/01/01';
 const Person = {
    name: '张三',
    // 等同于 birth:birth
    birth,
    // 等同于 hello: function()...
    hello() {
        console.log('我的名字是', this.name)
    }
};

 Person.hello();
 console.log(Person.birth);

 function getPoint() {
    const x = 1;
    const y = 10;
    return {x, y};
}

 console.log(getPoint().x);

 let ms = {};

 function getItem(key) {
    return key in ms ? ms[key] : null
}

 function setItem(key, value) {
    ms[key] = value;
}

 function clear() {
    ms = {};
}

 module.exports = {getItem, setItem, clear};
 // 等同于
 module.exports = {
    getItem: getItem,
    setItem: setItem,
    clear: clear
};

 const cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },
    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('数值太小了');
        }
        this._wheels = value;
    }
};
 console.log(cart._wheels);

 obj = {};
 // 标识符作为属性名
 obj.foo = true;
 // 表达式作为属性名
 obj['a' + 'bc'] = 123;
 console.log(obj);

 let lastWord = ' last word';
 const a = {
    'first word': 'hello',
    [lastWord]: 'world'
};

 console.log(a['first word']);
 console.log(a[lastWord]);
 console.log(a['last word']);

 const person = {
    sayName() {
        console.log('hello!');
    },
};
 console.log(person.sayName.name);

 const obj = {
    get foo() {
    },
    set foo(x) {
    },
};
 //console.log(obj.foo.name);
 const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

 console.log(descriptor.get.name);
 console.log(descriptor.set.name);

 console.log((new Function()).name);
 let doSomething = function () {

};
 console.log(doSomething.bind().name);
 const key1 = Symbol('description');
 const key2 = Symbol();

 let obj = {
    [key1]() {
    },
    [key2]() {
    },
};

 console.log(obj[key1].name);
 console.log(obj[key2].name);

 let obj = {foo: 123};
 // getOwnPropertyDescriptor方法获取属性的描述对象
 console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

 console.log(Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0,}));

 const proto = {
    foo: 'hello'
};
 const obj = {
    foo: 'world',
    find() {
        return super.foo;
    }
};
 console.log(Object.setPrototypeOf(obj, proto));
 console.log(obj.find());

 //对象的解构赋值
 let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
 console.log('x:', x, 'y:', y, 'z:', z);
 let obj = {a: {b: {c: 1}}};
 let {...x} = obj;
 console.log(x);
 obj.a.b = 2;
 console.log(x.a.b);

 let o1 = {a: 1};
 let o2 = {b: 1};
 o2.__proto__ = o1;
 console.log(o1);
 console.log(o2);
 let {...o3} = o2;
 console.log(o3);
 console.log(o3.a);

 const o = Object.create({x: 1, y: 2});
 console.log(o.x, o.y);
 o.z = 3;
 console.log(o);
 let {x, ...newObj} = o;
 console.log(newObj);
 let {y, z} = newObj;
 console.log(x, y, z);

 let z = {a: 3, b: 4};
 let n = {...z};
 console.log(n);

 console.log({...'hello'});
 **/

