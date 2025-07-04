// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birthday: string;
  bio: string;
  locaioin: string;
};

function func() {
  type User = {};
}
// 타입 별칭은 타입에 이름을 붙여서 재사용할 수 있게 해준다.

let user1: User = {
  id: 1,
  name: 'alice',
  nickname: 'moo',
  birthday: '1990-01-01',
  bio: 'ALICE IS A SOFTWARE ENGINEER',
  locaioin: 'seoul',
};

let user2: User = {
  id: 1,
  name: 'alice',
  nickname: 'moo',
  birthday: '1990-01-01',
  bio: 'ALICE IS A SOFTWARE ENGINEER',
  locaioin: 'seoul',
};
