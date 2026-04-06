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
