let dropbtn = document.querySelector('.dropbtn');

let dropshow = document.querySelector('.drop-content');
const nut = (e) => {
  
    dropshow.classList.toggle('show');
};
dropbtn.addEventListener('click', nut);