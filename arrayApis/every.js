"use strict";
import {numbers, students, fruits } from './data.js'

//every 메서드란
//배열 안에의 모든 요소가 주어진 판별함수를 통과하는지(true인지)

console.log('숫자가 모두 8이하 인가요?', numbers.every((number) => number <= 8));

console.log('학생들의 수학점수가 모두 80점 이상인가요?', students.every((student) => student.mathematics >= 80));
