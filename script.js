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
const messageBox = document.getElementById("message-box")

const cardsContainer = document.getElementById("cards-section")
const filterOptions = document.querySelectorAll(".filter-option")
const sortingOptions = document.querySelectorAll(".sorting-option")
// const filtersHeading = document.getElementById("filter-heading")
// const filtersContainer = document.getElementById("filters-container")
// const sortingHeading = document.getElementById("sort-heading")
// const sortingContainer = document.getElementById("sorting-container")

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
  console.table(selectedFilters)
  let filteredRecipes = RECIPES
  // loop through the selected filtersArray
  for (const [key, value] of Object.entries(selectedFilters)) {
    // 
    if (value.length > 0) {
      value.forEach(val => {
        console.log('Checking for filters:', key, val)
        filteredRecipes = filterRecipes(filteredRecipes, key, val)
        console.log('Filtered recipes:', filteredRecipes)
      })

    }

  }


  // if several filters are checked it shows recipes applying to all filters
  // want to show recipes applying to either on OR the other filter!!!


  console.log('Filtered recipes:', filteredRecipes)



  // sort filtered recipes
  sortRecipes(filteredRecipes)



}



// filter recipes
const filterRecipes = (recipeArray, filter, value) => {
  let filteredRecipes
  if (filter === 'diets') {
    console.log('Filter key is diets')
    filteredRecipes = recipeArray.filter(recipe => (recipe[filter].includes(value)))
  } else if (filter === 'cuisine') {
    console.log('Filter key is cuisine')
    filteredRecipes = recipeArray.filter(recipe => (recipe[filter].toLowerCase() === value))
    // doesnt work for middle eastern.....................
  } else if (filter === 'cookingTime') {
    console.log('Filter key is cooking time')
    // filter on time

  } else if (filter === 'numberOfIngredients') {
    console.log('Filter key is number of ingredients')
    // filter on number of ingredients

  } else {
    // error???
  }

  return filteredRecipes
}

// sort recipes
const sortRecipes = (recipesArray) => {
  // if no filters are selected (filtersArray undefined) 
  let sortedRecipes = (recipesArray ? recipesArray : RECIPES)
  console.log(selectedSorting)
  // display message in the placeholder card
  const sortingMessage = (selectedSorting
    ? (`<p>
          Sorting on ${selectedSorting.split('-')[0]} in the ${selectedSorting.split('-')[1]} order
        </p>`
    )
    : ("<p>No sorting selected</p>"))
  messageBox.innerHTML += sortingMessage

  // show selected recipes
  showRecipes(sortedRecipes)
}


// show recipes - create a card and add recipe information
const showRecipes = (recipesArray) => {
  // clear container
  cardsContainer.innerHTML = ""
  // display recipes
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





