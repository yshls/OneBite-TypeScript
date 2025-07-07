/**
대수 타입
-> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
-> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
1. 합집합 타입 - union 타입, | 이거는 갯수 제한 x
*/

let a: string | number;
a = 1;
a = 'Hello';

let b: boolean | number;
b = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// let union4: Union1 = {
//   name: '',
// };

/**
2. 교집합 타입 -Intersection 타입 */

let variable: number & string;
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

// let intersection: Intersection = {
//   name: '',
//   color: '',
//   // language:"",
// };
