// DOM selectors
const messagebox = document.getElementById("message-box")
const filterOptions = document.querySelectorAll(".filter-option")
const sortingOptions = document.querySelectorAll(".sorting-option")
const filtersHeading = document.getElementById("filter-heading")
const filtersContainer = document.getElementById("filters-container")
const sortingHeading = document.getElementById("sort-heading")
const sortingContainer = document.getElementById("sorting-container")

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

// display the user's filter selection
const displaySelectedFilters = (selectedFilters) => {
  // display message in the placeholder card
  messagebox.innerHTML += `<p>Filtering on:</p>`
  for (const [key, value] of Object.entries(selectedFilters)) {
    if (value.length > 0) {
      messagebox.innerHTML += `<p> ${key}: ${value}</p>`
    }
  }
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

// display the user's sorting selection
const displaySortingSelection = (selectedSortingOption) => {
  // display message in the placeholder card
  const sortOn = selectedSortingOption.id.substring(selectedSortingOption.id.lastIndexOf("-"), -1)
  const sortingOrder = selectedSortingOption.id.substring((selectedSortingOption.id.lastIndexOf("-") + 1))
  messagebox.innerHTML += `<p>Sorting on ${sortOn} in the ${sortingOrder} order</p>`
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

// Listen to when a filter/sorting option is changed (user selection)
filterOptions.forEach((filterOption) => {
  filterOption.addEventListener("change", () => checkSelectedFilters())
})
sortingOptions.forEach((sortingOption) => {
  sortingOption.addEventListener("change", () => checkSelectedSortingOption())
})

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







