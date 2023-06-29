var answerb=0;//trigger, to see if is the answer from last step
var decimal_point=0;
var basenumber=null;
var sinb=0,cosb=0,tanb=0,lnb=0,sr=0,p=0,logb=0,e=0,f=0;

function AC(){//all clear
    document.getElementById("result").value="0";
    answerb=0;
    decimal_point=0;
}

function display(value){//display
    if(sinb==1 || cosb==1 || tanb==1 || lnb==1 || sr==1 || p==1 || logb==1 || e==1 || f==1){//reset display
        document.getElementById('result').value='';
        sinb=0;
        cosb=0;
        tanb=0;
        lnb=0;
        sr=0;
        p=0;
        logb=0;
        e=0;
        f=0;
    }
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
    if (baseNumber !== null) {
        // calculate base^exponent
        let exponent = parseFloat(document.getElementById('result').value);
        let result = Math.pow(baseNumber, exponent);
        document.getElementById('result').value = result;
        // clear the base number
        baseNumber = null;
    }else{
        var answer=eval(document.getElementById('result').value);
        document.getElementById('result').value=answer;
        answerb=1;
        decimal_point=0;
    }
}

function sin(){
    let x=Math.sin(document.getElementById('result').value)
    document.getElementById('result').value=x;
    sinb=1;
}

function cos(){
    let x=Math.cos(document.getElementById('result').value)
    document.getElementById('result').value=x;
    cosb=1;
}

function tan(){
    let x=Math.tan(document.getElementById('result').value)
    document.getElementById('result').value=x;
    tanb=1;
}

function exp(){
    let x = Math.exp(document.getElementById('result').value)
    document.getElementById('result').value = x;
    e=1;
}

function log(){
    let x = Math.log10(document.getElementById('result').value)
    document.getElementById('result').value = x;
    logb=1;

}

function Ln(){
    let x = Math.log(document.getElementById('result').value)
    document.getElementById('result').value = x;
    lnb=1;
}

function square_root(){
    let x = Math.sqrt(document.getElementById('result').value)
    document.getElementById('result').value = x;
    sr=1;
}

function power(){
    baseNumber = parseFloat(document.getElementById('result').value);
    document.getElementById('result').value = '';
    p=1;
}

function factorial(){
    var number = document.getElementById("result").value;
    var result = 1;
    if(number === 0){
        result = 1;
    }else if(number < 0) {
        return;
    }else{
        for(var i = 1; i <= number; i++) {
            result *= i;
        }
    }
    document.getElementById("result").value = result;
    f=1;
}