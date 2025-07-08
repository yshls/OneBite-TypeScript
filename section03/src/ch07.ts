/**
타입 좁히기
-> 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
타입을 상황에 따라 좁히는 방법을 이야기 */

/**
가정
value => number : toFixed
value => string: toUppercase */
// value => Date:getTime
// value => person :name은 age살입니다.
type Person = {
  name: string;
  age: number;
};
function func(value: number | string | Date) {
  value;
  // value.toUpperCase();
  // value.toFixed();

  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
  }
}

// instance는 왼쪽의 값이 오른쪽의 instance냐라고 물어보는 것
