let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);
function generatePoem(event) {
  event.preventDefault();
  new Typewriter(".poem", {
    strings: "Hello World, welcome to poem generator",
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}
