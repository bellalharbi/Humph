var pageData = collectData();
var urlX = document.querySelector('meta[property=og:url]').getAttribute('content');
var titleX = document.querySelector('meta[property=og:title]').getAttribute('content');
var sourceX = document.querySelector('meta[property=og:site_name]').getAttribute('content');
var dateX = document.querySelector('meta[name=date]').getAttribute('content') || document.querySelector('meta[property=article:published]').getAttribute('content') || document.querySelector('meta[property=article:published_time]').getAttribute('content');
var descriptionX = document.querySelector('meta[property=og:description]').getAttribute('content');
var keywordsX = document.querySelector('meta[name=keywords]').getAttribute('content') || document.querySelector('meta[name=news_keywords]').getAttribute('content');
var imageurlX = document.querySelector('meta[name=twitter:image]').getAttribute('content');


function collectData(){
    pageData = [url, title, source, date, description, keywords, imageurl];
}

chrome.runtime.sendMessage({url: urlX, title: titleX, source: sourceX, date: dateX, description: descriptionX, keywords: keywordsX, imageurl: imageurlX} , function(response){
    console.log(response);
})
