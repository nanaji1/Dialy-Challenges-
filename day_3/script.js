let form = document.querySelector("#form");
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = new FormData(form);
  data2 = Object.fromEntries(data.entries());
  //   document.querySelector("#full_name").innerHTML = data2.full_name;
  //   document.querySelector("#email").innerHTML = data2.email;
  //   document.querySelector("#address").innerHTML = data2.address;
  //   document.querySelector("#city").innerHTML = data2.city;
  //   document.querySelector("#state").innerHTML = data2.state;
  //   document.querySelector("#code").innerHTML = data2.pin_code;
  console.log(data);
  console.log(data2);
  for (const [name, value] of data) {
    console.log(name, ":", value);
  }
});
