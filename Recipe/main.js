async function getRecipe() {
  // SHOW LOADING ICON
  document.getElementById("button__label").style.display = "none";
  document.getElementById("loadingGIF").style.display = "block";

  // USER INPUT TAGS
  var dairyFree = "";
  var vegan = "";
  var vegetarian = "";
  var glutenFree = "";
  var pescetarian = "";
  var ketogenic = "";
  var breakfast = "";
  var lunch = "";
  var dinner = "";
  var salad = "";
  var dessert = "";

  if (document.getElementById("dairy__checkbox").checked == true) {
    dairyFree = "dairy%20free";
  } else dairyFree = "";

  if (document.getElementById("vegan__checkbox").checked == true) {
    vegan = "%2Cvegan";
  } else vegan = "";

  if (document.getElementById("gluten__checkbox").checked == true) {
    glutenFree = "%2Cgluten%20free";
  } else glutenFree = "";

  if (document.getElementById("vegetarian__checkbox").checked == true) {
    vegetarian = "%2Cvegetarian";
  } else vegetarian = "";

  if (document.getElementById("pescetarian__checkbox").checked == true) {
    pescetarian = "%2Cpescetarian";
  } else pescetarian = "";

  if (document.getElementById("ketogenic__checkbox").checked == true) {
    ketogenic = "%2Cketogenic";
  } else ketogenic = "";

  if (document.getElementById("meal__dropdown").value == "breakfast") {
    breakfast = "%2Cbreakfast";
  } else breakfast = "";

  if (document.getElementById("meal__dropdown").value == "lunch") {
    lunch = "%2Clunch";
  } else lunch = "";

  if (document.getElementById("meal__dropdown").value == "dinner") {
    dinner = "%2Cdinner";
  } else dinner = "";

  if (document.getElementById("meal__dropdown").value == "salad") {
    salad = "%2Csalad";
  } else salad = "";

  if (document.getElementById("meal__dropdown").value == "dessert") {
    dessert = "%2Cdessert";
  } else dessert = "";

  // API
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "f5b9e8b4f3mshc0d805627b4285cp12a3a1jsn532c645ae2e9",
    },
  };

  const response = await fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=" +
      dairyFree +
      vegan +
      glutenFree +
      vegetarian +
      pescetarian +
      ketogenic +
      breakfast +
      lunch +
      dinner +
      salad +
      dessert +
      "&number=3",
    options
  );
  const result = await response.json();
  console.log(result);

  document.getElementById("results__container").style.display = "grid";
  document.getElementById("specs__container").style.display = "none";
  document.getElementById("hero__image").style.width = "26vw";
  document.getElementById("back__icon").style.display = "block";

  for (var i = 1; i < 4; i++) {
    document.getElementById("recipe" + i).href =
      result.recipes[i - 1].sourceUrl;
    document.getElementById("recipe" + i + "__img").src =
      result.recipes[i - 1].image;
    document.getElementById("recipe" + i + "__heading").innerHTML =
      result.recipes[i - 1].title;
    document.getElementById("recipe" + i + "__text").innerHTML =
      result.recipes[i - 1].summary;
  }
}

function reset() {
  dairyFree = "";
  vegan = "";
  vegetarian = "";
  glutenFree = "";
  pescetarian = "";
  ketogenic = "";
  breakfast = "";
  lunch = "";
  dinner = "";
  salad = "";
  dessert = "";

  document.getElementById("results__container").style.display = "none";
  document.getElementById("specs__container").style.display = "grid";
  document.getElementById("hero__image").style.width = "50vw";
  document.getElementById("back__icon").style.display = "none";
  document.getElementById("button__label").style.display = "block";
  document.getElementById("loadingGIF").style.display = "none";
}
