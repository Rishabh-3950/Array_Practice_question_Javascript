// question1--create an array containing the name of fruits .use both array literals and constructor
// using array literals
const fruits=["mangoes","banana","apple","blueBarry"];
console.log(fruits);
//using array constructor
const fruits1=new Array("mangoes","grapes","apple","blueberry");
console.log(fruits1);

//question2--access element of array using their index print first and last element.
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

//question3--modify the second element of array
fruits[1]="guava";
console.log(fruits);

//question4--add an element in the last of array and first in the array.
//push()--used for add element in the last of an array.and returning the new length of an array
fruits.push("licchie","strawberry");
console.log(fruits);

//unshift()--this method used for add element in the first of an array.
fruits.unshift("orange");
console.log(fruits);

//question5---remove an element from an array.using pop() and shift()
//pop()--this method used for removing element from last in an array. and return the poped element
fruits.pop();
console.log(fruits);

//shift()--this method used for remove first element from an array.
fruits.shift();
console.log(fruits);

//question6--iterate over an array
//using for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//using for of loop
for(let fruit of fruits){
    console.log(fruit);
}

//question7--find index of specific fruits
//we can find the index of any fruits using indexOf()--this return the index of specific element
let index=fruits.indexOf('mangoes');
console.log(index);

//question8--check for all element metting the condition
//in this we can use every() method it check every condition than return true;
const num=[2,4,6,12,8,14];
function isEven(number){
    return number%2==0;
    

}
let result=num.every(isEven);
console.log(result);

//some method---this method check the condition in an array if condition met with any element of an array it will return true.
const num1=[1,2,3,4,5,6];
function isEven(number){
    return number%2==0;
    

}
let result1=num.some(isEven);
console.log(result);

//question 9--find the first fruit that length is greater than 5;
// in this we can use find() method --this method return the first element that satisfy the condition.
const arr1=new Array("mango","grapes","apple","strawberry");
let firstFruit=arr1.find(function(array){
return array.length>5;    
})
console.log(firstFruit);

//let's take one more example--find the first number greater than 5;
const numArray=new Array(1,4,3,2,6);
let num2=numArray.find(function(element){
     return element>5;
})
console.log(num2);

//question-10--fliter the array and return the new array that satisfy the condition provided by function.
const vegetables=["potato","tomato","cucumber","onion","cabbage"];
const newArray=vegetables.filter(function(array){
    return array.length%2==0;


})
console.log(newArray);

//let's take one more example
//filter the aaray whose age is greater than 18;
const age=new Array(34,12,45,21,14,16);
const newAge=age.filter(function(element){
  return element>18;
})
console.log(newAge);

//filter even no. form given array
const numArrays=new Array(2,5,6,7,8,9);
const evenNum=numArrays.filter(function(element){
return element%2==0;
})
console.log(evenNum);

// sort the array in accending order and decending order alphabetically
// in this we can use sort method 
const arr=["geeks","for","geeks"];
arr.sort();
console.log(arr);

//decending order
arr.reverse();
console.log(arr);

//sort method doesn't proper work in numeric value;
//let's take an examples
const number=[20, 5.2, -120, 100, 30, 0];
console.log(number.sort());//[-120,0,100,20,30,5.2]


const num3=[20, 5.2, -120, 100, 30, 0];
num3.sort(function(a,b){
    return a-b;
})
console.log(num3);

//question13--create a comma seprate list of fruits array;
let newFruit=fruits.join(',');
console.log(newFruit);

//question14--create the fruits array in upperCase.
//in this we can use map method -- this return the new array after applying a function each element of array.
const fruitss=new Array("mango","grapes","banana","strewBary");
const newFruits=fruitss.map(function(array){
          return array.toUpperCase();
        })
        console.log(newFruits);

//let's take one more examples
//create a  new array of given array after square of each element
const arr2=new Array(2,4,5,6,7,8);
const Square=arr2.map(function(n){
    return n**2;
})
console.log(Square);
//concate A with all element of an array
const name1=new Array("Rishabh","Rajan","Abhishek","Rajesh");
const nameWithA=name1.map(function(element){
    return element+'A';
})
console.log(nameWithA);

//calculate the sum of array .
//we can use reduce method
const num4=new Array(7,8,9,5,4,32,2);
const sum=num4.reduce(function(acc,curr){
    acc+=curr;
    return acc;
},0)
console.log(sum);

//calculate multiply of all element of an array.
const multiply=num4.reduce(function(acc,curr){
    acc*=curr;
    return acc;
},1)
console.log(multiply);

//remove duplicate from array
const arr5=new Array(1,2,1,3,1,5,5,6,3);
const arr6=new Array();
for(let num  of arr5 ){
    if(arr6.includes(num)===false){
        arr6.push(num);
    }
}
console.log(arr6);
//Merge two array;
const arr7=new Array(7,8,6,8,7,50);
const arr8=new Array(56,78,89,56,45);
const arr9=arr7.concat(arr8);
console.log(arr9);

//
const name2=[["ram","shyam"],["rishabh"],"Rajan"];
const names=name2.flat();
console.log(names);



