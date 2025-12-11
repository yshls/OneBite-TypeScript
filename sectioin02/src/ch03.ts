let user: { id?: number; name: string } = {
  id: 1,
  name: '이정환',
};

user.id;

let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};

config.apiKey = 'hacked';
