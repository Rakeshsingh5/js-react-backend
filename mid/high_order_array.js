const arr = [1,2,3,4]
for (const element of arr) {
    // console.log(element);
}

const map = new Map();
map.set('in' , "india");
map.set(1 , "hello");

for (const [key, value] of map) {
    // console.log(key , ':-' ,value);
}

const myobj = { 
    js : "javasc",
    cpp : "c++",
    rb : "ruby"
} 
for (const key in myobj) {
    console.log(key);
    console.log(myobj[key]) 
    
    
}

