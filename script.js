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
const dropdowns = document.querySelectorAll('.dropdown')
const resetFiltersButton = document.getElementById('reset-filters-button')
const resetSortingButton = document.getElementById('reset-sorting-button')

// function to run when a filter/sorting option is changed 
const renderRecipes = () => {
  // check which filters/sorting are selected
  const selectedFilters = findSelectedFilters()
  const selectedSorting = findSelectedSorting()
  // filter recipes
  const filteredRecipes = applyFilters(selectedFilters)
  // sort recipes
  const sortedRecipes = sortRecipes(filteredRecipes, selectedSorting)
  // show recipes
  showRecipes(sortedRecipes)
}

// loop through the filter options to check which ones are selected
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
  return selectedFilters
}

// loop through sorting options to check which one is selected
const findSelectedSorting = () => {
  let selectedSorting = null
  // if radio is checked add id to sorting varaible
  sortingOptions.forEach(option => {
    (option.checked ? selectedSorting = option.id : null)
  })
  return selectedSorting
}


// apply selcted filters
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
  return filteredRecipes
}

// filter recipes
const filterRecipes = (recipeArray, filter, value) => {
  let filteredRecipes
  // different cases depending on the filter
  switch (filter) {
    case 'diets':
      // filter on diets
      filteredRecipes = recipeArray.filter(recipe => (recipe[filter].includes(value)))
      break
    case 'cuisine':
      // filter on cuisine
      // using .toLowerCase() and .replace(' ', '-') to change eg. 'Middle Eastern' to 'middle-eastern'
      filteredRecipes = recipeArray.filter(recipe => (recipe[filter].toLowerCase().replace(' ', '-') === value))
      break
    case 'cookingTime':
      // filter on cooking time
      switch (value) {
        case 'under-15-min':
          filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes < 15))
          break
        case '15-30-min':
          filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes >= 15 && recipe.readyInMinutes <= 30))
          break
        case '30-60-min':
          filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes >= 30 && recipe.readyInMinutes <= 60))
          break
        case 'over-60-min':
          filteredRecipes = recipeArray.filter(recipe => (recipe.readyInMinutes > 60))
          break
        default:
          break
      }
      break
    case 'numberOfIngredients':
      // filter on number of ingredients
      switch (value) {
        case 'under-5-ingredients':
          filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length < 5))
          break
        case '5-10-ingredients':
          filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length >= 5 && recipe.ingredients.length <= 10))
          break
        case '11-15-ingredients':
          filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length >= 11 && recipe.ingredients.length <= 15))
          break
        case 'over-15-ingredients':
          filteredRecipes = recipeArray.filter(recipe => (recipe.ingredients.length > 15))
          break
        default:
          break
      }
      break
    default:
      break
  }
  return filteredRecipes
}

// sort recipes function
const sortRecipes = (recipesArray, sortingOption) => {
  let sortedRecipes
  // if a sorting option is selected - sort recipes array
  if (sortingOption) {
    const sortOn = sortingOption.split('-')[0]
    const sortingOrder = sortingOption.split('-')[1]
    // different cases for each sorting option
    switch (sortOn) {
      case 'time':
        switch (sortingOrder) {
          case 'ascending':
            sortedRecipes = recipesArray.sort((a, b) => (a.readyInMinutes - b.readyInMinutes))
            break
          case 'descending':
            sortedRecipes = recipesArray.sort((a, b) => (b.readyInMinutes - a.readyInMinutes))
            break
          default:
            break
        }
        break
      case 'popularity':
        switch (sortingOrder) {
          case 'ascending':
            sortedRecipes = recipesArray.sort((a, b) => (a.popularity - b.popularity))
            break
          case 'descending':
            sortedRecipes = recipesArray.sort((a, b) => (b.popularity - a.popularity))
            break
          default:
            break
        }
        break
      case 'price':
        switch (sortingOrder) {
          case 'ascending':
            sortedRecipes = recipesArray.sort((a, b) => (a.pricePerServing - b.pricePerServing))
            break
          case 'descending':
            sortedRecipes = recipesArray.sort((a, b) => (b.pricePerServing - a.pricePerServing))
            break
          default:
            break
        }
        break
      case 'ingredients':
        switch (sortingOrder) {
          case 'ascending':
            sortedRecipes = recipesArray.sort((a, b) => (a.ingredients.length - b.ingredients.length))
            break
          case 'descending':
            sortedRecipes = recipesArray.sort((a, b) => (b.ingredients.length - a.ingredients.length))
            break
          default:
            break
        }
        break
      default:
        break
    }
  } else {
    // if no sorting option is selected - sort array on recipe id
    sortedRecipes = recipesArray.sort((a, b) => (a.id - b.id))
  }
  return sortedRecipes
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
  // if no recipes matches the selected filters - recipesArray will be empty
  if (recipesArray.length === 0) {
    // display a message to the user
    cardsContainer.innerHTML +=
      `
    <article class="card">
      <h2>No recipes matching the selected filters</h2>
    </article>
    `
  } else {
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
              <h3>Diets:</h3>
              <p>${recipe.diets.join(', ')}</p>
            </span>
            <span>
              <h3>Cuisine:</h3>
              <p>${recipe.cuisine}</p>
            </span>
            <span>
              <h3>Time:</h3>
              <p>${recipe.readyInMinutes} minutes</p>
            </span>
            <span>
              <h3>Price per Serving:</h3>
              <p>${recipe.pricePerServing}</p>
            </span>
            <span>
              <h3>Popularity:</h3>
              <p>${recipe.popularity}</p>
            </span>
          </div>
          <hr>
          <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}</ul> 
          </div>
        </article>
      `
    })
  }
}

// event listeners
// filter/sorting options is changed (checked/unchecked by user)
filterOptions.forEach(option => {
  option.addEventListener("change", () => renderRecipes())
})
sortingOptions.forEach(option => {
  option.addEventListener("change", () => renderRecipes())
})
// random recipe button is clicked
randomButton.addEventListener("click", () => pickARandomRecipe(RECIPES))
// toggle dropdowns
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    // show/hide options
    dropdown.nextElementSibling.classList.toggle('expanded')
    // change dropdown-icon
    dropdown.nextElementSibling.classList.contains('expanded')
      ? dropdown.querySelector('.dropdown-icon').innerHTML = '&#9650'
      : dropdown.querySelector('.dropdown-icon').innerHTML = '&#9660'
  })
})
// reset filters buttons is clicked
resetFiltersButton.addEventListener('click', () => {
  filterOptions.forEach(option => {
    option.checked = false
  })
  renderRecipes()
})
// reset sorting buttons is clicked
resetSortingButton.addEventListener('click', () => {
  sortingOptions.forEach(option => {
    option.checked = false
  })
  renderRecipes()
})

// show all recipes when site is loaded
document.getElementsByTagName("html")[0].addEventListener("load", showRecipes(RECIPES))

