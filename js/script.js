// MAP Title
const titleHover = document.querySelector('main .title');

const titleHuruf = [...titleHover.textContent].map(n => `<span>${n}</span>`).join('');
titleHover.innerHTML = titleHuruf;

// VARIABLE
const hamburgerBar = document.querySelector('.hamburgerMenu');
const sideBar = document.querySelector('.sidebar');
const Item = document.getElementsByTagName('li');

// toggle sidebar
hamburgerBar.addEventListener('click',function(){
    sideBar.classList.toggle('sideBarTransform');
})

// event listener sidebar
for (var i = 0;Item.length;i++){
    Item[i].addEventListener('click',function(){
        sideBar.classList.toggle('sideBarTransform');
    })
}