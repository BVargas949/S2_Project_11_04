"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Bryan Vargas
   Date:  02/14/19

   Filename:   ph_clock.js     

*/


//Three base variables were created below, they are the base variables used to calculate the date and time.
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = (minsLeft * 60) + secsLeft;

//This variable was given the countdown function as its value.
var clockID = Countdown();

//This string of code is used to target the HTML tag with the ID of "TimeHead" and write the following HTML within it.
document.getElementById("TimeHead").insertAdjacentHTML("beforeend","<br />");

//This function is used to calculate the timer that will render in real time.
function Countdown() {
    // The variable minseleft and secsleft are given further variables to calculate time.
    var minsLeft = Math.ceil(timeLeft / 60);
    var secsLeft = timeLeft - (minsLeft * 60);
    // The next two code strings organize the time in a specific format.
    var minsString = addLeadingZero(minsLeft);
    var secsString = addLeadingZero(secsLeft);
    // The value of minstring and secstring are being nested into two elements with the ID's "minutes" and "seconds";
    document.getElementById("minutes").innerHTML = minsString;
    document.getElementById("seconds").innerHTML = secsString;
    //Running the Check Timer Function
    checkTimer();
    var timeLeft = --1;
}

// The function below is meant to stop the timer .
function stopClock() {
    //The closing tags are added before the end of the tag with the ID of "TimeHead".
    document.getElementById("TimeHead").insertAdjacentHTML("beforeend", "<br />");
    clearInterval("clockID");
}





/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */

function checkTimer() {
    if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */

function addLeadingZero(num) {
    var numStr = (num < 10) ? ("0" + num) : "" + num;
    return numStr;
}