"use strict";
import {numbers, students, fruits } from './data.js'

//some 메소드란
//요소를 순회하면서 주어진 함수가 있다면 true 반환

console.log('과일중에 배가 있나요?', fruits.some((fruit) => fruit === '배'));
console.log('과일중에 배가 있나요?', fruits.some((fruit, index) => {
  console.log('index : ', index, '과일 :', fruit);
  return fruit === '배'
})); //순회하고 배가 나왔기에 2번까지만 노출

console.log('숫자 중에 7이상의 숫자가 있나요?', numbers.some((number) => number >= 8));

console.log('수학점수 100점인 학생이 있나요?', students.some((student) => student.mathematics === '100'));
console.log('영어점수 50점 미만인 학생이 있나요?', students.some((student) => student.english < '50'));