// 합칩합
let a: string | number | boolean | null | {};
a = 1;
a = 'hello';

a = true;

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

// 교집합
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
let intersection: Intersection = {
  name: '',
  color: '',
  language: '',
};
