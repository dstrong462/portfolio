// Locate nav menus and their links and apply click handlers
var navMenu = document.getElementById('nav-menu');
    navMenu.addEventListener('click', openNavMenu);
var navExtras = document.getElementById('nav-extras');
    navExtras.addEventListener('click', openNavMenu);
var navLinks = document.querySelectorAll('#nav a');

    for (i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', closeMenu);
    }

// Navigation buttons that change the time of day
var btnSunrise = document.getElementById('btn-sunrise');
btnSunrise.addEventListener('click', changeToSunrise);
var btnSunriseMobile = document.getElementById('mobile-btn-sunrise');
btnSunriseMobile.addEventListener('click', changeToSunrise);

var btnDay = document.getElementById('btn-day');
btnDay.addEventListener('click', changeToDay);
var btnDayMobile = document.getElementById('mobile-btn-day');
btnDayMobile.addEventListener('click', changeToDay);

var btnSunset = document.getElementById('btn-sunset');
btnSunset.addEventListener('click', changeToSunset);
var btnSunsetMobile = document.getElementById('mobile-btn-sunset');
btnSunsetMobile.addEventListener('click', changeToSunset);

var btnNight = document.getElementById('btn-night');
btnNight.addEventListener('click', changeToNight);
var btnNightMobile = document.getElementById('mobile-btn-night');
btnNightMobile.addEventListener('click', changeToNight);

// Opens the appropriate navigation menu on click
function openNavMenu() {
    if (this.classList.contains('open')) {
        navMenu.className = "closed";
        navExtras.className = "closed";
        navMenu.style.borderRadius = "0 0 0 8px";
        navExtras.style.borderRadius = "0 0 8px 0";
    }
    else {
        this.className = "open";
    }
}


// Closes all navigation menus when a link is clicked
function closeMenu() {
    body.className = '';
    burger.checked = false;
}


// Disables scrolling when mobile nav overlay is open
var body = document.body;
var burger = document.getElementById('nav-toggle');
    burger.addEventListener('click', disableScroll);
var link = document.querySelectorAll('.mobile-nav-list li a');

    for (i = 0; i < link.length; i++) {
        link[i].addEventListener('click', closeMenu);
    }

function disableScroll() {
    if (burger.checked) {
        body.className = 'disable-scroll';
    }
    else {
        body.className = '';
    }
}

// Round up all elements that need colors changed dynamically
var h = new Date().getHours();
var navColor = document.querySelectorAll('#nav div');
var intro = document.getElementById('intro');
var urlClass = document.querySelectorAll('.url');
var tagClass = document.querySelectorAll('.tag');
var projectClass = document.querySelectorAll('.project');
var learning = document.getElementById('learning');

// Changes document colors to SUNRISE colors
function changeToSunrise() {
    intro.className = "sunrise";
    document.getElementById('intro-svg').src = "img/intro.svg";
    learning.style.backgroundColor = "#6BAFD2";
    for (i = 0; i < navColor.length; i++) {
        navColor[i].style.fill = "#db8876";
        navColor[i].style.color = "#6BAFD2";
    }
    for (i = 0; i < urlClass.length; i++) {
        urlClass[i].style.color = "#6BAFD2";
    }
    for (i = 0; i < tagClass.length; i++) {
        tagClass[i].style.backgroundColor = "#DB8876";
    }
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.borderColor = "#9A8DAF";
        projectClass[i].style.color = "#000";
        projectClass[i].style.backgroundColor = "#fafafa";
    }
}

// Changes document colors to DAYTIME colors
function changeToDay() {
    intro.className = "day";
    document.getElementById('intro-svg').src = "img/intro.svg";
    learning.style.backgroundColor = "#ADC183";
    for (i = 0; i < navColor.length; i++) {
        navColor[i].style.fill = "#76A1B5";
        navColor[i].style.color = "#ADC183";
    }
    for (i = 0; i < urlClass.length; i++) {
        urlClass[i].style.color = "#90CFF2";
    }
    for (i = 0; i < tagClass.length; i++) {
        tagClass[i].style.backgroundColor = "#ADC183";
    }
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.borderColor = "#F7D47C";
        projectClass[i].style.color = "#000";
        projectClass[i].style.backgroundColor = "#fafafa";
    }
}

// Changes document colors to SUNSET colors
function changeToSunset() {
    intro.className = "sunset";
    document.getElementById('intro-svg').src = "img/intro.svg";
    learning.style.backgroundColor = "#6F749E";
    for (i = 0; i < navColor.length; i++) {
        navColor[i].style.fill = "#d0a8b9";
        navColor[i].style.color = "#6F749E";
    }
    for (i = 0; i < urlClass.length; i++) {
        urlClass[i].style.color = "#6F749E";
    }
    for (i = 0; i < tagClass.length; i++) {
        tagClass[i].style.backgroundColor = "#D0A8B9";
    }
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.borderColor = "#F8BBB1";
        projectClass[i].style.color = "#000";
        projectClass[i].style.backgroundColor = "#fafafa";
    }
}

// Changes document colors to NIGHTTIME colors
function changeToNight() {
    intro.className = "night";
    document.getElementById('intro-svg').src = "img/intro-night.svg";
    learning.style.backgroundColor = "#463D70";
    for (i = 0; i < navColor.length; i++) {
        navColor[i].style.fill = "#463D70";
        navColor[i].style.color = "#999";
    }
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


// Changes sky and document colors depending on the time of day
(function timeOfDay() {
    if (h >= 5 && h <= 10) {
        changeToSunrise();
    }
    else if (h > 10 && h <= 15) {
        changeToDay();
    }
    else if (h > 15 && h <= 21) {
        changeToSunset();
    }
    else if (h > 21 || h < 5) {
        changeToNight();
    }
    else {
        changeToSunset();
    }
}());


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