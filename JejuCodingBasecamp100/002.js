// 문제2: 배열의 내장 함수

var arr = [200, 100, 300]
arr.splice(2, 1, 1000, 300)
console.log(arr) // [200, 100, 10000, 300]
