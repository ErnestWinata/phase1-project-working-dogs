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