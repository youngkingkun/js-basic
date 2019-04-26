/**
 * 1.字符的Unicode表示法
 * 2.字符串的遍历器接口
 * 3.直接输入U+2028和U+2029
 * 4.JSON.stringify()的改造
 * 5.模版字符串
 * 6.实例：模版编译
 * 7.标签模版
 * 8.模版字符串的限制

 console.log('\u0061');
 console.log('\uD842\uDFB7');
 console.log('\u20BB');
 console.log('\u{20BB7}');
 console.log('\u{6F}')
 let hello = 123;
 console.log('hell' + '\u{6F}');


 for (let codePoint of 'foo') {
    console.log(codePoint);
}


 let text = String.fromCodePoint(0x20BB7);
 for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

 for (let i of text) {
    console.log(i);
}

 console.log('中' === '\u4e2d');

 console.log(`string text line 1 string text line 2`);
 **/

let name = 'Bob', time = 'today';
console.log(`Hello ${name}, how are you ${time}`);

let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;

java`
class HelloWorldApp {
  public static void main(String[] args) {
    System.out.println("Hello World!"); // Display the string.
  }
}
`