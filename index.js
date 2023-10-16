
// document.querySelectorAll("button")[0].addEventListener("click",function(){
// alert(" i got click");
// });
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     alert(" i got click");
//     });
//     document.querySelectorAll("button")[2].addEventListener("click",function(){
//         alert(" i got click");
//         });
//         document.querySelectorAll("button")[3].addEventListener("click",function(){
//             alert(" i got click");
//             });
//             document.querySelectorAll("button")[4].addEventListener("click",function(){
//                 alert(" i got click");
//                 });
//                 document.querySelectorAll("button")[5].addEventListener("click",function(){
//                     alert(" i got click");
//                     });
//                     document.querySelectorAll("button")[6].addEventListener("click",function(){
//                         alert(" i got click");
//                         });
var a=document.querySelectorAll(".drum").length;
// console.log(a);
for(var i=0;i<a;i++){ 
    
    document.querySelectorAll(".drum")[i].id = i;

    document.querySelectorAll(".drum")[i].addEventListener("click",function(event){

        var c=new Audio("./sounds/"+event.target.id+".mp3");
        console.log(event.target.id);
        c.play();
    });

    document.addEventListener("keyup",(event)=>{
debugger;
var soundMapper = {w:0,a:1,s:2,d:3,j:4,k:5,l:6};
if(soundMapper[event.key] != undefined){
var c=new Audio("./sounds/"+soundMapper[event.key]+".mp3");
console.log(event.target.id);
c.play();
}
    })
}
