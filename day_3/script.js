let form = document.querySelector("#form");
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = new FormData(form);
  data2 = Object.fromEntries(data.entries());
  console.log(data);
  console.log(data2);
  for (const [name, value] of data) {
    console.log(name, ":", value);
  }
  form.style = "display:none";
});

let popup = document.getElementById("pop_up");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
  form.style = "display:block";
}
