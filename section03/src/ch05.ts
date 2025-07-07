/**타입추론
 */

let a = 10;
let b = 'hello';

let c = {
  id: 1,
  name: '이정환',
  profile: {
    nickname: 'winterwood',
  },
  urls: ['naver.com'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
  return 'hello';
}

// let d:any랑은 틀리다. 이렇게 타입을 정의해서하는 것은 명시적 any타입
let d; // 암묵적인 any타입-> 계속 진화함
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();

const num = 10;
const str = 'hello';

let arr = [1, 'string'];
