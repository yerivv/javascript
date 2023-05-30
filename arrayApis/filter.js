"use strict";
import {numbers, students, fruits } from './data.js'

//filter메서드는 말 그대로 필터링 해주는 것.
console.log('짝수만 나와요', numbers.filter((number) => number % 2 === 0))

console.log('홀수만 나와요', numbers.filter((number) => number % 2 === 1))

console.log('영어점수가 50점 이상한 학생들은?', students.filter((student) => student.english >= 50))
