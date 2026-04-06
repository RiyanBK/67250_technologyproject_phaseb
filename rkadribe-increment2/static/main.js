// Parallax scroll + crossfade hero text on home page
window.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero-section');
    const heroTexts   = document.querySelectorAll('.hero-text');
    if (!heroSection || heroTexts.length === 0) return;

    const scrollY      = window.scrollY;
    const heroHeight   = heroSection.offsetHeight;
    const startFrac    = 0.28; // matches CSS top: 28%

    // Maximum downward travel: from 28% to the bottom of the image
    const maxTranslate = heroHeight * (1 - startFrac);

    // Scale scroll so text reaches the bottom exactly when the hero exits viewport
    const scrollRange  = heroSection.offsetTop + heroHeight;
    const translate    = Math.min(scrollY * (maxTranslate / scrollRange), maxTranslate);

    heroTexts.forEach(function (el) {
        el.style.transform = 'translateY(' + translate + 'px)';
    });

    // Crossfade "Welcome to" → "Welcome to MonoMuse" (home page only)
    const welcomeShort = document.getElementById('hero-welcome');
    const welcomeFull  = document.getElementById('hero-welcome-full');
    if (!welcomeShort || !welcomeFull) return;

    const threshold = heroSection.offsetTop + heroHeight * 0.35;
    if (scrollY > threshold) {
        welcomeShort.style.transition = 'opacity 0.4s ease';
        welcomeFull.style.transition  = 'opacity 0.4s ease';
        welcomeShort.style.opacity    = '0';
        welcomeFull.style.opacity     = '1';
    } else {
        welcomeShort.style.transition = 'opacity 0.15s ease';
        welcomeFull.style.transition  = 'opacity 0.15s ease';
        welcomeShort.style.opacity    = '1';
        welcomeFull.style.opacity     = '0';
    }
});
