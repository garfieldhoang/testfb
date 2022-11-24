// links = [
//     'url(./assets/img/sliderFooter/001.jpg) top center / cover no-repeat',
//     'url(./assets/img/sliderFooter/002.jpeg) top center / cover no-repeat',
//     'url(./assets/img/sliderFooter/003.jpg) center center / cover no-repeat',
//     'url(./assets/img/sliderFooter/004.png) top -60px center / cover no-repeat',
//     'url(./assets/img/sliderFooter/001.jpg) top center / cover no-repeat'
// ];

links = [
    'url(./assets/img/sliderFooter/001.jpg) center / cover no-repeat',
    'url(./assets/img/sliderFooter/002.jpg) center / cover no-repeat',
    'url(./assets/img/sliderFooter/003.jpg)  center / cover no-repeat',
    'url(./assets/img/sliderFooter/004.png) center / cover no-repeat',
    'url(./assets/img/sliderFooter/001.jpg) center / cover no-repeat'
];

var x = document.getElementById("fr6__container"); 
var y = document.getElementById("fr6__blurBgr"); 
var i = 0;

action();
function action() {
    const createdStyleTag = document.createElement("style")
    createdStyleTag.innerHTML = 
        `@keyframes changeBgr${i} {
            from {background: ${links[i]};}
            to {background: ${links[i+1]};}
        }
        `;

    document.body.appendChild(createdStyleTag);
    // createdStyleTag.classList.add(`changeBgr${i}`);
    createdStyleTag.setAttribute("id", `changeBgr${i}`);
    console.log(i);

    if (i==0) {
        const abc = document.getElementById(`changeBgr${i+3}`);
        if (abc) {document.body.removeChild(abc);}
    }

    if (i>=1) {
        const abc = document.getElementById(`changeBgr${i-1}`);
        console.log(abc);
        document.body.removeChild(abc);
    }
    
    x.style.animation = `changeBgr${i} 2s 0s forwards`;
    y.style.animation = `changeBgr${i} 2s 0s forwards`;

    i++;
    if (i<4) {
        setTimeout(() => {
            action();
        }, 4000);
        
    } else {
        i=0;
        setTimeout(() => {
            action();

        }, 4000);
    }
}