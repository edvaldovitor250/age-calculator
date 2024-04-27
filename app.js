var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('chosenDate');




var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageSeconds = document.getElementById('ageSeconds');
var agemil = document.getElementById('agemil');


datePicker.addEventListener('change', function(){
    alert(this.value)
})