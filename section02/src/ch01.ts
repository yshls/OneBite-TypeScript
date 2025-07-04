// number
let num1: number = 123;
let num2: number = 456;
let num3: number = 0.123;
let num4: number = -0.1234;
let num5: number = Infinity;
let num7: number = -Infinity;
let num6: number = NaN;

num1.toFixed(); // 숫자에만 적용할 수 있는 메서드

// String
let str1: string = 'Hello, TypeScript!';
let str2: string = 'hello';
let str3: string = '123';
let str4: string = '456';
let str5: string = `hello, ${str2}!`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let nullValue: null = null;

// undefined
let unde1: undefined = undefined;

// let numA = (number = null); // TypeScript에서는 null을 number 타입으로 할당할 수 없음

// 리터럴 타입
// 리터럴 -> 값
let numA: 10;
numA = 12;

let strA: 'hello' = 'hello';
let boolA: true = true;
