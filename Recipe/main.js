async function getRecipe() {
  var dairyFree = "";
  var vegan = "";
  var vegetarian = "";
  var glutenFree = "";
  var highProtein = "";
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

  if (document.getElementById("protein__checkbox").checked == true) {
    highProtein = "%2Chigh%20protein";
  } else highProtein = "";

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

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "f5b9e8b4f3mshc0d805627b4285cp12a3a1jsn532c645ae2e9",
    },
  };

  const response = await fetch(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert" +
      dairyFree +
      vegan +
      glutenFree +
      vegetarian +
      highProtein +
      ketogenic +
      breakfast +
      lunch +
      dinner +
      salad +
      dessert +
      "&number=1",
    options
  );
  const result = await response.json();
  console.log(result);
}
