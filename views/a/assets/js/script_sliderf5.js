// console.log = function() {}

var fbPics = [ // 001 - 006
  './assets/img/fback/001.jpg',
  './assets/img/fback/002.jpeg',
  './assets/img/fback/003.jpg',
  './assets/img/fback/004.jpg',
  './assets/img/fback/005.jpg',
  './assets/img/fback/006.png'
  // './fback/006.png',
  // './fback/006.png',
  // './fback/006.png',
  // './fback/006.png',
  // './fback/006.png'
  ];

var dispPics = [
  './assets/img/fback/001.jpg',
  './assets/img/fback/002.jpeg',
  './assets/img/fback/003.jpg',
  './assets/img/fback/004.jpg'
  ];

  // var fbPics = [
  //   'a',
  //   'b',
  //   'c',
  //   'd',
  //   'e',
  //   'f'
  // ];

starting();
setTimeout(function() {
  f5slide(1);
  f5slide(-1);
}, 1);
  
// var a = 1; var b = 2; var c = 3; var d = 4;
var a = 1, b = 2, c = 3, d = 4;
var i = 0;

//test_abcd
  // --a;
  // --b;
  // --c;
  // --d;

  // a--;
  // b--;
  // c--;
  // d--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log('hiii');

function f5slide(j) {  
  i = i+j;
  if (i > 5) {i = 0}
    else if (i < 0) {i = 5}
    console.log('i now: ' + i);

  switch(i) {
    case 3:
      dispPics[0]=fbPics[i];
      dispPics[1]=fbPics[i+1];
      dispPics[2]=fbPics[i+2];
      dispPics[3]=fbPics[0];

      // console.log(fbPics[i]);
      // console.log(fbPics[i+1]);
      // console.log(fbPics[i+2]);
      // console.log(fbPics[0]);
      break;
    case 4:
      dispPics[0]=fbPics[i];
      dispPics[1]=fbPics[i+1];
      dispPics[2]=fbPics[0];
      dispPics[3]=fbPics[1];

      // console.log(fbPics[i]);
      // console.log(fbPics[i+1]);
      // console.log(fbPics[0]);
      // console.log(fbPics[1]);
      break;
    case 5:
      dispPics[0]=fbPics[i];
      dispPics[1]=fbPics[0];
      dispPics[2]=fbPics[1];
      dispPics[3]=fbPics[2];

      // console.log(fbPics[i]);
      // console.log(fbPics[0]);
      // console.log(fbPics[1]);
      // console.log(fbPics[2]);
      break;
    default:
      dispPics[0]=fbPics[i];
      dispPics[1]=fbPics[i+1];
      dispPics[2]=fbPics[i+2];
      dispPics[3]=fbPics[i+3];

      // console.log(dispPics[0]);
      // console.log(dispPics[1]);
      // console.log(dispPics[2]);
      // console.log(dispPics[3]);

      // console.log(fbPics[i]);
      // console.log(fbPics[i+1]);
      // console.log(fbPics[i+2]);
      // console.log(fbPics[i+3]);
    }

  console.log('');
  // i = i+j;

  showFbs(j);
}


function starting() {
      var createdStyleTag = document.createElement("style");
      createdStyleTag.id = 'babyOri';
      createdStyleTag.innerHTML =
        `
        .img-no_1 {
          width: 294px;
          height: 524px;
          background-image: url('${dispPics[0]}');
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 50%;
          left: 25%;
          transform: translate3d(-50%, -50%, 0);
          filter: blur(5px);
          opacity: .6;          
          object-fit: cover;
          border-radius: 20px;
        }

        .img-no_2 {
          width: 361px;
          height: 644px;
          background-image: url('${dispPics[1]}');
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          object-fit: cover;
          z-index: 1; 
          border-radius: 20px;
          filter: drop-shadow(11px 15px 5px rgba(0, 0, 0, 0.65));
        }

        .img-no_3 {
          width: 294px;
          height: 524px;
          background-image: url('${dispPics[2]}');
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 50%;
          left: 75%;
          transform: translate3d(-50%, -50%, 0);
          filter: blur(5px);
          opacity: .6;          
          object-fit: cover;
          border-radius: 20px;
        }

        .img-no_4 {
          height: 0;
          width: 0;
          background-image: url('${dispPics[2]}');
          background-size: cover;
          background-position: center;
          position: absolute;
          top: 50%;
          left: 75%;
          transform: translate3d(-50%, -50%, 0)
        }
        `

        document.body.appendChild(createdStyleTag);     
        // showFbs(1);
        
    }

