// JavaScript Document

// "use Strict";

document.querySelector('#topHeaderOne').textContent="Inspector Closeau";
document.querySelector('#topHeaderTwo').textContent="Le Pink Panther";



// Window Properties

function windowSize(){
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
var winUrl = window.location;


var windowSize =  "The size of this window is " + winHeight + " pixels high by " + winWidth + " pixels wide.";
windowSize += "<br> The window is offset roughly " + screenLeft + " pixels from the left edge and " + screenTop + " pixels from the top.";
windowSize += "<br> The url for this window is " + winUrl;

document.getElementById("windowParameters").innerHTML = windowSize;

}


windowSize();

var docTitle = document.title;
var lastUse = document.lastModified;

var documentProps = " The title of this document is " + docTitle + ".";
documentProps+= "<br>This page was last updated on " + lastUse + ". ";

