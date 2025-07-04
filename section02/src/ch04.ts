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

//  인덱스 시그니처=> 키랑 밸류의 규칙을 기준으로 객체의 type을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedStates: 'us',
  UnitedKingdom: 'UK',
};

type CountryNumberCodes = {
  // 이 규칙을 위반하지 않으면 모든 객체를 허용한다.
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes = { Korea: 82 };
