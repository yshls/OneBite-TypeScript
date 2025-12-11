enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}
const user1 = {
  name: '이정환',
  role: Role.ADMIN, // 0 <- 관리자
  Language: Language.korean,
};
const user2 = {
  name: '홍길동',
  rolet: Role.USER, // 1 <- 일반 사용자
  Language: Language.english,
};

const user3 = {
  name: '아무개',
  rolet: Role.GUEST, // 1 <- 게스트
};

console.log(user1, user2, user3);
