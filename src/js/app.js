// Round up all elements that need colors changed dynamically
var h = new Date().getHours();
var navColor = document.querySelectorAll('#nav div' + ',#nav a' + ',.project a');
var intro = document.getElementById('intro');
var urlClass = document.querySelectorAll('.project a');
var tagClass = document.querySelectorAll('.tag');
var projectClass = document.querySelectorAll('.project');
var aboutMe = document.getElementById('about-me');
var learning = document.getElementById('learning');

// Locate nav menus and their links and apply click handlers
var overlay = document.getElementById('overlay');
    overlay.addEventListener('click', closeAllMenus);
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

var currentTimeOfDay = "sunset";

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


// Changes document colors to SUNRISE colors
function changeToSunrise() {
    btnSunrise.classList.add("nav-active");
    btnDay.classList.remove("nav-active");
    btnSunset.classList.remove("nav-active");
    btnNight.classList.remove("nav-active");
    intro.classList.remove(currentTimeOfDay);
    intro.classList.add("sunrise");
    currentTimeOfDay = "sunrise";
    document.getElementById('intro-svg').src = "img/intro.svg";
    aboutMe.style.color = "#262626";
    learning.style.backgroundColor = "#6BAFD2";
    for (i = 0; i < navColor.length; i++) {
        navColor[i].style.fill = "#db8876";
        navColor[i].style.color = "#6BAFD2";
    }
    for (i = 0; i < tagClass.length; i++) {
        tagClass[i].style.backgroundColor = "#DB8876";
    }
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.borderColor = "#9A8DAF";
        projectClass[i].style.color = "#262626";
        projectClass[i].style.backgroundColor = "#fafafa";
    }
}

// Changes document colors to DAYTIME colors
function changeToDay() {
    btnSunrise.classList.remove("nav-active");
    btnDay.classList.add("nav-active");
    btnSunset.classList.remove("nav-active");
    btnNight.classList.remove("nav-active");
    intro.classList.remove(currentTimeOfDay);
    intro.classList.add("day");
    currentTimeOfDay = "day";
    document.getElementById('intro-svg').src = "img/intro.svg";
    aboutMe.style.color = "#262626";
    learning.style.backgroundColor = "#ADC183";
    for (i = 0; i < navColor.length; i++) {
        navColor[i].style.fill = "#76A1B5";
        navColor[i].style.color = "#ADC183";
    }
    for (i = 0; i < tagClass.length; i++) {
        tagClass[i].style.backgroundColor = "#ADC183";
    }
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.borderColor = "#F7D47C";
        projectClass[i].style.color = "#262626";
        projectClass[i].style.backgroundColor = "#fafafa";
    }
}

// Changes document colors to SUNSET colors
function changeToSunset() {
    btnSunrise.classList.remove("nav-active");
    btnDay.classList.remove("nav-active");
    btnSunset.classList.add("nav-active");
    btnNight.classList.remove("nav-active");
    intro.classList.remove(currentTimeOfDay);
    intro.classList.add("sunset");
    currentTimeOfDay = "sunset";
    document.getElementById('intro-svg').src = "img/intro.svg";
    aboutMe.style.color = "#262626";
    learning.style.backgroundColor = "#6F749E";
    for (i = 0; i < navColor.length; i++) {
        navColor[i].style.fill = "#d0a8b9";
        navColor[i].style.color = "#6F749E";
    }
    for (i = 0; i < tagClass.length; i++) {
        tagClass[i].style.backgroundColor = "#D0A8B9";
    }
    for (i = 0; i < projectClass.length; i++) {
        projectClass[i].style.borderColor = "#F8BBB1";
        projectClass[i].style.color = "#262626";
        projectClass[i].style.backgroundColor = "#fafafa";
    }
}

