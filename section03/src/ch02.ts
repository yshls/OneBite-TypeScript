/**
unknwon 타입 -> 전체 집합
*/

function unknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = 'hello'; // string -> unknown
  let c: unknown = () => {}; // function -> unknown

  let unknwon: unknown;
  //   let num: number = unknownVar;
}

// never
function neverExam() {
  function neverFunc() {
    while (true) {}
  }

  //   let num: number = neverFunc();
  //   let str: string = neverFunc();

  //   let never1: never = 10;
}

// void
function voidExam() {
  function voidFunc() {
    console.log('hi');
  }

  let voidVar: void = undefined;
}

function anyExam() {
  let unknwon: unknown;
  let anyVar: any;

  //   anyVar = unknwonVar;
}
