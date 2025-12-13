// void -> 아무것도 없음

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void;
a = undefined;

// never -> 존재하지 않은, 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4() {
  throw new Error();
}

// let a: never;
// a = 1;
// a = {};
// a = '';
