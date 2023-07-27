let dropbtn = document.querySelector('.dropbtn');
console.log(dropbtn);
let dropshow = document.querySelector('.drop-content');
const nut = (e) => {
    console.log('sá');
    dropshow.classList.toggle('show');
};
dropbtn.addEventListener('click', nut);