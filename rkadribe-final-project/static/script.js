// ============================================================
// Part 2: JavaScript Basics (Console Practice)
// ============================================================

// --- Variable Declarations and Console Output ---

// Numeric addition
var x = 5;
var y = 7;
var z = x + y;
console.log(z); // 12

// String concatenation
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C); // Hello world!

// --- Basic Function ---
function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y); // 12
sumnPrint(A, B); // Hello world!

// --- Conditional Statement ---
if (C.length > z) {
    // Nested condition check
    if (C.length < z) {
        // Code block for nested true
        console.log(z);
    }
    // End of nested check block
    console.log(C);
} else {
    // Code block for initial condition false
    console.log("good job!"); // C.length (12) === z (12), so this runs
}

// --- Arrays + Loops (Alerts) ---
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// Using a for loop
// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Found Banana!");
//         }
//     }
// }
// findTheBanana(L1);
// findTheBanana(L2);

// Using forEach
// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item === "Banana") {
//             alert("Found Banana!");
//         }
//     });
// }
// findTheBanana(L1);
// findTheBanana(L2);

// ============================================================
// Part 3: Time-Based Greeting (DOM Manipulation)
// ============================================================

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greetingEl = document.getElementById("greeting");
    if (!greetingEl) return; // Guard: only run on pages with #greeting element

    if (x < 5 || x >= 20) {
        greetingEl.innerHTML = "Good night &mdash; MonoMuse awaits";
    } else if (x < 12) {
        greetingEl.innerHTML = "Good morning &mdash; welcome to MonoMuse";
    } else if (x < 18) {
        greetingEl.innerHTML = "Good afternoon &mdash; welcome to MonoMuse";
    } else {
        greetingEl.innerHTML = "Good evening &mdash; welcome to MonoMuse";
    }
}

greeting(hour);

// ============================================================
// Part 4: Dynamic Footer Year
// ============================================================

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (yearEl) {
        yearEl.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse. All rights reserved.";
    }
}

// ============================================================
// Part 4 (Increment 4): Active Navigation Bar
// ============================================================

/* Sets the 'active' class on the navigation link that matches the current page URL. */
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add('active');
        }
    });
}

ActiveNav();

// ============================================================
// Part 5 (Increment 4): Read More / Read Less Toggle (jQuery)
// ============================================================

// Guard: only run jQuery code on pages that include jQuery
if (typeof $ !== 'undefined') {
    $(document).ready(function () {
        // When the "Read More" button is clicked
        $("#readMore").click(function () {
            $("#longIntro").show();   // Show the long introduction text
            $("#readLess").show();    // Show the "Read Less" button
            $("#readMore").hide();    // Hide the "Read More" button
        });

        // When the "Read Less" button is clicked
        $("#readLess").click(function () {
            $("#longIntro").hide();   // Hide the long introduction text
            $("#readLess").hide();    // Hide the "Read Less" button itself
            $("#readMore").show();    // Show the "Read More" button again
        });
    });
}

// ============================================================
// Part 3 (Increment 5): Responsive Hamburger Nav Toggle
// ============================================================

function toggleNav() {
    document.querySelector('.nav_bar').classList.toggle('responsive');
}

// ============================================================
// Final Project: Checkout Form — Price Calculation & Validation
// ============================================================

/* Ticket prices per type */
var TICKET_PRICES = { general: 18, student: 10, member: 15 };

/* Show the checkout form and pre-fill the date when Buy Now is clicked */
function showCheckoutForm(dateValue) {
    var section = document.getElementById('checkoutSection');
    if (!section) return;
    section.style.display = 'block';
    if (dateValue) {
        var dateInput = document.getElementById('visitDate');
        if (dateInput) dateInput.value = dateValue;
    }
    section.scrollIntoView({ behavior: 'smooth' });
    updatePrice();
}

/* Recalculate and display the total price */
function updatePrice() {
    var typeEl = document.getElementById('ticketType');
    var qtyEl  = document.getElementById('ticketQty');
    var priceEl = document.getElementById('totalPrice');
    if (!typeEl || !qtyEl || !priceEl) return;

    var price = TICKET_PRICES[typeEl.value] || 18;
    var qty   = parseInt(qtyEl.value) || 0;
    priceEl.textContent = '$' + (price * qty).toFixed(2);
}

