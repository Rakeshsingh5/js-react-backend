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
    console.log(item.name1);
 })