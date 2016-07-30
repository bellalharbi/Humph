var pageData = collectData();
var url = document.querySelector('meta[property=og:url]').getAttribute('content');
var title = document.querySelector('meta[property=og:title]').getAttribute('content');
var source = document.querySelector('meta[property=og:site_name]').getAttribute('content');
var date = document.querySelector('meta[name=date]').getAttribute('content') || document.querySelector('meta[property=article:published]').getAttribute('content') || document.querySelector('meta[property=article:published_time]').getAttribute('content');
var description = document.querySelector('meta[property=og:description]').getAttribute('content');
var keywords = document.querySelector('meta[name=keywords]').getAttribute('content') || document.querySelector('meta[name=news_keywords]').getAttribute('content');
var imageurl = document.querySelector('meta[name=twitter:image]').getAttribute('content');


function collectData(){
    pageData = [url, title, source, date, description, keywords, imageurl];
}

chrome.runtime.sendMessage(pageData, function(response){
    console.log(response);
})
