// any
// 특정 변수의 타입을 우리가 확실히 모를때 사용
let anyVar: any = 10;
anyVar = 'hello';

// anyVar = true;
// anyVar = {};

// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// unknown과 any의 차이점
// unknown은 num타입에 집어 넣을 수가 없다.
// num = unknown불가
// unknownVar.toUpperCase불가, 연산 불가

if (typeof unknownVar === 'number') {
  num = unknownVar;
}

// 이런식으로 타입을 정제해서 타입 가능

/**
변수에 저장할 값의 타입이 확실하지 않을때에는 Any타입 사용, 
unknwon은 아무변수나 아무타입에 못 넣기 때문에 런타임 에러를 일으키는 any보다 낫다 */
