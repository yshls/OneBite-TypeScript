function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 매개변수
function introduce(name = '이정환', age: number, tall?: number) {
  console.log(`name:${name}`);

  if (typeof tall === 'number') {
    console.log(`tall:${tall + 10}`); // 타입 좁히기 후 사용
  }
}

introduce('이정환', 27, 175);
// ❌ 틀린 방법
// function introduce(name: number = '이정환') {
//   console.log(`name:${name}`);
// }

// introduce(1);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5, 6); // 15
