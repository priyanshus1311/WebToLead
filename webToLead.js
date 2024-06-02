let isChecked = false;
function beforeSubmit(event) {
    if(isChecked){
    let inputLeadDate = document.querySelector('.dateInput').value;
    document.querySelector('.outputdate').value = new Date(inputLeadDate).toLocaleDateString("en-IN");

    let inputProcust = document.querySelector('.products').value;
    document.querySelector('.outputproduct').value = inputProcust;
    }
    else{
        alert("Please verify that you are not a ROBOT");
        event.preventDefault();
    }
}

function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime()); document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
} 
setInterval(timestamp, 500); 

function captchaChecked(){
    isChecked = true;
}
