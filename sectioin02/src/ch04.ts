// 타입 별칭
type User = {
  id: number;
  name: string;
  age?: number;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '이정환',
  nickname: 'winderlood',
  birth: '1999.01.01',
  bio: '안녕하세요',
  location: '서울',
};

let user2: User = {
  id: 1,
  name: '이정환',
  nickname: 'winderlood',
  birth: '1999.01.01',
  bio: '안녕하세요',
  location: '서울',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  Brazil: 'bz', // 자유롭게 추가 가능
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  Brazil: 76,
};
