const expandWalletInfo = (el) => {
    // console.log(el);
    var active = document.getElementsByClassName("active");
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

const openSideBar = () => {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sidebarFooter").style.width = "100%";
}
const closeSideBar = () => {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sidebarFooter").style.width = "0";
}