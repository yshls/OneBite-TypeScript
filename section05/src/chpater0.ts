/**
인터페이스
*/

interface IPerson {
  readonly name: string;
  age?: number;
  sayHi(): void; // 메서드의 이름이 소괄호 앞에 붙는다.
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// type Func = {
//   (): void;
// };

// const func: Func = () => {};

// person.sayHi();
// person.sayHi(1, 2);

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person | number = {
  name: '이정환',
  sayHi: function () {
    console.log('Hi');
  },
};
