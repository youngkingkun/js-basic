/**
 * 1.String.fromCodePoint()
 * 2.String.raw()
 * 3.实例方法：codePoint()
 * 4.实例方法：normalize()
 * 5.实例方法：includes(),startsWith(),endsWith()
 * 6.实例方法：repeat()
 * 7.实例方法：padStart(),padEnd()
 * 8.实例方法：trimStart(),trimEnd()
 * 9.实例方法：matchAll()
 **/
/**
 console.log(String.fromCodePoint(0x20BB7));
 console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');

 let s = '𠮷a';
 console.log(s.codePointAt(0));
 console.log(s.codePointAt(1));
 console.log(s.codePointAt(2));
 console.log(s.codePointAt(3));

 console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());

 let s = 'Hello World!';
 console.log(s.startsWith('Hello'));
 console.log(s.endsWith('!'));
 console.log(s.includes('o'));

 console.log('x'.repeat(3));

 console.log('x'.padStart(5, 'ab'));
 console.log('x'.padStart(4, 'ab'));

 const s = '  abc  ';

 console.log(s.trim());
 console.log(s.trimStart());
 console.log(s.trimEnd());
 **/
let s = 'heoow';
console.log(s.matchAll());