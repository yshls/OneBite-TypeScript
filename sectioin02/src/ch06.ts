// any
let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = 'hello';
unknownVar = true;
unknownVar = () => {};
