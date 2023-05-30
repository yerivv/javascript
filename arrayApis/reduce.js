"use strict";
import {numbers, students, fruits } from './data.js'

//reduce메서드란 (현없에서 잘 사용함)
//배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값을 나옴.
//리듀스 함수란 : 누적값(acc)-초기값, 현재값(cur), 현재인덱스(idx), 원본배열(src)

const result = numbers.reduce((acc, cur, idx, src) => {
  console.log('acc:', acc, 'cur:', cur, 'idx:', idx);
  return acc + cur;
}, 0) //0 == acc 초기값
console.log(result);

//중복된 값 제거
const result2 = fruits.reduce((acc, cur) => {
  console.log('acc:', acc, 'cur:', cur);
  if(acc.includes(cur) === false){ //포함 값이 없으면
    acc.push(cur); //현재값을 넣어라.
  }
  return acc;
}, [])// 빈값으로 초기
console.log(result2);