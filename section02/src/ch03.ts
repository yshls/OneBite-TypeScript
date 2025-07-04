// 구조를 기준으로 타입을 정하며 이를 구조적 타입 시스템이라고 부른다. => Property based type system

// 객체 리터럴 타입
// id가 있어도 되고 없어도 될때는 ?를 해준다. => 선택적 프로퍼티, 옵셔널 프로퍼티
let user: { id?: number; name: string } = { id: 1, name: 'alice' };

user.id;

let dog: { name: string; color: string } = { name: '멍멍이', color: 'brown' };

user = {
  name: '홍길동',
};

// readonly는 읽기 전용 프로퍼티를 정의할 때 사용한다. 이 프로퍼티는 객체가 생성된 후에는 변경할 수 없다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY_API_KEY',
};

config.apiKey;
