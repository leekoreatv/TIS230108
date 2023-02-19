/*
    rest 연산자 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array 메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

    ES 6에서는
    rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.
*/

var [first, others] = [1, 2, 3, 4, 0];
console.log('first', first);
console.log('first', others);

var [first, ...others] = [1, 2, 3, 4, 0];
console.log('first', first);
console.log('first', others);

function func3(...args) {
  var [first, ...others] = args;

  console.log('first', first);
  console.log('first', others);
}

func3(1, 2, 3, 4, 0);
