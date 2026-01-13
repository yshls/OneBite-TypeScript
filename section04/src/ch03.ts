// 버전 1: 매개변수 1개
function func(a: number): void;
// 버전 2: 매개변수 3개
function func(a: number, b: number, c: number): void;

// 실제 구현부
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c); // 버전 2 로직
  } else {
    console.log(a * 20); // 버전 1 로직
  }
}
