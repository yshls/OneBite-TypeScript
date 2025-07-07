/**
타입 단언 assertion
*/
type Person = {
  name: string;
  age: number;
};
let person = {} as Person;
person.name = '이정환';
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// let dog: Dog = {
//   name: '돌돌이',
//   color: 'brown',
//   breed: '진도',
// } => 오류 됨 breed 오류

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog; // => 타입 단언을 통해 오류 해결, 언제 사용하냐?

/**
타입 단언의 규칙, 값 as 단언 <- 단언식
A as B
A가 B의 서브타입어야 함 */

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

/**const 단언 */
let num4 = 10 as const;
// const 는 객체 타입과 선언해야 좋다.

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const;

// cat.name = ''

/**
non null 단언
*/

type Post = {
  title: string;
  autohr?: string;
};

let post: Post = {
  title: '게시글1',
  author: '이정환',
};

cost len : number = post.author!.length;
