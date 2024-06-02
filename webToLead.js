function beforeSubmit(){
    let inputLeadDate = document.querySelector('.dateInput').value;
    document.querySelector('.outputdate').value = new Date(inputLeadDate).toLocaleDateString("en-IN");

    let inputProcust = document.querySelector('.products').value;
    document.querySelector('.outputproduct').value = inputProcust;
}