// Changes document colors to NIGHTTIME colors
function changeToNight() {
    btnSunrise.classList.remove("nav-active");
    btnDay.classList.remove("nav-active");
    btnSunset.classList.remove("nav-active");
    btnNight.classList.add("nav-active");
    intro.classList.remove(currentTimeOfDay);
    intro.classList.add("night");
    currentTimeOfDay = "night";
    document.getElementById('intro-svg').src = "img/intro-night.svg";
    aboutMe.style.color = "#FDE6B1";
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


// Parallax clouds animation for header
var clouds = document.getElementById('intro-clouds');
var clouds2 = document.getElementById('intro-clouds2');

function parallax(){
    var scroll = window.pageYOffset;
    clouds.style.top = -scroll * 0.4 + 'px';
    clouds2.style.top = -scroll * 0.1 + 'px';
}

window.addEventListener('scroll', function() {
    requestAnimationFrame(parallax)
}, false);


// Opens the appropriate navigation menu on click
function openNavMenu() {
    if (this.classList.contains('open')) {
        navMenu.className = "closed";
        navExtras.className = "closed";
        navMenu.style.borderRadius = "0 0 0 8px";
        navExtras.style.borderRadius = "0 0 8px 0";
        overlay.style.height = "0";
    }
    else {
        this.className = "open";
        overlay.style.height = "100%";
    }
}


// Closes all navigation menus when a link is clicked
function closeMenu() {
    body.className = '';
    burger.checked = false;
}

// Used for the overlay that closes all menus when clicked
function closeAllMenus() {
    navMenu.className = "closed";
    navExtras.className = "closed";
    navMenu.style.borderRadius = "0 0 0 8px";
    navExtras.style.borderRadius = "0 0 8px 0";
    overlay.style.height = "0";
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


// Very convoluted method of determining difference between 2 dates
(function dateDifference() {
    var past = new Date();
        past.setFullYear(2016,01,10);
    var pastYear = past.getFullYear();
    var pastMonth = past.getMonth();
    var pastDay = past.getDate();

    var today = new Date();
        thisYear = today.getFullYear();
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


// CONTACT FORM
// Check if name has been entered or not
var nameRequired = document.querySelector('#name + span.required');
var name = document.getElementById('name').addEventListener('focus', checkName);
var name = document.getElementById('name').addEventListener('blur', checkName);
var nameValid = false;

function checkName() {
    var name = document.getElementById('name');
    if (name.value.length > 0 && name.value.length < 30) {
        nameValid = true;
        nameRequired.style.opacity = "0";
    }
    else if (name.value.length >= 30) {
        nameValid = false;
        nameRequired.innerHTML = "Seriously, dude?";
        nameRequired.style.opacity = "1";
    }
    else {
        nameValid = false;
        nameRequired.innerHTML = "Please enter a name";
        nameRequired.style.opacity = "1";
    }
}

// Check if message has been entered or not
var messageRequired = document.querySelector('#message + span.required');
var message = document.getElementById('message').addEventListener('focus', checkMessage);
var message = document.getElementById('message').addEventListener('blur', checkMessage);
var messageValid = false;

function checkMessage() {
    var message = document.getElementById('message');
    if (message.value.length > 0 && message.value.length < 1000) {
        messageValid = true;
        messageRequired.style.opacity = "0";
    }
    else if (message.value.length >= 1000) {
        messageValid = false;
        messageRequired.innerHTML = "Easy bud, give me the tldr;";
        messageRequired.style.opacity = "1";
    }
    else {
        messageValid = false;
        messageRequired.innerHTML = "Please enter a message";
        messageRequired.style.opacity = "1";
    }
}

// Check if entries are valid, then submit form
var formSubmit = document.getElementById('form-submit');
    formSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    if (nameValid && messageValid) {
        formSubmit.classList.add("form-success");
        formSubmit.value = "Sending...";
        $.ajax({
            type: 'post',
            url: '/php/contact.php',
            data: $('#form').serialize(),
            success: function () {
                formSubmit.value = "Message Sent";
                $('#form')[0].reset();
            }
        });
    }
    else {
        checkName();
        checkMessage();
    }
});


// Inserts current year for the footer copyright
(function copyright() {
    document.getElementById('year').innerHTML = thisYear;
}());