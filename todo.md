Focus on / requirements:
[X] adjust random recipe function to work with api data
[X] filter out recipes without information i'm interested in fetchedRecipes
[] Show a useful message to the user in case the daily quota has been reached
[] Implement local storage caching to reduce API requests
[] Show a loading state while fetching data

Strech goals (pick at least one below):
[] Implement a feature so that the user will be able to see the instructions/steps, for example when clicking a button.
[] Allow users to search for specific recipe names or ingredients
[] Allow users to save/like recipes and store them in local storage. This includes adding a heart button to the recipe card and adding a "View favourites" button that only shows favourite recipes.
[] Implement pagination for large results or infinite scrolling (e.g. fetching more recipes when the user has reached the bottom)


If time allows:
[] show filtering/sorting options when active 
[] add <a> tag with source url to the recipe cards
[] display a text with how many recipes are showing


Notes:
key differences mockup data -> api data:
* cuisine -> cuisines
* popularity -> spoonacularScore
* ingredients -> extendedIngredients.amout extendedIngredients.name extendedIngredients.unit




