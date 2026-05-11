/**
접근 제어자
*/

class Employee {
  // 필드
  private name: string;
  protected age: number;
  public positon: string;

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
// employee.name = '홍길동';
// employee.age = 30;
// employee.position = '디자이너';
