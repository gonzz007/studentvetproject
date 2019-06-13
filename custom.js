
document.addEventListener('DOMContentLoaded', () => {

    $('.ui .item').on('click', function () {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });
})
window.onload = function() {
/*create variable school to query element named #schoolname in universities.html */    
var school = document.querySelector('#schoolName')

let form=document.querySelector("#uni")
/* created variable to query from universities html */
let name = document.querySelector('#nameCollege')
let collegeLocation= document.querySelector('#collegeLocation')
let collegeurl = document.querySelector('#collegewebsite')
let collegeState = document.querySelector('#collegeState')
let pricecal= document.querySelector('#pricecalculator')
let val
let schoolInfo
  /*Add eventlistener to handle and run function when submit is clicked*/
form.addEventListener("submit", function (event){ 
    event.preventDefault()  
    /* API key used inorder to authenticate requests in project*/
    var key = "6cIJQHwVG2gQoWzAAn2DMbNsTde4DlCR8VENo6Zl";
    val = school.value;
    console.log(val)
    //use Fetch to grab data from API
    fetch("https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" + val + "&api_key=" + key)
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        /* location of info within API*/
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
