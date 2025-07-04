// 배열
let numArr: number[] = [1, 2, 3, 4, 5];

let strArr: string[] = ['hello', 'world', 'typescript'];
let boolArr: Array<boolean> = [true, false, true];
// <boolean[]>는 Array<boolean>과 동일한 타입, 후자가 제네릭 타입을 사용한 것

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (number | string | boolean | null | undefined)[] = [
  1,
  'hello',
  true,
  null,
  undefined,
];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
tup1 = [2, 3]; // 타입이 맞으면 재할당 가능
let tup2: [number, string, boolean] = [1, '2', true];

tup1.push(1);
tup2.pop();

// 튜플은 언제 유용하게 사용할 수 있을까?
const :[][] = [
  ['Alice', 25],
  ['Bob', 30],
  ['Charlie', 35],
];
// 위와 같이 이름과 나이를 함께 저장할 때 유용하게 사용할 수 있다.
