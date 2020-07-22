/*
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}
Ω
timeout(10000).then((value) => {
    console.log(value)
});


let promise = new Promise(function(resolve, reject){
   console.log('Promise');
   resolve();
});

promise.then(function(){
    console.log('resolved');
});

console.log('Hi!');

function loadImageAsync(url) {
    return new Promise(function(resolve, reject){
        const image = new Image();
        image.onload = function(){
            resolve(image);
        };
        image.onerror = function(){
            reject(new Error('Could not load image at '+url));
        };
        image.src = url;
    });
}

const getJSON = function(url){
    return new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.readyState === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();
    });
};

getJSON('/posts.json').then(function(json){

});
*/

// let promise = new Promise(function (resolve, reject) {
//     console.log('Promise');
//     resolve();
// });
// promise.then(function () {
//     console.log('resolved.');
// });
// console.log('Hi!');


let p = new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
}).then(r => {
    console.log(r);
});
p.then(r=>{
    console.log(r);
});
