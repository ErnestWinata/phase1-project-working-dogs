const container = document.getElementById("container");

fetch(
  "https://api.thedogapi.com/v1/breeds?"
)
  .then((response) => response.json())
  