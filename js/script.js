// Checks local time and changes the header bg gradient
(function timeOfDay() {
    var intro = document.getElementById('intro');
    var h = new Date().getHours();
    var urlClass = document.querySelectorAll('.url');
    var tagClass = document.querySelectorAll('.tag');
    var projectClass = document.querySelectorAll('.project');
    var learning = document.getElementById('learning');
    // Sets default background image to daytime version
    document.getElementById('intro-svg').src = "img/intro.svg";
    // Changes the sky color depending on the time of day
    if (h >= 5 && h <= 10) {
        intro.className = "sunrise";
        learning.style.backgroundColor = "#6BAFD2";
        for (i = 0; i < urlClass.length; i++) {
            urlClass[i].style.color = "#6BAFD2";
        }
        for (i = 0; i < tagClass.length; i++) {
            tagClass[i].style.backgroundColor = "#DB8876";
        }
        for (i = 0; i < projectClass.length; i++) {
            projectClass[i].style.borderColor = "#9A8DAF";
        }
    }
    else if (h > 10 && h <= 15) {
        intro.className = "day";
        learning.style.backgroundColor = "#ADC183";
        for (i = 0; i < urlClass.length; i++) {
            urlClass[i].style.color = "#90CFF2";
        }
        for (i = 0; i < tagClass.length; i++) {
            tagClass[i].style.backgroundColor = "#ADC183";
        }
        for (i = 0; i < projectClass.length; i++) {
            projectClass[i].style.borderColor = "#F7D47C";
        }
    }
    else if (h > 15 && h <= 21) {
        intro.className = "sunset";
        learning.style.backgroundColor = "#6F749E";
        for (i = 0; i < urlClass.length; i++) {
            urlClass[i].style.color = "#6F749E";
        }
        for (i = 0; i < tagClass.length; i++) {
            tagClass[i].style.backgroundColor = "#D0A8B9";
        }
        for (i = 0; i < projectClass.length; i++) {
            projectClass[i].style.borderColor = "#F8BBB1";
        }
    }
    else if (h > 21 || h < 5) {
        intro.className = "night";
        document.getElementById('intro-svg').src = "img/intro-night.svg";
        learning.style.backgroundColor = "#463D70";
        for (i = 0; i < urlClass.length; i++) {
            urlClass[i].style.color = "#FDE6B1";
        }
        for (i = 0; i < tagClass.length; i++) {
            tagClass[i].style.backgroundColor = "#463D70";
        }
        for (i = 0; i < projectClass.length; i++) {
            projectClass[i].style.borderColor = "#666";
            projectClass[i].style.color = "#ececee";
            projectClass[i].style.backgroundColor = "#353535";
        }
    }
    else {
        intro.className = "day";
    }
}());



var body = document.body;
var burger = document.getElementById('nav-toggle');
    burger.addEventListener('click', disableScroll);
var link = document.querySelectorAll('.mobile-nav-list li a');

for (i = 0; i < link.length; i++) {
    link[i].addEventListener('click', closeMenu);
}

// Closes mobile nav overlay when a link is clicked
function closeMenu() {
    body.className = '';
    burger.checked = false;
}

// Disables scrolling when mobile nav overlay is open
function disableScroll() {
    if (burger.checked) {
        body.className = 'disable-scroll';
    }
    else {
        body.className = '';
    }
}



// Parallax clouds animation for header
var clouds = document.getElementById('intro-clouds');
var clouds2 = document.getElementById('intro-clouds2');

function parallax(){
    var scroll = window.pageYOffset;
    clouds.style.top = -scroll * .4 + 'px';
    clouds2.style.top = -scroll * .1 + 'px';
}
 
window.addEventListener('scroll', function() {
    requestAnimationFrame(parallax)
}, false);



// Very convoluted method of determining difference between 2 dates
(function dateDifference() {
    var past = new Date();
        past.setFullYear(2016,01,10);
    var pastYear = past.getFullYear();
    var pastMonth = past.getMonth();
    var pastDay = past.getDate();

    var today = new Date();
    var thisYear = today.getFullYear();
    var thisMonth = today.getMonth();
    var thisDay = today.getDate();

    // Get difference in years
    var diffYear = thisYear - pastYear;

    // Get difference in months
    if (thisMonth === pastMonth) {
        var diffMonth = 0;
        diffYear++;
    }
    else if (thisMonth > pastMonth) {
        var diffMonth = thisMonth - pastMonth;
    }
    else {
        var diffMonth = 12 - (pastMonth - thisMonth);
    }
    // Get remaining difference in days
    if (thisDay === pastDay) {
        var diffDays = 0;
    }
    else if (thisDay > pastDay) {
        var diffDays = thisDay - pastDay;
    }
    else {
        diffMonth--;
        var monthDays = new Date(2016, 2, 0).getDate();
        var diffDays = (monthDays - pastDay) + thisDay + 1;
    }

    // Build the HTML to insert
    var total = document.getElementById('total');
    if (diffYear === 1) {
        var html = diffYear + ' year <br />';
    }
    else if (diffYear > 1) {
        var html = diffYear + ' years <br />';
    }
    else {
        var html = '';
    }

    if (diffMonth === 1) {
        html += diffMonth + ' month <br />';
    }
    else if (diffMonth > 1){
        html += diffMonth + ' months <br />';
    }

    if (diffDays === 1) {
        html += diffDays + ' day';
    }
    else if (diffDays > 1) {
        html += diffDays + ' days';
    }
        total.innerHTML = html;
}());