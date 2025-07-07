/**
Unknown 타입 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknown: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknown;
  //
}

/**
never
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = 'string';
  //   let never3: never = true;
}

/**
void
 */

function voidExam() {
  function voidFunc(): void {
    console.log('hi');
  }

  console.log('hi');
}
// function voidExam() {
//   function voidFunc(): void {
//     console.log('hi');
//     return undefined;
//   }
// }

/**
any타입 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;
  undefinedVar = anyVar;
}
