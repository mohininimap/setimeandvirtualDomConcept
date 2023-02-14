function mulNum(num1,num2){
return num1* num2
}

setTimeout(()=>{
    let result=mulNum(4,5);
   
    document.getElementById("display1").className+="  style1"
    document.getElementById("display1").innerHTML=result
   
},4000)
