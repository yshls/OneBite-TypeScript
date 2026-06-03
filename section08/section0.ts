type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
};

function printAuthorInfo(author: PostList['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post: PostList = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
    age: 28,
  },
};

// 튜블과 함께 사용하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
