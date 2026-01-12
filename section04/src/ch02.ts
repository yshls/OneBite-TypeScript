// 함수 타입 호환성
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: A = () => 10;

a = b;
// b = a;

// 매개변수가 호환되는가?
type C = (value: number) => void;
type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1;
