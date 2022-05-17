let email=document.getElementById("email");
let emailerror=document.getElementById("emailerror");
let pwd=document.getElementById("pwd");
let pwderror=document.getElementById("pwderror");
let ph=document.getElementById("ph");
let pherror=document.getElementById("pherror");
let a = true;
let p = true;
let n = true;



function validate(){
    let regexpemail = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3}?$)/;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let phin = /^\d{10}$/;
    let pham = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexpemail.test(email.value)){
        emailerror.innerHTML="Valid";
        emailerror.style.color="green";
        a = true;

    }
    else{
        emailerror.innerHTML="invalid";
        emailerror.style.color="red";
        a = false;


    }
    if(passw.test(pwd.value)==false){
        pwderror.innerHTML="minimum 8 characters required with atleast one alphabet (uppercase & lowercase),special character & number";
        pwderror.style.color="red";
        p = false;
    }
    else{
        pwderror.innerHTML="Strong";
        pwderror.style.color="green";
        p = true;

    }
    if((phin.test(ph.value)||pham.test(ph.value))==true){
        pherror.innerHTML="valid";
        pherror.style.color="green";
        n = true;

    }
    else{
        pherror.innerHTML="Invalid. Enter a valid phone number";
        pherror.style.color="red";
        n = false;

    }
    
    if(a && p && n == true){
        return true;
    }
    else{
        return false;
    }
    




}
    
