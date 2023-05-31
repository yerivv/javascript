//외부에서 사용할 수 있게 하려면 변수 앞에 export
// export const perfectScore = 100;

// export const sum = (num1, num2) => {
//   return num1 + num2;
// }

// export const avg = (num1, num2) => {
//   return (num1 + num2) / 2;
// }

// const subtracts = (num1, num2) => {
//   return num1 - num2;
// }

// export default subtracts;

//export default 로 설정할 때
const perfectScore = 100;
const sum = (num1, num2) => {
  return num1 + num2;
}
const avg = (num1, num2) => {
  return (num1 + num2) / 2;
}
const subtracts = (num1, num2) => {
  return num1 - num2;
}
export default{
  perfectScore,
  sum,
  avg,
  subtracts
}