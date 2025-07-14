/**
서로소 유니온 타입
: 교집합이 없는 타입들로만 만든 유니온 타입을 의미
*/

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};
type Member = { tag: 'MEMBER'; name: string; point: number };
type Guest = { tag: 'GUEST'; name: string; visitCount: number };

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명이 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER':
      {
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      }
      break;
    case 'GUEST':
      {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      }
      break;
  }
  //   if (user.tag === 'ADMIN') {
  //     //admin타입
  //     // user; <- 타입 확인
  //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  //   } else if (user.tag === 'MEMBER') {
  //     // member 타입
  //     // user; <- 타입 확인
  //     console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  //   } else {
  //     // guest 타입
  //     // user; <- 타입 확인
  //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  //   }
}

/**tag: (타입 좁히기) 컴파일 타임 안전성을 높이고 가독성을 향상 */

/**
복습 겸 한가지 더 사례
*/

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 큰솔에 로딩중 출력
// 실패 -> 실패: 에러 메시지를 출력
// 성공-> 성공: 데이터를 출력

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩중');
      break;
    case 'FAILED':
      console.log(`에러 발생: ${task.error?.message}`);
      break;
    case 'SUCCESS':
      console.log(`성공:${task.response!.data}`);
      break;
  }
}

const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은~~',
  },
};

const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터',
  },
};

// 동시에 여러가지 상태를 표현해야되는 객체 타입을 정의할때는 선택적 프로퍼티를 사용하는 것보다 상태에 따라서 타입을 잘개 쪼개는게 좋다.
// 이렇게 state나 태그 같은 프로퍼티를 추가해서 서로소 유니온 타입으로 ㄴ만든다.
