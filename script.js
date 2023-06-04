"use strict"
var navMenuAnchorTag = document.querySelectorAll('#navigation a');
var scrollInterval;

for(var i = 0; i <navMenuAnchorTag.length ; i++){
    
    navMenuAnchorTag[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        // METHOD 1st
        scrollInterval = setInterval(scrollVertivally,50,targetSection); 

        // METHOD 2nd
     /* scrollInterval = setInterval(function(){
            scrollVertivally(targetSection);
        },50); */
    });
}

function scrollVertivally(targetSection){

    var sectionCordinate = targetSection.getBoundingClientRect();

    if(sectionCordinate.top<=0){
        clearInterval(scrollInterval);
        console.log(sectionCordinate.top);
        return;
    }
    window.scrollBy(0,50);
}


// DYNAMIC SKILL BAR 

window.addEventListener('scroll',setSkillPercent);
var colorDivs = document.querySelectorAll('.transitionDiv');

function setSkillPercent(){
    var skillCordinate = document.getElementById('skill').getBoundingClientRect();
    for(let i=0;i<colorDivs.length;i++){
        // var skillCordinate = document.getElementById('skill').getBoundingClientRect();
        if(skillCordinate.top <= window.innerHeight){
            var divWidth =  colorDivs[i].getAttribute('data-skill-percent');
            colorDivs[i].style.width = divWidth;
        }else{
            colorDivs[i].style.width = 0;
            // console.log("i am in else");
        }
    }
}

// PERCENT SCROLL SECTION 

document.addEventListener('scroll',function(){
    var value =  document.querySelector("#scrollDiv span");
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;

    var scrolled = Math.floor((scrollTop / (scrollHeight - clientHeight)) * 100);
    value.innerHTML = scrolled;
});