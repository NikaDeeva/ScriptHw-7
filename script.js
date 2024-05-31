//1
const numbers = [2, 6, 8];
numbers[1] = 10;
console.log(numbers);
// 2
const strings = ['Hello', 'String', 'JavaScript'];
strings[3] = 'GoIteens';
console.log(strings);
// 3
const sumNum = [4, 8, 11];
let sum = 0;
for (let i = 0; i < sumNum.length; i += 1){
    sum += sumNum[i];
}
console.log(sum);
// 4
const numElements = [3, 9, 5, 75, 90];
for (let i = 0; i < numElements.length; i += 1){
    console.log(numElements[i]);
}
// 5
const subjects = ['English', 'Math', 'Chemistry', 'History', 'French'];
for (let i = 0; i < subjects.length; i += 1){
    if (subjects[i].length < 5){
        console.log(subjects[i]);
    }
}
//6
const maxNum = [6, 14, 8, 54, 3, 23, 76, 5, 9, 34];
let max = maxNum[0];
for (let i = 0; i < maxNum.length; i += 1){
    if (maxNum[i] > max){
        max = maxNum[i];
    }
}
console.log(max);
//7
const evenNum = [5, 8, 45, 76, 88, 32, 9, 67, 4, 43];
let even;
for (let i = 0; i < evenNum.length; i += 1){
    if (evenNum[i] % 2 === 0){
        console.log(evenNum[i]);
    }
}