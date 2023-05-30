//자주 사용 할 것
export const numbers = [1, 2, 3, 4, 5, 6, 7];

export class Student {
  constructor(name, koreanLanguage, english, mathematics){
    this.name = name;
    this.koreanLanguage = koreanLanguage;
    this.english = english;
    this.mathematics = mathematics;
  }
}

const student1 = new Student('김예리', 95, 77, 99);
const student2 = new Student('조상희', 50, 45, 32);
const student3 = new Student('김예리1', 10, 27, 59);
const student4 = new Student('김예리2', 95, 57, 29);

export const students = [student1, student2, student3, student4];
export const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];