const arrowBtn = document.getElementById('arrow-label');
const wrap1 = document.querySelector('.main__right-common-wrapper-1');
const wrap2 = document.querySelector('.main__right-common-wrapper-2');
const socialLinks = document.querySelectorAll('.social-links');

arrowBtn.addEventListener('click', () => {
    wrap1.classList.toggle('active-wrap-1');
    wrap2.classList.toggle('active-wrap-2');
});


socialLinks.forEach(item => {
    item.addEventListener('mouseover', () => {
        socialLinks.forEach(item => {
            item.style.opacity = 0.6;
        });
        item.style.opacity = 1;
    });
    item.addEventListener('mouseout', () => {
        socialLinks.forEach(item => {
            item.style.opacity = 1;
        });
    });
});


