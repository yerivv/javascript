console.log('develop js');
"use strict";
import {numbers, students } from './data.js'

//map실습
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// class Student {
//   constructor(name, koreanLanguage, english, mathematics){
//     this.name = name;
//     this.koreanLanguage = koreanLanguage;
//     this.english = english;
//     this.mathematics = mathematics;
//   }
// }

// const student1 = new Student('김예리', 95, 77, 99);
// const student2 = new Student('조상희', 50, 45, 32);
// const student3 = new Student('김예리1', 10, 27, 59);
// const student4 = new Student('김예리2', 95, 57, 29);

// const students = [student1, student2, student3, student4];
const result = numbers.map((number) => number * 2);
console.log(result);
console.log('영어 결과', students.map((student) => student.english));
console.log('학생 이름', students.map((student) => student.name));

