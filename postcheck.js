function fun()
{
    var n=document.getElementById("n").value;
    var email=document.getElementById("email").value;
    var number=document.getElementById("number").value;
    var p1=document.getElementById("p1").value;
    var p2=document.getElementById("p2").value;
    var un=document.getElementById("un").value;
    var m=document.getElementById ("m");
    var f=document.getElementById("f");
    var age=document.getElementById("age");

    let pattern =/^[A-z\s]+$/;
    
    if(n==""||n==null)
    {
        window.alert("NAME IS NOT ENTERED");
        return false;

    }
    else if(!pattern.test(n))
    {
        document.getElementById("en").innerHTML="*name contain only alphabets and space";
        document.getElementById("en").style.color="red";
        return false;
    }
    else{
        document.getElementById("en").style.color="green"
        document.getElementById("en").innerHTML="OK";
        
    }


    
    if(email=="")
    {
        window.alert("EMAIL ID IS NOT ENTERED");
        return false;
    }
   

    var nn=number.length;

    if(number=="")
    {
        window.alert("PHONE NUMBER IS NOT ENTERED");
        return false;
    }
    else if(nn!=10)
    {
        document.getElementById("enumber").innerHTML="*enter 10-digit number";
        document.getElementById("enumber").style.color="red";
        return false;
    }
    else{
        document.getElementById("enumber").innerHTML="OK";
        document.getElementById("enumber").style.color="green"
    }

   var cp=/^([A-Za-z0-9]){10,12}$/g
    var rp=p1.match(cp);
    
    if(p1=="")
    {
        window.alert("PASSWORD  IS NOT ENTERED");
        return false;
    }
    else if(!rp)
        {
            document.getElementById("ep1").innerHTML="*password formate is wrong";
            document.getElementById("ep1").style.color="red";
            return false;
        }
   else if(p1.search(/[0-9]/)==-1)
    {
        document.getElementById("ep1").innerHTML="*password contain atleast one number";
        document.getElementById("ep1").style.color="red";
        return false;
    }
    else if(!rp && (p1.search(/[A-Z]/)==-1))
    {
        document.getElementById("ep1").innerHTML="*password contain atleast one uppercase letter";
        document.getElementById("ep1").style.color="red";
        return false;
    }
    else if(!rp && (p1.search(/[a-z]/)==-1))
    {
        document.getElementById("ep1").innerHTML="*password contain atleast one lowercase letter";
        document.getElementById("ep1").style.color="red";
        return false;
    }
    else{
        document.getElementById("ep1").innerHTML="OK";
        document.getElementById("ep1").style.color="green"
    }

    if(p2=="")
    {
        window.alert("RE-PASSWORD  IS NOT ENTERED");
        return false;
    }
   else if(p1!=p2)
    {
        document.getElementById("ep2").innerHTML="*you entered wrong password ";
        document.getElementById("ep2").style.color="red";
        return  false;
    }
    else{
        document.getElementById("ep2").innerHTML="OK";
        document.getElementById("ep2").style.color="green"
    }

    var cun=/[a-z0-9.]{8,10}/g
    var run=un.match(cun);

    if(un=="")
    {
        window.alert("USER NAME IS NOT ENTERED");
        return false;
    }
    else if(!run)
    {
        document.getElementById("eun").innerHTML="*contain 8-10 characters,only lower case,digits,symbols";
        document.getElementById("eun").style.color="red";
        return false;
    }
    else{
        document.getElementById("eun").innerHTML="OK";
        document.getElementById("eun").style.color="green"
    }

    if(m.checked)
    {
        ;
    }
    else if(f.checked)
    {
      ; 
    }
    else
    {
        window.alert("GENDER IS NOT SELECTED");
        return false;
    }

    if(age.value=="nselect")
    {
        window.alert("AGE IS NOT SELECTED");
        return false;
    }
    
    
}