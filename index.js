let button = document.getElementById("btn");
let content = document.getElementById("content");

button.addEventListener("click", () => {
  if (content.innerHTML == "Goodbye") {
    content.innerHTML = "hello";
  } else {
    content.innerHTML = "Goodbye";
  }
});
