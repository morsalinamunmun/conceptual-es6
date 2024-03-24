//forEach, map, find, filter,reduce

/* for(let item of arr){
    console.log(item);
}
for(let i =0; i < arr.length; i++){
    console.log(arr[i]);
} */

//forEach
const arr = [1, 2, 3];
/* const item = i => console.log(i);
arr.forEach(item); */
//or
//arr.forEach(a => console.log(a))

let sum = 0;
arr.forEach(item =>{
    sum += item;
})
console.log(sum);

//forEach function does not return anything
//map function returns an array 
const fruits = ['mango', 'apple', 'orange'];
fruits.forEach(item => console.log(item))

const result = arr.forEach(item => item);
console.log(result);
//map
const result1 = arr.map(item => item);
console.log(result1);
//map korar por folafol alada asbe main array poriborton hoy na
const result2 = arr.map(item => item * 2);
console.log(result2);
console.log('main', arr);

//array.forEach((element, index, mainArray) => {})
//fruits.forEach((item, index, arr) => console.log(item, index, arr))

fruits.map((item, index, arr) => console.log(item, index, arr))

//find method
const find = (fruits) => {
    for(let item of fruits){
        if(item === 'Lemon'){
            return item;
        }
        return null;
    }
}
const x = find(fruits);
console.log(x);

const y = fruits.find(item => item === 'mango');
console.log(y);

//filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const filter = numbers => {
    const result = [];
    for(let item of numbers){
        if(item % 2 === 0){
            result.push(item);
        }
    }
    return result;
}

const oddNo = filter(numbers);
//console.log(oddNo);

const oddNum = numbers.filter(number => number % 2 === 0)
console.log(oddNum);