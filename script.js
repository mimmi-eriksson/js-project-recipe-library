const RECIPES = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./placeholder-image.png",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./placeholder-image.png",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./placeholder-image.png",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./placeholder-image.png",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./placeholder-image.png",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./placeholder-image.png",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./placeholder-image.png",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

// DOM selectors
const cardsContainer = document.getElementById("cards-section")
const filterOptions = document.querySelectorAll(".filter-option")
const sortingOptions = document.querySelectorAll(".sorting-option")
const randomButton = document.getElementById("random-button")
// const filtersHeading = document.getElementById("filter-heading")
// const filtersContainer = document.getElementById("filters-container")
// const sortingHeading = document.getElementById("sort-heading")
// const sortingContainer = document.getElementById("sorting-container")

// global variable
let selectedSorting

// loop through the filter/sorting options to check which ones are selected
const findSelectedFilters = () => {
  // variables to save the selections
  let selectedFilters = {
    diets: [],
    cuisine: [],
    cookingTime: [],
    numberOfIngredients: []
  }
  // if checkbox is checked - add input.id to filtering object (input.name is the key)
  filterOptions.forEach(option => {
    (option.checked ? selectedFilters[option.name].push(option.id) : null)
  })
  // if radio is checked add id to sorting varaible
  sortingOptions.forEach(option => {
    (option.checked ? selectedSorting = option.id : null)
  })
  // filter and sort recipes based on selection
  applyFilters(selectedFilters)

}

// apply filters
const applyFilters = (selectedFilters) => {
  // if no filters are selected - filteredRecipes will be all recipes
  let filteredRecipes = RECIPES
  // loop through the selected filtersArray
  for (const [key, value] of Object.entries(selectedFilters)) {
    // filters where option(s) has been selected have a value.length > 0
    if (value.length > 0) {
      // if several options have been selected - show recipes matching either of the options
      let matchingRecipes = []
      value.forEach(val => {
        matchingRecipes = matchingRecipes.concat(filterRecipes(filteredRecipes, key, val))
      })
      // only filter on the matching recipes array when checking next filter
      filteredRecipes = matchingRecipes
    }
  }
  // sort filtered recipes
  sortRecipes(filteredRecipes)
}

// filter recipes
const filterRecipes = (recipeArray, filter, value) => {
  let filteredRecipes
  // different cases depending on the filter
  if (filter === 'diets') {
    // filter on diets
    filteredRecipes = recipeArray.filter(recipe => (recipe[filter].includes(value)))
  } else if (filter === 'cuisine') {
    // filter on cuisine
    // using .toLowerCase() and .replace(' ', '-') to change eg. 'Middle Eastern' to 'middle-eastern'
    filteredRecipes = recipeArray.filter(recipe => (recipe[filter].toLowerCase().replace(' ', '-') === value))
  } else if (filter === 'cookingTime') {
    // filter on cooking time
    if (value === 'under-15-min') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes < 15))
    } else if (value === '15-30-min') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes >= 15 && recipe.readyInMinutes <= 30))
    } else if (value === '30-60-min') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes >= 30 && recipe.readyInMinutes <= 60))
    } else if (value === 'over-60-min') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes > 60))
    } else {
      // display error?
    }
  } else if (filter === 'numberOfIngredients') {
    // filter on number of ingredients
    if (value === 'under-5-ingredients') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length < 5))
    } else if (value === '5-10-ingredients') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length >= 5 && recipe.ingredients.length <= 10))
    } else if (value === '11-15-ingredients') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length >= 11 && recipe.ingredients.length <= 15))
    } else if (value === 'over-15-ingredients') {
      filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length > 15))
    } else {
      // display error?
    }
  } else {
    // display error?
  }
  return filteredRecipes
}

// sort recipes
const sortRecipes = (recipesArray) => {
  let sortedRecipes
  // if sorting s selected - sort recipes array
  if (selectedSorting) {
    const sortOn = selectedSorting.split('-')[0]
    const sortingOrder = selectedSorting.split('-')[1]
    // different cases for each sorting option
    if (sortOn === 'time') {
      if (sortingOrder === 'ascending') {
        sortedRecipes = recipesArray.sort((a, b) => (a.readyInMinutes - b.readyInMinutes))
      } else if (sortingOrder === 'descending') {
        sortedRecipes = recipesArray.sort((a, b) => (b.readyInMinutes - a.readyInMinutes))
      }
    } else if (sortOn === 'popularity') {
      if (sortingOrder === 'ascending') {
        sortedRecipes = recipesArray.sort((a, b) => (a.popularity - b.popularity))
      } else if (sortingOrder === 'descending') {
        sortedRecipes = recipesArray.sort((a, b) => (b.popularity - a.popularity))
      }
    } else if (sortOn === 'price') {
      if (sortingOrder === 'ascending') {
        sortedRecipes = recipesArray.sort((a, b) => (a.pricePerServing - b.pricePerServing))
      } else if (sortingOrder === 'descending') {
        sortedRecipes = recipesArray.sort((a, b) => (b.pricePerServing - a.pricePerServing))
      }
    } else if (sortOn === 'ingredients') {
      if (sortingOrder === 'ascending') {
        sortedRecipes = recipesArray.sort((a, b) => (a.ingredients.length - b.ingredients.length))
      } else if (sortingOrder === 'descending') {
        sortedRecipes = recipesArray.sort((a, b) => (b.ingredients.length - a.ingredients.length))
      }
    }
  } else {
    // if no sorting is selected - sorted array will be same as filtered array
    sortedRecipes = recipesArray
  }
  // show selected recipes
  showRecipes(sortedRecipes)
}

