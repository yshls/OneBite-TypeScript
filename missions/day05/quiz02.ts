type Dog = {
  name: string;
  color: string;
};

type Cat = {
  name: string;
  age: number;
};

type Animal = Dog | Cat;
type DogCat = Dog & Cat;
