"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
//배열의 분해 할당은 배열의 순번을 이용해서 매핑
var points = [20, 30, 40];
var x1 = points[0]; //20
var y1 = points[1]; //30
var z1 = points[2]; //40

console.log('1.', x1, y1, z1);
var x2 = points[0],
  y2 = points[1],
  z2 = points[2];
console.log('2.', x2, y2, z2);
var x33 = points[0],
  z33 = points[1];
console.log('3.', x33, z33);

//두번째 값 무시
var x3 = points[0],
  z3 = points[2];
console.log('4.', x3, z3);

//객체 분해 할당 학습
var car = {
  type: 't',
  color: 'S',
  model: 2017
};

//ES5
var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1);

//객체 분해 할당을 이용해서 type, color, model  만드시오.
var type = car.type,
  color = car.color,
  model = car.model,
  gear = car.gear;
console.log(type, color, model, gear);