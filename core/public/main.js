// refresh page go to top
$(document).ready(function () {
    $(this).scrollTop(0);

    // by default first tab is active
    $(".tablinks:nth-child(1)").addClass('border-b-2 border-primary text-primary');
    $(".tablinks:nth-child(1)").removeClass('border-b border-secondary_light');
});

// animation on scroll library
AOS.init({
    duration: 2000,
});

// Mobilemenu Navbar.
function togglebtn() {
    var dropdown = document.getElementById('toggleMenu');
    var menu = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('hidden');
    menu.classList.add('left-0');
}

// navbar color change on scoll
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('#navbarMenu').addClass('bg-white sticky top-0');
        $('#navbarMenu').removeClass('bg-light');
    } else {
        $('#navbarMenu').removeClass('bg-white sticky top-0');
        $('#navbarMenu').addClass('bg-light');
    }
});

// navbar scroll on active
var scrollLink = $('.nav-item');
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('border-b-2 border-primary');
            $(this).parent().siblings().removeClass('border-b-2 border-primary dark:border-secondary');
        }
    });
});

// technology tabs start
function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// defaultopen
document.getElementById("defaultOpen").click();

// technology button active
$('.tablinks').click(function () {
    $('.tablinks').removeClass('border-b-2 border-primary text-primary');
    $('.tablinks').addClass('border-b border-secondary_light');
    if ($(this).find('active')) {
        $(this).addClass('border-b-2 border-primary text-primary');
        $(this).removeClass('border-b border-secondary_light');
    }
});

// testimonial slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("my-slides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// switch to dark mode mobile
function onchangeTheme() {
    var i;
    var checkbox = document.getElementsByClassName('toggle')
    var html = document.querySelector('html');
    for (i = 0; i < checkbox.length; i++) {
        checkbox[i].checked ?
            html.classList.add("dark") :
            html.classList.remove("dark")
    }
}

// switch to dark mode desktop
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

const toggleDarkMode = function () {
    checkbox.checked
        ? html.classList.add("dark")
        : html.classList.remove("dark")
}

toggleDarkMode();
checkbox.addEventListener("click", toggleDarkMode);

// onclick light and dark svg icons change
$('input[type="checkbox"]').click(function () {
    if ($(this).prop("checked") == true) {
        $(".sun-svg").addClass('hidden');
        $(".moon-svg").removeClass('hidden');
    } else if ($(this).prop("checked") == false) {
        $(".moon-svg").addClass('hidden');
        $(".sun-svg").removeClass('hidden');
    }
});