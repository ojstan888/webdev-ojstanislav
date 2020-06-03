const arrowBtn = document.getElementById('arrow-label');
const wrap1 = document.querySelector('.main__right-common-wrapper-1');
const wrap2 = document.querySelector('.main__right-common-wrapper-2');

arrowBtn.addEventListener('click', () => {
    wrap1.classList.toggle('active-wrap-1');
    wrap2.classList.toggle('active-wrap-2');
    
});





