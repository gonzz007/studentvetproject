
document.addEventListener('DOMContentLoaded', () => {

    $('.ui .item').on('click', function () {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
})
window.onload = function() {
    var school = document.querySelector('#schoolName')
let form=document.querySelector("#uni")
let name = document.querySelector('#nameCollege')
let collegeLocation= document.querySelector('#collegeLocation')
let collegeurl = document.querySelector('#collegewebsite')
let collegeState = document.querySelector('#collegeState')
let pricecal= document.querySelector('#pricecalculator')
let val
let schoolInfo
form.addEventListener("submit", function (event){ 
    event.preventDefault()  
    
    var key = "6cIJQHwVG2gQoWzAAn2DMbNsTde4DlCR8VENo6Zl";
    val = school.value;
    console.log(val)
    //using Fetch to grab data from OWM API
    fetch("https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" + val + "&api_key=" + key)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        
        schoolInfo = data.results[0].school
        
        name.innerHTML = schoolInfo.name
        collegeLocation.innerHTML=schoolInfo.city
        collegeState.innerHTML=schoolInfo.state
        collegeurl.innerHTML=schoolInfo.school_url
        pricecal.innerHTML=schoolInfo.price_calculator_url
        

        
    .catch(function() {
    }) ;
})
})
}