/* Show an error message below a field */
function showFieldError(fieldId, msg) {
    var el = document.getElementById(fieldId);
    if (el) { el.textContent = msg; el.style.display = 'block'; }
}

/* Clear all error messages */
function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(function(el) {
        el.style.display = 'none';
        el.textContent = '';
    });
}

/* Validate and submit the checkout form */
function placeOrder() {
    clearErrors();
    var valid = true;

    var name     = document.getElementById('custName');
    var email    = document.getElementById('custEmail');
    var date     = document.getElementById('visitDate');
    var type     = document.getElementById('ticketType');
    var qty      = document.getElementById('ticketQty');
    var zip      = document.getElementById('zipCode');

    if (!name || !name.value.trim()) {
        showFieldError('nameError', 'Name is required.');
        valid = false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value)) {
        showFieldError('emailError', 'A valid email address is required.');
        valid = false;
    }

    if (!date || !date.value) {
        showFieldError('dateError', 'Please select a visit date.');
        valid = false;
    }

    var qtyVal = parseInt(qty ? qty.value : 0);
    if (isNaN(qtyVal) || qtyVal < 1 || qtyVal > 10) {
        showFieldError('qtyError', 'Please select between 1 and 10 tickets.');
        valid = false;
    }

    if (zip && zip.value && !/^\d{5}$/.test(zip.value)) {
        showFieldError('zipError', 'Zip code must be exactly 5 digits.');
        valid = false;
    }

    if (!valid) return;

    // Store order details in sessionStorage for confirmation page
    var price = TICKET_PRICES[type.value] || 18;
    var total = price * qtyVal;
    var typeLabel = type.options[type.selectedIndex].text;

    sessionStorage.setItem('lastOrder', JSON.stringify({
        name:     name.value.trim(),
        email:    email.value.trim(),
        type:     typeLabel,
        quantity: qtyVal,
        date:     date.value,
        total:    total
    }));

    window.location.href = 'confirmation.html';
}

// ============================================================
// Final Project: Image Gallery / Slideshow
// ============================================================

var galleryIndex = 0;

function initGallery() {
    var slides = document.querySelectorAll('.gallery-slide');
    var dots   = document.querySelectorAll('.gallery-dot');
    if (slides.length === 0) return;
    showSlide(0, slides, dots);
}

function showSlide(n, slides, dots) {
    if (!slides) slides = document.querySelectorAll('.gallery-slide');
    if (!dots)   dots   = document.querySelectorAll('.gallery-dot');

    slides.forEach(function(s) { s.classList.remove('active'); });
    dots.forEach(function(d)   { d.classList.remove('active'); });

    galleryIndex = ((n % slides.length) + slides.length) % slides.length;
    slides[galleryIndex].classList.add('active');
    if (dots[galleryIndex]) dots[galleryIndex].classList.add('active');
}

function changeSlide(dir) {
    showSlide(galleryIndex + dir);
}

function goToSlide(n) {
    showSlide(n);
}

// Auto-advance every 5 seconds if gallery exists
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (document.querySelector('.gallery-slide')) {
            initGallery();
            setInterval(function() { changeSlide(1); }, 5000);
        }
    });
} else {
    if (document.querySelector('.gallery-slide')) {
        initGallery();
        setInterval(function() { changeSlide(1); }, 5000);
    }
}

// ============================================================
// Final Project: Confirmation Page — Load Order from sessionStorage
// ============================================================

if (document.getElementById('confName')) {
    var order = JSON.parse(sessionStorage.getItem('lastOrder') || 'null');
    if (order) {
        document.getElementById('confName').textContent  = order.name;
        document.getElementById('confEmail').textContent = order.email;
        document.getElementById('confType').textContent  = order.type;
        document.getElementById('confQty').textContent   = order.quantity;
        document.getElementById('confDate').textContent  = order.date;
        document.getElementById('confTotal').textContent = '$' + parseFloat(order.total).toFixed(2);
    }
}
