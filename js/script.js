// Checks local time and changes the header bg gradient
(function timeOfDay() {
    var intro = document.getElementById('intro');
    var h = new Date().getHours();
    // Sets default background image to daytime version
    document.getElementById('intro-svg').src = "img/intro.svg";
    // Changes the sky color depending on the time of day
    if (h >= 5 && h <= 10) {
        intro.className = "sunrise";
    }
    else if (h > 10 && h <= 15) {
        intro.className = "day";
    }
    else if (h > 15 && h <= 21) {
        intro.className = "sunset";
    }
    else if (h > 21 || h < 5) {
        intro.className = "night";
        document.getElementById('intro-svg').src = "img/intro-night.svg";
    }
    else {
        intro.className = "day";
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



// This changes the skill svg on mouseover and mouseout
var skills = document.querySelectorAll('.skills img');

for (i = 0; i < skills.length; i++) {
    skills[i].addEventListener('mouseover', skillHover);
    skills[i].addEventListener('mouseout', skillRest);
}

function skillHover() {
    source = this.src;
    this.src = source.replace('.svg','2.svg');
}

function skillRest() {
    source = this.src;
    this.src = source.replace('2.svg','.svg');
}



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