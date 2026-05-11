/**
인터페이스와 클래스
*/
// 1. 클래스의 설계도(인터페이스) 정의
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 2. 인터페이스를 구현(implements)하는 클래스
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string, // 인터페이스에 없는 필드도 자유롭게 추가 가능
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
