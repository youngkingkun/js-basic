/**
 {
    let a = 10;
    var b = 1;
}
 a
 b

 for (let i = 0; i < 10; i++) {

}
 console.log(i);



 var a = [];
 for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
 a[6]();

 var a = [];
 for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
 a[6]();

 for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

 function f() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);
}
 f();


 if (true) {
    function f() {

    }
}
 try {
    function f() {

    }
} catch (e) {

}
 **/

const PI = 3.1415;
var a = 1;
console.log(this.a);
let b = 1
console.log(this.b);