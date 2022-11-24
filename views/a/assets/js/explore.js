///
///
/// clone product ///
var elProductRow = document.querySelector('.row');
var elProduct = document.querySelector('.product');

for (var i=0;i<4;i++) {
  var newE = elProduct.cloneNode(true);
  elProductRow.appendChild(newE);
  // console.log(elementFrame21.appendChild(newE));
}

///
///
/// clone row ///
var elsProductsRow = document.querySelector('.productC');

for (var i=0;i<1;i++) {
  var newE = elProductRow.cloneNode(true);
  elsProductsRow.appendChild(newE);
  // console.log(elementFrame21.appendChild(newE));
}  

///
///clone ProductC
///
// console.log(elsProductsRow);
// elsProductsRow = document.querySelector('.productC');
var productC = document.querySelector('.rightRad');
// console.log(elsProductsRow);
// console.log(productC);


for (var i=0;i<1;i++) {
  var newE = elsProductsRow.cloneNode(true);
  newE.classList.remove('productC__type1')
  newE.classList.add('productC__type2')
  productC.appendChild(newE);
  // console.log(elementFrame21.appendChild(newE));
}  


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
var product008 = new Product('E Ha', '30 000', 'Seoul............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');
var product009 = new Product('E Duong', '29 000', 'Madrid............................. xxxyyyzzz lorum ipsum this is firstTryAttemp Testing xxx###');




var products = [
  product001,
  product002,
  product003,
  product004,
  product005,
  product006,
  product007,
  product008,
  product009
];

// console.log(product001.title);
// console.log(product002.price);

console.log(document.querySelectorAll('.product__txt > h1'));

/// ts change title #2 ///
///
///
var title = document.querySelectorAll('.product__txt > h1');
var price = document.querySelectorAll('.product__txt > h2');
var descrip = document.querySelectorAll('.product__txt > p');

// for (var i=0;abc.length;i++) {
for (var i = 0;i < products.length;i++) {
  // var titleOri = title[i].innerHTML;

  // console.log(products[i].title);
  // console.log(products[i].price);
  // console.log(products[i].descrip);

  title[i].innerHTML = products[i].title.toUpperCase();
  price[i].innerHTML = products[i].price;
  descrip[i].innerHTML = products[i].descrip;
}