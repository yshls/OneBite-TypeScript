class Student {
  // 필드 타입 정의
  name: string;
  grade: string;
  age: number;

  // 생성자 매개변수에 타입 추가
  constructor(name: string, grade: string, age: number) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log('열심히 공부함');
  }

  introduce() {
    console.log('안녕하세요');
  }
}

class StudentDeveloper {
  name: string;
  grade: string;
  age: number;
  favoriteSkill: string;

  // 생성자 매개변수에 타입 추가
  constructor(name: string, grade: string, age: number, favoriteSkill: string) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}
