function addNum(num1,num2){
return num1*num2
}
let result;
let timer;
timer=setInterval(()=>{
    result=addNum(4,5) ;
    document.getElementById("display").innerHTML+=result

},2000)

function stopInterval(){
    clearInterval(timer)
}
function clearDisplay(){
    document.getElementById("display").innerHTML=""
}