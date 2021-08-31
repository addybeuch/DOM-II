// Your code goes here

//Fun Bus Text
const container = document.querySelector('.container');
const logoHead = container.querySelector('.logo-heading');
//Fun Bus Image
const intro = document.querySelector('.intro');
const busImg = intro.querySelector('img');
//All Nav Links
const nav = document.querySelector('.nav');
const links = nav.querySelector('.nav-link');
//Adventure Image
const imgContent = document.querySelector('.img-content');
const advImg = imgContent.querySelector('img');


const funImg = document.getElementById('img/fun.jpg');
//Destination Image
const contentDestin = document.querySelector('.content-destination');
const desImg = contentDestin.querySelector('img');
//All destinations
const contentPick = document.querySelector('.content-pick');
const destin = contentPick.querySelectorAll('.destination');
//Footer Text
const foot = document.querySelector('footer')
const footer = foot.querySelector('p')

logoHead.addEventListener('mouseover', function(event){
    logoHead.style.color=('blue')
})
logoHead.addEventListener('mouseleave', function(event){
    logoHead.style.color=('black')
})
links.addEventListener('click', function(event){
    links.style.cssText += 'display: none;'
})
document.addEventListener('keydown', function(event){
    if(event.key === 'a'){
    logoHead.style.transform = 'scaleX(-1)';
    }
})
document.addEventListener('keyup', function(event){
    if(event.key === 'a'){
    logoHead.style.transform = 'scaleX(1)';
    }
})
window.addEventListener('load', function(event){
    links.style.color=('red');
})
footer.addEventListener('dblclick', function(event){
    footer.style.color=('pink');
    setTimeout(()=>{footer.style.color=('black')}, 1000)
})
document.addEventListener('contextmenu', function(event){
    footer.style.fontSize=('5rem');
    setTimeout(()=>{footer.style.fontSize=('1.6rem')}, 1000)
})
desImg.addEventListener('drag', function(event){
    logoHead.textContent = ('Beanza');
})
desImg.addEventListener('dragend', function(event){
    logoHead.textContent = ('Fun Bus')
})


