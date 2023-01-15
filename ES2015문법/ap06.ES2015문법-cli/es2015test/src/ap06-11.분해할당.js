/*
 (구조) 분해 할당에 대해서 알아본다.


*/
//배열의 분해 할당은 배열의 순번을 이용해서 매핑
const points = [20, 30, 40];
const x1 = points[0]; //20
const y1 = points[1]; //30
const z1 = points[2]; //40

console.log('1.', x1, y1, z1);

const [x2, y2, z2] = points;
console.log('2.', x2, y2, z2);

const [x33, z33] = points;
console.log('3.', x33, z33);

//두번째 값 무시
const [x3, , z3] = points;
console.log('4.', x3, z3);

//객체 분해 할당 학습
const car = {
  type: 't',
  color: 'S',
  model: 2017,
};

//ES5
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;

console.log(type1, color1, model1);

//객체 분해 할당을 이용해서 type, color, model  만드시오.
const { type, color, model, gear } = car;
console.log(type, color, model, gear);
