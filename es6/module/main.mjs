import * as circle from './circle.mjs'
import {default as f} from './export-default.mjs'

f();
function setName(element) {
    console.log(element)
    // 不允许在加载模块的脚本中改写接口, 下面的一行代码运行错误。
    // firstName = 'yangyang';
    console.log(firstName + ' ' + lastName);
    console.log('birthday: ', birthday)
    console.log(multiply(1.9, 3))
    // element.textContent = firstName + ' ' + lastName;
}
console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));

setName('abc')
// import 命令是编译阶段执行的，存在提升效果，提升到整个脚本文件的头部，首先执行
import {firstName, lastName, year as birthday, multiply} from './profiles.mjs';

