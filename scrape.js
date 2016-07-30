var urlX = document.querySelector('meta[property=og:url]').getAttribute('content') || "Not found";
var titleX = document.querySelector('meta[property=og:title]').getAttribute('content') || "Not found";
var sourceX = document.querySelector('meta[property=og:site_name]').getAttribute('content') || "Not found";
var dateX = document.querySelector('meta[name=date]').getAttribute('content') || document.querySelector('meta[property=article:published]').getAttribute('content') || document.querySelector('meta[property=article:published_time]').getAttribute('content') || "Not found";
var descriptionX = document.querySelector('meta[property=og:description]').getAttribute('content') || "Not found";
var keywordsX = document.querySelector('meta[name=keywords]').getAttribute('content') || document.querySelector('meta[name=news_keywords]').getAttribute('content') || "Not found";
var imageurlX = document.querySelector('meta[name=twitter:image]').getAttribute('content') || "Not found";

var modalCss = "#humphModal {
    display: none;
    position: fixed;
    z-index: 100;
    width:100%;
    height:100%;
    top:0;
    left:0; }
#humphContent {
    display: none;
    position: fixed;
    z-index: 101;
    width: 50%;
    min-width: 500px;
    min-height: 400px;
    max-height:700px;
    top: 200px;
    left: 25%;
    background-color: rgba(0,0,0,0.4); }
.humph-unit {
    
}
.humph-input {
    
}
.humph-description {
    
}
.humph-close-modal {
    
}
.humph-submit-button {
    
}
    "
    
var humphStyle = document.createElement('style');
humphStyle.type = 'text/css';
if (humphStyle.styleSheet) {
    humphStyle.styleSheet.cssText = modalCss; //IE
} else {
    humphStyle.innerHTML = modalCss;
}
document.getElementsByTagName("head")[0].appendChild(humphStyle);

var pageData = [urlX, titleX, sourceX, dateX, descriptionX, keywordsX, imageurlX];
//check if any values not found
var indx = pageData.indexOf("Not found");
var indArray = [];
while (indx > 0){
    indArray.push(indx);
    indx = pageData.indexOf("Not found", indx + 1);
}
if (indArray.length > 0){
    //modal where I can manually insert values for the missing variables
    document.createElement("div").setAttribute("id", "humphModal");
    document.createElement("div").setAttribute("id", "humphContent");
    var humphContent = document.getElementById("humphContent");
    //fill modal content
    //create loop for i = [1, 7]
    //for each i, a humph-unit and humph-input
    //humph-input values = ___X vars, if "Not found", value = ""
    var humphModalUnit = document.createElement("div").setAttribute("class", "humph-unit");
    var humphInput = document.createElement("input").setAttribute("class", "humph-input");
    humphContent.appendChild(humphModalUnit);
    humphContent.appendChild(humphInput); //define input name for each value of i
    
    //on submit, post data to humph.php
    
} else {
    //fuck, do i even need to send message??? I should xhr and post directly to humph.php
    chrome.runtime.sendMessage({url: urlX, title: titleX, source: sourceX, date: dateX, description: descriptionX, keywords: keywordsX, imageurl: imageurlX} , function(response){
        console.log(response);
    });
} 
