// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 상요하는 타입

// 숫자 자동할당
// 이런건 숫자형 enum
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = 'ko',
  english = 'en',
}
const user1 = { name: '이정환', Role: Role.ADMIN, Language: Language.korean }; //  0은 관리자
const user2 = { name: '홍길동', role: Role.USER, Language: Language.english }; // 1은 일반 유저
const user3 = { name: '김철수', role: Role.GUEST }; // 2는 게스트

console.log(user1, user2, user3);
