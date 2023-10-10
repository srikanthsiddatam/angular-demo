// var s='{"name":"srikanth" , "roll":"12345" }'
//  sa=JSON.parse(s)
// console.log(sa)
// var d={"name":"rama","roll":12345}
// da=JSON.stringify(d)
// console.log(da)
const request=new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/users");
 request.send();
 request.onload = ( )=>{

if(request.status === 200){
    console.log(JSON.parse(request.response))

}
else{
    console.log(`error ${request.status}`);
}
 }