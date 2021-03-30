var conModel=document.getElementsByClassName("confirmboxmodal")[0];
var conbtn=document.querySelectorAll("i");
var conNo=document.getElementById("n");
var k;
for (k = 0; k < conbtn.length; k++) {
    let btn=conbtn[k];
    btn.onclick=function() {
        conModel.style.display="flex";
    }
}
//akshit
conNo.onclick=function () {
    conModel.style.display="none";
}