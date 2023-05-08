const container = document.getElementById("container");

fetch(
  "https://api.thedogapi.com/v1/breeds?"
)
  .then((response) => response.json())
  .then((data) => {
    const workingDogs = data
      .filter((dog) => dog.breed_group === "Working") 
      .slice(0, 3) 
      .concat(data.filter((dog) => dog.breed_group === "Working").slice(5, 8));

      console.log(workingDogs);
    console.log(workingDogs);
    workingDogs.forEach((dog, index) => {
      const div = document.createElement("div");
      div.classList.add("dog-container");

      const img = document.createElement("img");
      img.src =
        "https://media.istockphoto.com/id/1155747156/vector/cute-golden-retriever-puppy-paws-up-over-wall-dog-face-vector-illustration.jpg?s=612x612&w=0&k=20&c=4ROMUd2EJsRxPKh8EdNjEGioQtt1tPYza_bzmUhwaSM=";
      img.alt = `${dog.name} image`;

      const nameForm = document.getElementById("name-form");
      const nameInput = document.getElementById("name-input");
      const nameResponse = document.getElementById("name-response");
      
      nameForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const name = nameInput.value.trim();
        if (name) {
          nameResponse.innerText = "What a cute name for your doggy.  I love it! ❤️🐶❤️";
        } else {
          nameResponse.innerText = "What a cute name for your doggy.  I love it! ❤️🐶❤️ ";
        }
      
        nameInput.value = ""; 
      });
      
      const name = document.createElement("h2");
      name.innerText = dog.name;

      const temperament = document.createElement("p");
      temperament.innerText = `Temperament: ${dog.temperament}`;

      const bredFor = document.createElement("p");
      bredFor.innerText = `Bred for: ${dog.bred_for}`;

      const button = document.createElement("button");
      button.innerText = "See how cute I am!";
      button.addEventListener("click", () => {