const arr = [ "js" ,"hello" , "java"];

arr.forEach(function (item){
    // console.log(item);
})

arr.forEach((val) => {
    // console.log(val)
})

const mycode =  [
    {   name1 : "rakesh",
        name2 : "mamta"
    }
    ,
    {
        name1 : "sidhi",
        name2 : "bansi"
    },
 ]

 mycode.forEach( (item) => {
    // console.log(item.name1);
 })


 const vec = [1 ,2,3,4,5,6,6,7,8];
 const myarr =  [];

 vec.forEach((num)=> {
    if(num >4)myarr.push(num);

 })

//  console.log(myarr);


 const newnum= vec.filter( (num) => { return num>4})  //if put scope {} always use return;
//  console.log(newnum);

 const newnum1= vec.filter( (num) =>   num<4)  
//  console.log(newnum1);

const total = vec.reduce((acc,cur) =>  {
    // console.log(`acc : ${acc}`);
    return acc+cur } ,0);
// console.log(total); 

const tot = vec.reduce((acc , curr) => acc+curr ,0);  
console.log(tot); 

 
