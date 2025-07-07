/**
기본 타입간의 호환성
*/

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**

객체 타입 간의 호환성
-> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?*/

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '치치',
  color: 'brown',
  breed: '진도',
};

animal = dog;

// dog = animal; // 오류 발생

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '합입 크기로 잘라먹는 리액트',
  price: 3300,
  skill: 'reactjs',
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
객체 타입 변수를 초기화할 때 객체 리터럴을 사용하면 초과 프러퍼티가 발생한다. 
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: '합입 크기로 잘라먹는 리액트',
  price: 3300,
  //   skill: 'reactjs',
};

// 초과 프로퍼티 검사 피하는 방법
let book3: Book = programmingBook;

function func(book: Book) {}
// 함수의 인수로도 전달할때 초과프로퍼티 발생
func({
  name: '합입 크기로 잘라먹는 리액트',
  price: 3300,
  //   skill: 'reactjs',
});
func(programmingBook);

// 변수로 저장했다가 해야함
