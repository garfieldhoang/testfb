/// New ///

///clone f4__item
var f4itemCont = document.querySelector('.f4__main');
var f4item = document.querySelector('.f4__item');
console.log(f4item);

for (var i=0;i<4;i++) {
  var newf4Item = f4item.cloneNode(true);
  f4itemCont.appendChild(newf4Item);
  // console.log(elementFrame21.appendChild(newE));
}

///products_apply Array
function Product(title, price, descrip) {
  this.title = title;
  this.price = price;
  this.descrip = descrip;

  // this.getName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

var product001 = new Product('Hai Hoang', '21 000', 'Hai Duong............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');
var product002 = new Product('Lina', '23 000', 'Moscow............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');
var product003 = new Product('C Mai Xiu', '96 000', 'Paris............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');
var product004 = new Product('Long Vu', '69 000', 'Bangkok............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');
var product005 = new Product('Hung Nguyen', '99 000', 'Prague............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');
var product006 = new Product('A Quan Nguyen', '50 000', 'Denver............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');
var product007 = new Product('C Huyen Tran', '51 000', 'Tokyo............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');


var products = [
  product001,
  product002,
  product005,
  product003,
  product004,
  product006,
  product007
];

// console.log(product001.title);
// console.log(product002.price);


/// ts change title #2 ///
///
///
var title = document.querySelectorAll('.f4__txt > h1');
var price = document.querySelectorAll('.f4__txt > h2');
var descrip = document.querySelectorAll('.f4__txt > p');

// for (var i=0;abc.length;i++) {
for (var i = 0;i < products.length-2;i++) {
  // var titleOri = title[i].innerHTML;

  // console.log(products[i].title);
  // console.log(products[i].price);
  // console.log(products[i].descrip);

  title[i].innerHTML = products[i].title.toUpperCase();
  price[i].innerHTML = products[i].price;
  descrip[i].innerHTML = products[i].descrip;
}




/// exs ///

/// ts add line with not full-5 ///
///
///
// var elementFrame3All = document.querySelectorAll('.frame-3');
// console.log(elementFrame3All[13]);
// elementFrame3All[13].style.opacity = "0";
// elementFrame3All[14].style.opacity = "0";
// /*height: 1100px;*/


/// ts change title ///
///
///
// var abc = document.querySelectorAll('.product__txt > h1');

// for (var i = 0;i < abc.length;i++) {
//   var txt = abc[i].innerHTML;
//   abc[i].innerHTML = `${txt} XX #0${i+1}`
// }


/// obj ///
///
///
