//ES5
/*
var HelloE5 = function()
{
    console.log('Hello from es5');
}
*/
var HelloES5 = function()
{
    console.log('Hello fom es5');
}
/*
let helloES6 = () => {
    console.log('hello from es6');
}*/
let helloES6 = () => console.log('es6');
 
helloES6();
HelloES5();


let multiplyES5 = function (x,y) {
    return x*y;
}

// let multiplyES6 = (x,y) => {return x*y};
let multiplyES6 = (x,y) => x*y;
console.log( multiplyES5(3,4));
console.log(multiplyES6(3,5));

let getProductES5 = function (id,name) {
    return{
        id : id,
        name: name
    }
}

console.log(getProductES5(1,'Iphne X'));

let getProductES6 = (id,name) => ({
    id : id,
    name : name 
});

console.log(getProductES6(2,'Samsung S5'));

const phones = [
    {name: 'Iphone 8', price:7000},
    {name: 'Iphone X', price:9000},
    {name: 'Iphone XR', price:7500},
    {name: 'Iphone SE', price:8000},
];
let priceES5 = phones.map(function(phone){
    return phone.price;
})

let priceES6 = phones.map(phone => phone.price);
console.log(priceES6)
console.log(priceES5);

let filterES5 = phones.filter(function(phone){
    return phone.price >= 5000;
})

let filterES6 = phones.filter(phone=>phone.price>=5000);
console.log(filterES5);
console.log(filterES6);