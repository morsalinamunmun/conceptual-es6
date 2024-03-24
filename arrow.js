//normal function
function add(x, y){
    const result = x+y;
    return result;
}

function show(){
    console.log('hello');
}

function printNumber(x){
    console.log('Print number', x);
}

console.log(add(2, 3));
show();
printNumber(45);

//arrow function
const added = (x, y) => x+y;  // return lage na
//second braket dile return korte hobe 
const adde = (x, y) => {
    const result = x+y;
    return result;
};