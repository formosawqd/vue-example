function getList<T>(a: T, b: T): T[] {
  return [a, b];
}

let res = getList<number>(1, 2);
console.log(res);

let a: String = 'formosa';

let b: number = 1;

interface Iobj {
  name: String;
  age: number;
  isCn?: boolean;
}
let obj: Iobj = {
  name: 'formosa',
  age: 13,
  isCn: true,
};
