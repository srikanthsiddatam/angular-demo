/*// // literials
// let object={
//     name:"srikanth",
//     age:22,
//     profession :"developer"


// }
// console.log(object);
// console.log(object.profession="tester");
// console.log(object);
// // 
// // 
// // using function
// function obj(name,age)
// {
//     this.name=name,
//     this.age=age
// }
// console.log(obj);
// // 
// // 
// // 
//  let obj1=new obj('srikanth','21')
// console.log(obj1);

// // 
// // 
// // methods
let obj={
    name:"srikanth",
    age:43,
}
// console.log(Object.seal(obj,obj1))
// obj.name1="anudep"
// obj.city="hyderbad";
// console.log(obj)
// delete obj.city;
// console.log(obj);
// // ---------------------------
let obj1={
    living:"pAMURU",
    company:"ttttttt"
}
console.log(Object.freeze(obj))
// console.log(obj1);
// console.log(Object.assign(obj,obj1));
// console.log(obj);*/
//variables
/*a=10;
b=19;
console.log(a+b);
var a=10;
var g=17.09;
var k='srikanth';
var b=true;
var m='j';
console.log(a);
console.log(g);
console.log(k);
console.log(b);
console.log(m);
let m1=19;
const gp=89;
var e='juyhh';
console.log(typeof(m1+e))
console.log(typeof(e));
console.log(m1);console.log(typeof(e));
var result;
result=87;
result =String(result);
console.log(result);
console.log(typeof(1));
q='89';
q=String(q);
console.log(typeof(q))
a="The use of the "
console.log(a);
console.log(a.length);
console.log(a.indexOf('u'));
console.log(a.charAt(2));
console.log(a.toLowerCase());
console.log(a.toUpperCase());
console.log(a.toString());*/
//objects
/*function person(name,age,colour)
{
    this.name=name;
    this.age=age;
    this.colour=colour;

}
var p1=new person("srikanth",67,"red");
var p2=new person("sri",69,"green");
console.log(p1.name);
console.log(p1.age);
console.log(p1.colour);
console.log(p2.name);
console.log(p2.age);
console.log(p2.colour);*/
//methods
//var person={name:"sri",age:24}
/*changename:function cn(name)
{
this.name=name;

}
console.log(person.name);
cn.changename("srikanth");
console.log(person.name);*/
//method direct
/*function person(name,age)
{
    this.name=name;
    this.age=age;
    this.yob=yob
}
    function yob(age)
    {
        return 2022-this.age;
    }

var p1=new person("srikanth",10);
console.log(p1.name);
console.log(p1.age);
p1.yob(19);
console.log(p1.yob())*/
//Arrays
/*var names=new Array("srikanth","rani","nandu","kani");
console.log(names);
console.log(names[1]);
console.log(names[0]);
var a=new Array();
a[0]=10;
a[1]=50;
a[2]=90;
console.log(a.length);
console.log("using the loop");
for(i =0;i<a.length;i++)
{
    console.log(a[i]);
}
console.log(names.length)*/
//conbination of arrys
/*var a=new Array("5","8");
var b=new Array("7","9");
console.log(a,b)
var courses=a.concat(b);
console.log("concat "+courses)*/
//pop and push
/*var a=new Array("5","8");
var b=new Array("7","9");

console.log( "pop the values " +a);
a.pop();
console.log("a values ofter pop " + a);
a.push("hello");
a.push(98)
console.log("a values ofter push " + a);
delete a[2]
console.log("a values after delete " + a);*/
var date1 =new Date(2023);
console.log(date1.getMinutes())









