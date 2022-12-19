let nav = document.getElementById("nav");
let btnMenu = document.getElementById("btn-menu");
let btnClose = document.getElementById("btn-close");

console.log(nav);
console.log(btnMenu);
console.log(btnClose);

btnMenu.onclick = (click) => {
  console.log("CLICK");
  nav.style.display = "block";
  btnMenu.style.display = "none";
  btnClose.style.display = "flex";
};

btnClose.onclick = (click) => {
  nav.style.display = "none";
  btnMenu.style.display = "flex";
  btnClose.style.display = "none";
};
