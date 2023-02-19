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

const { type: type2, color: color2, model: model2, gear: gear2 } = car;

//{type,color} = car;
const func1 = ({ type, color }) => {
  console.log(type);
  console.log(color);
};

func1(car);

const func2 = (car) => {
  const { type, color } = car;
  console.log(type);
  console.log(color);
};

func2(car);

// ES6 예제
const [item1, ...otherItems] = [0, 1, 2];
const { other, ...others } = { one: 1, two: 2, three: 3, four: 4, other: 0 };
console.log('combined >> other', other); // other = 0
console.log('combined >> others', others); // others = { one: 1, two: 2,three: 3, four: 4}

let abc = [1, 2, 3, 4];
console.log(...abc);

const car1 = {
  type: 't1',
  color: 'S1',
  model: 2017,
};

const car2 = {
  type: 't2',
  color: 'S2',
  model: 2019,
};

const { type} = car1;
console.log(type);

const func = ({ type4 }) => {
  console.log(type);
};

const newcar = { ...car1, ...car2 }; //===car2
func(newcar); //===car2

func({ ...car1, ...car2 });
