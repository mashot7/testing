let imgs = [
    "imgs/1.png",
    "imgs/2.png",
    "imgs/3.png",
    "imgs/4.png",
    "imgs/5.png",
    "imgs/6.png",
    "imgs/7.png",
    "imgs/8.png"
];

let slide = document.getElementById('slide');
let counter = 1;

setInterval(() => {
    if (counter == 8){
        counter = 0;
    }
    slide.style.backgroundImage = 'url(' + imgs[counter] + ')';
    counter++;
}, 8000);