// void
// void -> 공허(아무것도 없다.)
// void -> 아무것도 없음을 의미하는 타입

function fun1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
  //   현재 func2는 아무런 값도 반환하고 있지 않는다.
  // 그럴때 void를 사용한다.
}

/**
tsconfig.json에서 "stringNullCheck":false를 하면
a = null을 사용할 수 있다.
*/

// never -> 존재하지 않는 불가능한 타입
function func3(): void {
  while (true) {}
}

/**
func3함수처럼 절대로 정상적으로 종료될 수 없어서 함수에 반환값이 있는 거 자체가 모순이다라는 경우 never를 사용한다. */

function fun4(): never {
  throw new Error();
}

// => never는 모순을 의미한다.
