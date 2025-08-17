function displayPoem(response) {
  console.log("poem generated");
  let poemElement = document.querySelector("#poem");

  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1t7b4ado35ccfb0c2c30ac5eb63faeaa";
  let prompt = `User instraction: Generate French poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission to generation 4 line poem and separate each line with a <br/>. Make sure the user instructions below. Do not include a title to a poem. Sign the poem with `SheCodes AI` inside a <strong> element at the end of the poem and not at the begining.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let formPoemElement = document.querySelector("#poem-generator-form");
formPoemElement.addEventListener("submit", generatePoem);
