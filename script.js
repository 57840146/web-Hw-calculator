var answerb=0;//trigger, to see if is the answer from last step
var decimal_point=0;

function AC(){//all clear
    document.getElementById("result").value="0";
    answerb=0;
    decimal_point=0;
}

function display(value){//display
    if(document.getElementById("result").value=="0" && (value=='-'|| value=='+' || value=='*' || value=='/' || value=='.')){//avoid "- + * / ." signs at beginning
        return;
    }
    if(value=='-'|| value=='+' || value=='*' || value=='/'){//second decimal point
        decimal_point--;
    }
    if(document.getElementById("result").value=="0" || answerb==1){//will replace the default result 0
        document.getElementById("result").value=value;
        answerb=0;
    }else if(value=='.'){// avoid double decimal points
        if(decimal_point>=1){
            return;
        }
        decimal_point++;
        document.getElementById("result").value+=value;
    }else{
        document.getElementById("result").value+=value;
    }
}

function answer(){//equal sign function
    var answer=eval(document.getElementById('result').value);
    document.getElementById('result').value=answer;
    answerb=1;
    decimal_point=0;
}
