/**
타입스크립트의 클래스
*/

const employee = {
  name: '이정환',
  age: 27,
  position: 'developer',
  work() {
    console.log('일함');
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  positon: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.positon = position;
  }

  // 매서드
  work() {
    console.log('일함');
  }
}

const employeeB = new Employee('이정환', 27, '개발자');

// 상속 받음
class ExecutiveOffice extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position); // 부모 생성자 최상단 호출
    this.officeNumber = officeNumber;
  }
}
