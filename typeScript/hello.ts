let anyValue: any = '123';
console.log(anyValue.myName);
console.log(anyValue.myName.firstName);
interface Person {
  name: string;
  age: number;
}
const tom: Person = {
  name: 'tom',
  age: 1
};
