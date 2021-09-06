export {};

const names = ["a", "b "];

names.forEach(function(s) {
  console.log(s.toUpperCase());
});

type Point = {
  x: number;
  y: number;
}

type ID = number | string;


function outPut(p: Point, id?: ID) {
  console.log(p.x);
  console.log(id);
}

outPut({ x: 1, y: 2 });

const exp = 'a';

const a = (exp as any) as number;
console.log(typeof a);

const obj = { counter: 0 };
obj.counter = 1;

function getRequest(url: string, method: 'GET' | 'POST') {
  console.log(url, method);
}

interface Request {
  url: string;
  method: 'GET' | 'POST';
}

const req: Request = {
  url: 'https://',
  method: 'GET'
};

let obj1: null;
// obj1 = 1;

// req.method = '1';

getRequest(req.url, req.method);
