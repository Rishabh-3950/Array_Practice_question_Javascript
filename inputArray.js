let marks=[34,56,67,78,56];
console.log(marks);
let heroes=["thor","hulk","ironman","antman","spideman","shaktimaan"];
console.log(marks[5]);
marks[0]=78;
console.log(marks);
//for loop
for(let i=0;i<heroes.length;i++)
    {
        console.log(heroes[i]);

    }
//for of
for(let element of heroes){
    console.log(element);
}
let cities=["delhi","gurgaon","mainpuri","mathura"];
for(let city of cities){

    console.log(city);
}
//practice question
const students=[85,97,44,37,76,60];
let sum=0;
let average;
for(let i=0;i<students.length;i++){
    sum=sum+students[i];
    average=sum/students.length;



}
console.log(average);

const price=[250,645,300,900,500];
for(let i=0;i<price.length;i++){
    let offer=price[i]/10;
    price[i]=price[i]-offer;
}
console.log(price);
let items=["apple","potato","tomato"];
//items.push("chips","grapes");
//items.pop();
 let string=items.toString();
console.log(string);


//practice question
const companies=["bloomberg","Microsoft","uber","google","ibm","netflix"];
//companies.shift();
//console.log(companies);
//companies.splice(2,1,"ola");
//console.log(companies);
companies.push("Amazon");
console.log(companies);

//array constructor--it is used to create array object
const array1=new Array(1,2,3,4,5);
const array2=new Array(10);
console.log(array1);
console.log(array2);
let text=array1.constructor;
console.log(text);


const language=new Array("html","css","java","javascript");
console.log(language.length);
console.log(language[0]);




