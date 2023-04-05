const arr = [2,9,0,8];
let txt = '';
arr.forEach(my_fun);
function my_fun(num){
    txt+=num;
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
fruits.shift();
fruits.unshift("Apple");
fruits[fruits.length] = "Strawberry";
const citrus = fruits.slice(1);
const veg = ["tomato","carrot"];
const food = veg.concat(fruits);

//flattening
const a = [[1,2],[3,4],[5,6]];
const b = a.flat();

//array output using toString() method
document.getElementById("demo").innerHTML = fruits.toString();