function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "a4cf7a5b0a77537beftcb4bo13d400ab";
  let context =
    "You are a funny AI assistant that tells short and sweet jokes.The joke must be provided in basic HTML format. Example: <p>this is a joke</p>";
  let prompt = "Please generate a short and sweet joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = "Generating a joke for you...please wait...";
  axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