// pick a random recipe
const pickARandomRecipe = (recipesArray) => {
  const randomRecipe = [recipesArray[Math.floor(Math.random() * recipesArray.length)]]
  showRecipes(randomRecipe)
}

// show recipes - create a card and add recipe information
const showRecipes = (recipesArray) => {
  // clear cards container
  cardsContainer.innerHTML = ""
  // display recipes in array
  recipesArray.forEach(recipe => {
    cardsContainer.innerHTML +=
      `
        <article class="card">
          <img src="${recipe.image}" alt="${recipe.title}">
          <h2>${recipe.title}</h2>
          <hr>
          <div class="details">
            <span>
              <h3>Cuisine:</h3>
              <p>${recipe.cuisine}</p>
            </span>
            <span>
              <h3>Time:</h3>
              <p>${recipe.readyInMinutes} minutes</p>
            </span>
          </div>
          <hr>
          <div class="ingredients">
            <h3>Ingredients</h3>
            <ul></ul> 
          </div>
        </article>
      `
    // local DOM selector to list the ingredients
    const ingredientsList = document.getElementsByTagName("UL")[document.getElementsByTagName("UL").length - 1]
    recipe.ingredients.forEach(ingredient => {
      ingredientsList.innerHTML += `<li>${ingredient}</li>`
    })
  })
}






// Add event listeners when filter/sorting options is changed
filterOptions.forEach(option => {
  option.addEventListener("change", () => findSelectedFilters())
})
sortingOptions.forEach(option => {
  option.addEventListener("change", () => findSelectedFilters())
})

// add event listener to the random recipe button
randomButton.addEventListener("click", () => pickARandomRecipe(RECIPES))

// show all recipes when site is loaded
document.getElementsByTagName("html")[0].addEventListener("load", showRecipes(RECIPES))




/*

// check which filters are selected (checked)
const checkSelectedFilters = () => {
  let selectedFiltersList = []
  let selectedFiltersObject = {
    diet: [],
    cuisine: [],
    cookingTime: [],
    numberOfIngredients: []
  }
  // loop through filter options
  Object.keys(selectedFiltersObject).forEach(key => {
    filterOptions.forEach((filterOption) => {
      if ((filterOption.name === key) && (filterOption.checked)) {
        selectedFiltersObject[key].push(filterOption.value)
        selectedFiltersList.push(filterOption)
      }
    })
  })
  // only show the selected filter options
  showCheckedOption("filter", selectedFiltersList)
  // display filters selection
  displaySelectedFilters(selectedFiltersObject)
}

// check which sorting option is selected
const checkSelectedSortingOption = () => {
  let selectedSortingOption
  // loop thought the sorting options
  sortingOptions.forEach((sortingOption) => {
    if (sortingOption.checked) {
      selectedSortingOption = sortingOption
    }
  })
  // only show the selected sorting option
  const selectedSortingOptionArray = new Array(selectedSortingOption)
  showCheckedOption("sorting", selectedSortingOptionArray)
  // display sorting selection
  displaySortingSelection(selectedSortingOption)
}

// show all filters/sorting options
const showAll = (container) => {
  container.classList.add("open")
  const containerGroups = container.children
  for (let i = 0; i < containerGroups.length; i++) {
    containerGroups[i].classList.remove("hidden")
  }
}
// hide all filters/sorting options
const hideAll = (container) => {
  container.classList.remove("open")
  const containerGroups = container.children
  for (let i = 0; i < containerGroups.length; i++) {
    containerGroups[i].classList.add("hidden")
  }
}

// show only the checked options
const showCheckedOption = (option, selectedOptions) => {
  let optionsList
  if (option === "sorting") {
    optionsList = sortingOptions
  } else {
    optionsList = filterOptions
  }
  // loop thought the options and hide all
  optionsList.forEach((sortingOption) => {
    sortingOption.parentElement.parentElement.parentElement.classList.add("hidden")
  })
  // show the selected option groups
  for (let i = 0; i < selectedOptions.length; i++) {
    selectedOptions[i].parentElement.parentElement.parentElement.classList.remove("hidden")
  }
  // remove open class on the main container
  selectedOptions[0].parentElement.parentElement.parentElement.parentElement.classList.remove("open")
}

// Listen to when toogle filters/sorting heading is clicked to toogle the options
filtersHeading.addEventListener("click", () => {
  if (filtersContainer.classList.contains("open")) {
    hideAll(filtersContainer)
  } else {
    showAll(filtersContainer)
  }
})
sortingHeading.addEventListener("click", () => {
  if (sortingContainer.classList.contains("open")) {
    hideAll(sortingContainer)
  } else {
    showAll(sortingContainer)
  }
})

*/





