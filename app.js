let firstnumber="";
let secondnumber="";
let operator="";

function append(number){
    if(operator===""){
        firstnumber+=number;
        document.getElementById('res').value=firstnumber;
    }
    else{
        secondnumber+=number;
        document.getElementById('res').value=firstnumber+operator+secondnumber;
    }
}
function operate(op){
    operator=op;
    document.getElementById('res').value=firstnumber+operator
}

function calculate(){
    playsound();
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstnumber)+parseInt(secondnumber);
            break;
            case '-':
            result=parseInt(firstnumber)-parseInt(secondnumber);
            break;
            case '*':
            result=parseInt(firstnumber)*parseInt(secondnumber);
            break;
            case '/':
            result=parseInt(firstnumber)/parseInt(secondnumber);
            break;
            
    }
document.getElementById('res').value=result;
}
function clearresult(){
    playsound();
    firstnumber="";
    secondnumber="";
    operator="";
    document.getElementById('res').value="";
}
let clicksound=new Audio("mouse-button-click-308449.mp3");

function playsound(){
    clicksound.currentTime=0;
    clicksound.play();
}