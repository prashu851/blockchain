const closePopup = () => {
  document.getElementById('popup').style.display='none'
}
const expandWalletInfo = (el) => {
    // console.log(el);
    var active = document.getElementsByClassName("wallet-bg active");
while (active.length)
    active[0].classList.remove("active");
el.classList.add("active");
var image = document.getElementById("wallet-image")
if(el.id == "wallet-point-1") {
   image.src = "images/wallet-buy@2x.png";
   image.width="353";
   image.height = "576"
}
else if(el.id == "wallet-point-2"){
    image.src = "images/wallet-control-funds@2x.png";
    image.width="413";
    image.height = "576"
}
else if(el.id == "wallet-point-3"){
    image.src = "images/wallet-earn-interest@2x.png";
    image.width="409";
    image.height = "576"
}
else if(el.id == "wallet-point-4"){
    image.src = "images/wallet-borrow@2x.png";
    image.width="1075";
    image.height = "683"
}
else {
    image.src = "images/wallet-swap@2x.png";
    image.width="1162";
    image.height = "683"
}
}

const expandExchangeInfo = (el) => {
  // console.log(el);
  var active = document.getElementsByClassName("exchange-bg active");
while (active.length)
  active[0].classList.remove("active");
el.classList.add("active");
var image = document.getElementById("exchange-image")
if(el.id == "exchange-point-1") {
 image.src = "images/exchange-fiat-currencies.png";
 image.width="360";
 image.height = "542"
}
else if(el.id == "exchange-point-2"){
  image.src = "images/exchange-matching-engine@2x.png";
  image.width="560";
  image.height = "466"
}
else if(el.id == "exchange-point-3"){
  image.src = "images/exchange-chat-support.png";
  image.width="357";
  image.height = "510"
}
else {
  image.src = "images/exchange-api@2x.png";
  image.width="782";
  image.height = "539"
}
}

const expandExploreInfo = (el) => {
  // console.log(el);
  var active = document.getElementsByClassName("explore-bg active");
while (active.length)
  active[0].classList.remove("active");
el.classList.add("active");
var image = document.getElementById("explore-image")
if(el.id == "explore-point-1") {
 image.src = "images/wallet-buy@2x.png";
 image.width="353";
 image.height = "576"
}
else if(el.id == "explore-point-2"){
  image.src = "images/explore-api@2x.png";
  image.width="565";
  image.height = "546"
}
else if(el.id == "explore-point-3"){
  image.src = "images/explore-charts@2x.png";
  image.width="767";
  image.height = "580"
}

else {
  image.src = "images/explore-prices@2x.png";
  image.width="927";
  image.height = "655"
}
}

const openSideBar = () => {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sidebarFooter").style.width = "100%";
}
const closeSideBar = () => {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sidebarFooter").style.width = "0";
}

var walletSlideIndex = 1;
var exchangeSlideIndex = 1;
var exploreSlideIndex = 1;
var myTimer;
function walletPlusSlides(n){
  if (n < 0){
    walletShowSlides(walletSlideIndex -= 1);
  } else {
   walletShowSlides(walletSlideIndex += 1); 
  }
}
function exchangePlusSlides(n){
  if (n < 0){
    exchangeShowSlides(exchangeSlideIndex -= 1);
  } else {
   exchangeShowSlides(exchangeSlideIndex += 1); 
  }
}
function explorePlusSlides(n){
  if (n < 0){
    exploreShowSlides(exploreSlideIndex -= 1);
  } else {
   exploreShowSlides(exploreSlideIndex += 1); 
  }
}

function walletCurrentSlide(n){
  walletShowSlides(walletSlideIndex = n);
}
function exchangeCurrentSlide(n){
  exchangeShowSlides(exchangeSlideIndex = n);
}
function exploreCurrentSlide(n){
  exploreShowSlides(exploreSlideIndex = n);
}

function walletShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("wallet-slides");
  var dots = document.getElementsByClassName("wallet-dot");
  if (n > slides.length) {walletSlideIndex = 1}
  if (n < 1) {walletSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" wallet-active", "");
  }
  slides[walletSlideIndex-1].style.display = "block";
  dots[walletSlideIndex-1].className += " wallet-active";
}

function exchangeShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("exchange-slides");
  var dots = document.getElementsByClassName("exchange-dot");
  if (n > slides.length) {exchangeSlideIndex = 1}
  if (n < 1) {exchangeSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" exchange-active", "");
  }
  slides[exchangeSlideIndex-1].style.display = "block";
  dots[exchangeSlideIndex-1].className += " exchange-active";
}
function exploreShowSlides(n){
  var i;
  var slides = document.getElementsByClassName("explore-slides");
  var dots = document.getElementsByClassName("explore-dot");
  if (n > slides.length) {exploreSlideIndex = 1}
  if (n < 1) {exploreSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" explore-active", "");
  }
  slides[exploreSlideIndex-1].style.display = "block";
  dots[exploreSlideIndex-1].className += " explore-active";
}
