const json: string = '{"x":4 , "y":7}';
const coor = JSON.parse(json);
console.log(coor);

let greeting: string
greeting = "hello";

let num = [-1, -2, 8];
let numAboveZero: boolean | number = false;

//오류
// var foo = {};
// foo.bar = 123;
// foo.bas = 'hello';

interface Foo{
    bar: string;
    bas: number;
}

var foo = {} as Foo;//리액트에선 이렇게   ... <Foo> 는 컴포넌트 부를때와 같아서 헷갈림
foo.bar = "hello";
foo.bas = 123;