function showFbs(j) {
  if (j === 1) {
    if (a<4) {a++;} else {a = 1;};
    if (b<4) {b++;} else {b = 1;};
    if (c<4) {c++;} else {c = 1;};
    if (d<4) {d++;} else {d = 1;};
  } else {
    if (a>1) {a--;} else {a = 4;};
    if (b>1) {b--;} else {b = 4;};
    if (c>1) {c--;} else {c = 4;};
    if (d>1) {d--;} else {d = 4;};
  }  
  if (document.getElementById('baby'))
    {
      setTimeout(function() {
      document.body.removeChild(document.getElementById('baby'));}
      ,400);
  } else {console.log('nope!!')};

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

  var createdStyleTag = document.createElement("style");
      createdStyleTag.id = 'baby';
      createdStyleTag.innerHTML = 
          `
          .img-no_${a} {
            width: 0;
            height: 0;
          }

          .img-no_${b} {
            width: 294px;
            height: 524px;
            background-image: url('${dispPics[0]}');
            background-size: cover;
            background-position: center;
            position: absolute;
            top: 50%;
            left: 25%;
            transform: translate3d(-50%, -50%, 0);
            // filter: blur(5px);
            // opacity: .6;
            filter: drop-shadow(11px 15px 5px rgba(0, 0, 0, 0.65));
            object-fit: cover;
            border-radius: 20px;
          }

          .img-no_${c} {
            width: 361px;
            height: 644px;
            background-image: url('${dispPics[1]}');
            background-size: cover;
            background-position: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            // filter: drop-shadow(11px 15px 5px rgba(0, 0, 0, 0.65));
            // width: auto;
            // height: auto;
            object-fit: cover;
            border-radius: 20px;
          }

          .img-no_${d} {
            width: 294px;
            height: 524px;
            background-image: url('${dispPics[2]}');
            background-size: cover;
            background-position: center;
            position: absolute;
            top: 50%;
            left: 75%;
            transform: translate3d(-50%, -50%, 0);
            // filter: blur(5px);
            // opacity: .6;            
            // filter: drop-shadow(11px 15px 5px rgba(0, 0, 0, 0.65));
            object-fit: cover;
            border-radius: 20px;
          }

          // .img-no_${b}:after,
          // .img-no_${c}:after,
          // .img-no_${d}:after {
          //   content: "";
          //   position: absolute;
          //   top: 0;
          //   left: 0;
          //   right: 0;
          //   bottom: 0;            
          //   filter: drop-shadow(11px 15px 5px rgba(0, 0, 0, 0.65));
          //   background: rgba(255, 255, 255, 0.25);
          // }
          `;
  
  document.body.appendChild(createdStyleTag);    
  
  console.log(document.querySelector(`.img-no_${b}`));
  
  //documentStyleSet
    document.querySelector(`.img-no_${c}`).style.zIndex = "1";
    document.querySelector(`.img-no_${a}`).style.zIndex = "0";
    document.querySelector(`.img-no_${b}`).style.zIndex = "0";
    document.querySelector(`.img-no_${d}`).style.zIndex = "0";

    document.querySelector(`.img-no_${c}`).src = dispPics[1];
    setTimeout(function() {
      // document.querySelector(`.img-no_${b}`).removeAttribute('src');
      document.querySelector(`.img-no_${d}`).removeAttribute('src');}, 1000);  

    document.querySelector(`.img-no_${c}`).style.filter = "drop-shadow(11px 15px 5px rgba(0, 0, 0, 0.65))";
    document.querySelector(`.img-no_${b}`).style.filter = "blur(5px)";
    document.querySelector(`.img-no_${d}`).style.filter = "blur(5px)";  

    document.querySelector(`.img-no_${c}`).style.opacity = "1";
    document.querySelector(`.img-no_${b}`).style.opacity = ".6";
    document.querySelector(`.img-no_${d}`).style.opacity = ".6";
  
  setTimeout(function() {
    if (document.getElementById('babyOri')) {document.body.removeChild(document.getElementById('babyOri'));}
  }, 1000);
  
  console.log('');
}