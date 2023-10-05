// let year=1990;
// year=1991;
// const age=10-5;
// const age1=10+4

// console.log(age,age1);
// console.log(age*5,2**3);
// // addition operator//
// const lastname='srikanth';
// const firstname='siddatam';
// console.log(firstname   +   lastname );
// // assignment operator//
// let x=10+5;
// x+=5;//x=x+5
// x*=5;//x=x*5
// x++;//x=x+1
// console.log(x);
// // comparision operator//
//  console.log(age<age1);
// //  Assignment coading
// const marksweight=78;
// const marksheight=1.69;
// BMIofmarks=marksweight/(marksheight**2);
// console.log(BMIofmarks);
// const jhonesweight=92;
// const jhonesheight=1.95;
// BMIofjhones=jhonesweight/(jhonesheight**2);
// console.log(BMIofjhones);
// console.log(BMIofmarks>BMIofjhones);
// if(BMIofmarks>BMIofjhones)
// {
//     console.log("marks bmi is greater than jhons" + BMIofmarks)

// }
// else{
//     console.log("jhones bmi is less than marks" +BMIofjhones);

// }
// console.log(typeof('a'))
// console.log(typeof(.878))


// Equslity == and ===
// 
// 
// boolean logic
//   const sri=true//A
//   const srikanth=true//B
//   const srika=false;

//   console.log(sri||srikanth);
//   console.log(!sri);
//   if(sri&&srikanth&&!srika)
//   {
//     console.log('i am good boy');
//   }
//   else{
//     console.log("i am not a good boy");
//   }
//  
// switch statement
// let day="wenesday";
// switch(day)
// {
//     case "monday":
//         console.log("it is good to plan");
//         break;
//         case "thursday":
//             console.log("it not a good day");
//              break;
//         default:
//             console.log("hddbhdghsdn")
            

// }
// assingment
// const bill=275;
// const tip = bill <=300 && bill>=50 ? bill*0.15 : bill*0.2;
// console.log(`the bill was ${bill} , the tip ${tip} the total bill is${tip+bill}`)

// 
// 
// function
// function logger(){
//     console.log("i am srikanth");
// }
// // calling /revoking function/
// logger()  
// logger() 
// logger()
// function srikanth(apples,pistha){
//     const ab=("i prepare a juice with ${apples} ,apples and by the adding of the ${pistha},pistha")
//     return ab;
// }
// const a=srikanth(3 ,8 )
// console.log(a)
// let srika=srikanth(56,98)
// console.log(srika)
// 
// 
// 
// Declaration
function age(birthyear){
    return 1950-birthyear;
}
const a=age(1920)
console.log(a)
// 
// 
// Expression 
const age2=function (birthyear)
{
    return 1950-birthyear;
}
const ab=age2(1920)
console.log(a , ab)