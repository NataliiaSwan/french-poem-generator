function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");

  new Typewriter(poemElement, {
    strings: ["Je m'en allais, les poings dans mes poches crevées"],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let formPoemElement = document.querySelector("#poem-generator-form");
formPoemElement.addEventListener("submit", generatePoem);
