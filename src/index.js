function displayPoem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}
function generatePoem(event) {
  event.preventDefault();
  let title = document.querySelector("#input");
  let poemElement = document.querySelector("#poem");
  poemElement.classList.add("poem");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a French poem about ${title.value}|</div>`;
  let apikey = "5bb94b390f27c51aef3to0775c3403eb";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a word of html and a title to the poem . Sign the poem with only name of author of the poem inside a <strong> element at the end of the poem and NOT at the beginning ";

  let prompt = `User instructions: Generate a Engish poem about${title.value}`;
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiurl).then(displayPoem);
}
let poemForm = document.querySelector("#form");
poemForm.addEventListener("submit", generatePoem);
