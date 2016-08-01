var urlX = document.querySelector('meta[property=og:url]').getAttribute('content') || "Not found";
var titleX = document.querySelector('meta[property=og:title]').getAttribute('content') || "Not found";
var sourceX = document.querySelector('meta[property=og:site_name]').getAttribute('content') || "Not found";
var dateX = document.querySelector('meta[name=date]').getAttribute('content') || document.querySelector('meta[property=article:published]').getAttribute('content') || document.querySelector('meta[property=article:published_time]').getAttribute('content') || "Not found";
var descriptionX = document.querySelector('meta[property=og:description]').getAttribute('content') || "Not found";
var keywordsX = document.querySelector('meta[name=keywords]').getAttribute('content') || document.querySelector('meta[name=news_keywords]').getAttribute('content') || "Not found";
var imageurlX = document.querySelector('meta[name=twitter:image]').getAttribute('content') || "Not found";

//need to run a check to see if url already in table and, if so, alert and stop script here

var modalCss = "#humphModal { display: none; position: fixed; z-index: 100; width:100%; height:100%; top:0; left:0; background-color: rgba(0,0,0,0.4); } #humphContent { display: none;position: fixed;z-index: 101;width: 50%;min-width: 500px;min-height: 400px;max-height:700px;top: 200px;left: 25%;background-color: #FFFFFF; font-size: 18px;} #humphHeader {font-size: 26px; width:100%;background-color: #5A3B4D;height:50px;line-height: 30px;color: #FFFFFF;} .humph-unit {width: 100%;margin: 5px;height: 70px;} .humph-input {height: 30px;border: 2px solid #C4C4C4;border-radius: 2px;background-color: #F2F2F2;width: 90%;font-size: 18px;} #humphClose {position: relative;float: right;margin: 5px;} #humphSubmit {background-color: #5A3B4D;font-size: 24px;color: #FFFFFF;width: 80px;height: 40px;}"
    
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
    var initHumphContent = document.createElement("div").setAttribute("id", "humphContent");
    var humphForm = document.createElement("form").setAttribute("action", "http://bellalharbi.com/forbell/humph.php").setAttribute("method", "post");
    var humphContent = document.getElementById("humphContent");
    humphForm.appendChild(initHumphContent);
    var humphUnitVal, humphInputVal, humphInputName, humphInputType;
    var humphModalUnit = document.createElement("div").setAttribute("class", "humph-unit").innerHTML = humphUnitVal;
    var humphInput = document.createElement("input").setAttribute("class", "humph-input").setAttribute("value", humphInputVal).setAttribute("name", humphInputName).setAttribute("type", humphInputType);
    var initHumphHeader = document.createElement("div").setAttribute("id", "humphHeader");
    humphContent.appendChild(initHumphHeader);
    var humphHeader = document.getElementById("humphHeader")
    humphHeader.innerHTML = 'Missing '+indArray.length+' fields <div id="humphClose">x</div>';
    //fill modal content
    for (var i = 0, i < 7, i++){
        if (i=0){
            humphUnitVal = "URL";
            humphInputVal = urlX;
            humphInputName = "url";
            humphInputType = "url";
        } else if (i=1){
            humphUnitVal = "Title";
            humphInputVal = titleX;
            humphInputName = "title";
            humphInputType = "text";
        } else if (i=2){
            humphUnitVal = "Source";
            humphInputVal = sourceX;
            humphInputName = "source";
            humphInputType = "text";
        } else if (i=3){
            humphUnitVal = "Publish Date";
            humphInputVal = dateX;
            humphInputName = "date";
            humphInputType = "date";
        } else if (i=4){
            humphUnitVal = "Description";
            humphInputVal = descriptionX;
            humphInputName = "description";
            humphInputType = "text";
        } else if (i=5){
            humphUnitVal = "Keywords";
            humphInputVal = keywordsX;
            humphInputName = "keywords";
            humphInputType = "text";
        } else if (i=6){
            humphUnitVal = "Image Url";
            humphInputVal = imageurlX;
            humphInputName = "imageurl";
            humphInputType = "url";
        }
        humphContent.appendChild(humphModalUnit);
        humphContent.appendChild(humphInput); 
    }
    var humphSubmit = document.createElement("input").setAttribute("type", "submit").setAttribute("value", "Submit").setAttribute("id", "humphSubmit");
    humphContent.appendChild(humphSubmit);
} else {
    var info = 'url='+urlX+'&title='+titleX+'&source='+sourceX+'&date='+dateX+'&description='+descriptionX+'&keywords='+keywordsX+'&imageurl='+imageurlX;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://bellalharbi.com/forbell/humph.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(info);
} 
