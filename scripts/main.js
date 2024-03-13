import { mems } from '../scripts/data_mem.js'

const btn = document.querySelector('button');
const logo = document.querySelector('.img-logo')
const addres = document.querySelector('.addres');

addres.onclick = function () {
    document.execCommand('copy');
}
addres.addEventListener('copy', (event) => {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", addres.textContent);
        alert('Copied to clipboard')
    }
}); 

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('nav').offsetHeight;
        // const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition - 390,
            behavior: 'smooth'
        });
    });
});

let score = 0;
btn.addEventListener('click', () => {
    score += 1
    if (score < 8) {
        logo.src = mems[score].src;
    } else {
        logo.src = mems[0].src;
        score = 0;
    }
})
