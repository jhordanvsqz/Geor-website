let popup = document.getElementById("popup");

setTimeout(() => {
  popup.classList.add("open-popup");
}, 1000);

function closePopup() {
  popup.classList.remove("open-popup");
}

setTimeout(() => {
  popup.classList.remove("open-popup");
}, 8000);
