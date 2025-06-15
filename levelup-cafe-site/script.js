// حركة ظهور العناصر عند التمرير (fade-in)
document.addEventListener("DOMContentLoaded", function() {
    function revealOnScroll() {
        const fadeEls = document.querySelectorAll('.fadein');
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // حركة زر "سجل الآن"
    document.querySelectorAll('.tournament-card .btn-glow').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.textContent = "تم التسجيل ✅";
            btn.classList.add('registered');
            setTimeout(() => {
                btn.textContent = "سجل الآن";
                btn.classList.remove('registered');
            }, 2500);
        });
    });
});