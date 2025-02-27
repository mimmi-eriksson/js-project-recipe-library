// DOM selectors
const messagebox = document.getElementById("message-box")
const filterOptions = document.querySelectorAll(".filter-option")
const sortingOptions = document.querySelectorAll(".sorting-option")
const filtersHeading = document.getElementById("filter-heading")
const filtersContainer = document.getElementById("filters-container")
const sortingHeading = document.getElementById("sort-heading")
const sortingContainer = document.getElementById("sorting-container")


// funtion to check which filters are selected (checked)
const checkSelectedFilters = () => {
  let selectedFilters = {
    diet: [],
    cuisine: [],
    cookingTime: [],
    numberOfIngredients: []
  }
  // loop through filter options
  Object.keys(selectedFilters).forEach(key => {
    filterOptions.forEach((filterOption) => {
      if ((filterOption.name === key) && (filterOption.checked)) {
        selectedFilters[key].push(filterOption.value)
      }
    })
  })
  // display filters selection
  displaySelectedFilters(selectedFilters)
}

// function to display the user's filter selection
const displaySelectedFilters = (selectedFilters) => {
  // display message in the placeholder card
  messagebox.innerHTML += `<p>Filtering on:</p>`
  for (const [key, value] of Object.entries(selectedFilters)) {
    if (value.length > 0) {
      messagebox.innerHTML += `<p> ${key}: ${value}</p>`
    }
  }
}

// function to check which sorting option is selected
const checkSelectedSortingOption = () => {
  let selectedSortingOption
  // loop thought the sorting options
  sortingOptions.forEach((sortingOption) => {
    if (sortingOption.checked) {
      selectedSortingOption = sortingOption
    }
  })
  //
  // display sorting selection
  displaySortingSelection(selectedSortingOption)
}

// function to display the user's sorting selection
const displaySortingSelection = (selectedSortingOption) => {
  // display message in the placeholder card
  const sortOn = selectedSortingOption.id.substring(selectedSortingOption.id.lastIndexOf("-"), -1)
  const sortingOrder = selectedSortingOption.id.substring((selectedSortingOption.id.lastIndexOf("-") + 1))
  messagebox.innerHTML += `<p>Sorting on ${sortOn} in the ${sortingOrder} order</p>`
}

// show all filters/sorting options
const showAll = (option) => {
  let container = (option === "filters") ? filtersContainer : sortingContainer;
  container.classList.add("open")
  const containerGroups = container.children
  for (let i = 0; i < containerGroups.length; i++) {
    containerGroups[i].classList.remove("hidden")
  }
}
// hide all filters/sorting options
const hideAll = (option) => {
  let container = (option === "filters") ? filtersContainer : sortingContainer;
  container.classList.remove("open")
  const containerGroups = container.children
  for (let i = 0; i < containerGroups.length; i++) {
    containerGroups[i].classList.add("hidden")
  }
}

// Listen to when a filter/sorting option is changed (user selection)
filterOptions.forEach((filterOption) => {
  filterOption.addEventListener("change", () => checkSelectedFilters())
})
sortingOptions.forEach((sortingOption) => {
  sortingOption.addEventListener("change", () => checkSelectedSortingOption())
})

// toogle filters/sorting options when heading is clicked
filtersHeading.addEventListener("click", () => {
  if (filtersContainer.classList.contains("open")) {
    hideAll("filters")
  } else {
    showAll("filters")
  }
})
sortingHeading.addEventListener("click", () => {
  if (sortingContainer.classList.contains("open")) {
    hideAll("sorting")
  } else {
    showAll("sorting")
  }
})







