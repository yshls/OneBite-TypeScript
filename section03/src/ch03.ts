/**
기본 타입 간의 호환성 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
객체 타입 간의 호환성 -> 어떤 객체 탕비을 다른 객체 타입으로 취급해도 괜찬 */
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
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let ProgrammingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs',
};

let book2: Book = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  //   skill: 'reactjs',
};

let book3: Book = ProgrammingBook;
// function({
//       name: '한 입 크기로 잘라먹는 리액트',
//   price: 33000,
// //   skill: 'reactjs',
// })
