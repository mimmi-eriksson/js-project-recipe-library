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

// global variables
const URL = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${'cff3c1af29a94a72bf19a8b99732e061'}`
let fetchedRecipes = []



// stored recipes from a fetch to play around with
const storedRecipes = {
  "recipes": [
    {
      "id": 796873,
      "image": "https://img.spoonacular.com/recipes/796873-556x370.jpg",
      "imageType": "jpg",
      "title": "Yogurt Parfait",
      "readyInMinutes": 15,
      "servings": 2,
      "sourceUrl": "https://www.afrolems.com/2016/08/06/yogurt-parfait-recipe/",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 36,
      "creditsText": "Afrolems",
      "license": "CC BY 4.0",
      "sourceName": "Afrolems",
      "pricePerServing": 282.4,
      "extendedIngredients": [
        {
          "id": 8212,
          "aisle": "Cereal",
          "image": "granola.jpg",
          "consistency": "SOLID",
          "name": "cereal",
          "nameClean": "granola",
          "original": "1 cup of cereal or granola",
          "originalName": "cereal or granola",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 122,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 9431,
          "aisle": "Produce",
          "image": "mixed-fresh-fruit.jpg",
          "consistency": "SOLID",
          "name": "fruit",
          "nameClean": "mixed fruit",
          "original": "1 cup of fresh fruit",
          "originalName": "fresh fruit",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 237,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2064,
          "aisle": "Produce",
          "image": "mint.jpg",
          "consistency": "SOLID",
          "name": "mint",
          "nameClean": "mint",
          "original": "Fresh mint",
          "originalName": "Fresh mint",
          "amount": 2,
          "unit": "servings",
          "meta": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 2,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 19296,
          "aisle": "Nut butters, Jams, and Honey",
          "image": "honey.png",
          "consistency": "LIQUID",
          "name": "honey",
          "nameClean": "honey",
          "original": "2 tablespoons of honey",
          "originalName": "honey",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1118,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "plain-yogurt.jpg",
          "consistency": "LIQUID",
          "name": "non fat yogurt",
          "nameClean": "fat free yogurt",
          "original": "2 cups of plain non fat yogurt",
          "originalName": "plain non fat yogurt",
          "amount": 2,
          "unit": "cups",
          "meta": [
            "plain"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 490,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "summary": "Yogurt Parfait could be just the <b>lacto ovo vegetarian</b> recipe you've been looking for. For <b>$2.82 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>22g of protein</b>, <b>12g of fat</b>, and a total of <b>554 calories</b>. This recipe serves 2. If you have cereal, non fat yogurt, mint, and a few other ingredients on hand, you can make it. It is brought to you by Afrolems. 2 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>15 minutes</b>. It works well as a breakfast. With a spoonacular <b>score of 87%</b>, this dish is spectacular. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/fruit-and-yogurt-parfait-recipe-grapes-and-granola-parfait-47352\">Fruit And Yogurt Parfait Recipe (grapes And Granola Parfait)</a>, <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-486629\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>, and <a href=\"https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1238997\">amaranth yogurt parfait – popped amaranth parfait with fruits</a>.",
      "cuisines": [],
      "dishTypes": [
        "morning meal",
        "brunch",
        "breakfast"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "<p>Add the honey to the plain yoghurt and mix well.In a clean tall glass cup, layer 1/2 cup of yoghurt at the bottom and allow to settle.Then place 1/4 cup fruits followed by 1/4 cup granola etc.Alternate the layers of fruits and  granola/cereal etc with yoghurt until the glass is filled.Garnish with fresh herb leaves. Repeat the process for the second glass cup.Serve parfaits immediately to keep granola or cereal crunchy.</p>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Add the honey to the plain yoghurt and mix well.In a clean tall glass cup, layer 1/2 cup of yoghurt at the bottom and allow to settle.Then place 1/4 cup fruits followed by 1/4 cup granola etc.Alternate the layers of fruits and  granola/cereal etc with yoghurt until the glass is filled.",
              "ingredients": [
                {
                  "id": 8212,
                  "name": "granola",
                  "localizedName": "granola",
                  "image": "granola.jpg"
                },
                {
                  "id": 1116,
                  "name": "yogurt",
                  "localizedName": "yogurt",
                  "image": "plain-yogurt.jpg"
                },
                {
                  "id": 8029,
                  "name": "cereal",
                  "localizedName": "cereal",
                  "image": "rice-crispy-cereal.png"
                },
                {
                  "id": 9431,
                  "name": "fruit",
                  "localizedName": "fruit",
                  "image": "mixed-fresh-fruit.jpg"
                },
                {
                  "id": 19296,
                  "name": "honey",
                  "localizedName": "honey",
                  "image": "honey.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Garnish with fresh herb leaves. Repeat the process for the second glass cup.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Serve parfaits immediately to keep granola or cereal crunchy.",
              "ingredients": [
                {
                  "id": 8212,
                  "name": "granola",
                  "localizedName": "granola",
                  "image": "granola.jpg"
                },
                {
                  "id": 8029,
                  "name": "cereal",
                  "localizedName": "cereal",
                  "image": "rice-crispy-cereal.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 85.24403381347656,
      "spoonacularSourceUrl": "https://spoonacular.com/yogurt-parfait-796873"
    },
    {
      "id": 638369,
      "image": "https://img.spoonacular.com/recipes/638369-556x370.jpg",
      "imageType": "jpg",
      "title": "Korean Sweet n Sour Chicken",
      "readyInMinutes": 30,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/6458DTC4/chicken-tangsuyuk-sweet-n-sour-chicken",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 15,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 35,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 271.36,
      "extendedIngredients": [
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "SOLID",
          "name": "carrots",
          "nameClean": "carrot",
          "original": "•2 carrots, cut into thin pieces",
          "originalName": "carrots, cut into thin pieces",
          "amount": 2,
          "unit": "",
          "meta": [
            "cut into thin pieces"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 5062,
          "aisle": "Meat",
          "image": "chicken-breasts.png",
          "consistency": "SOLID",
          "name": "chicken breasts",
          "nameClean": "chicken breast",
          "original": "2 lbs boneless chicken breasts, cut into strips",
          "originalName": "boneless chicken breasts, cut into strips",
          "amount": 2,
          "unit": "lbs",
          "meta": [
            "boneless",
            "cut into strips"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 907.185,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2048,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "apple-cider-vinegar.jpg",
          "consistency": "LIQUID",
          "name": "cider vinegar",
          "nameClean": "apple cider vinegar",
          "original": "•3 tbsp cider vinegar",
          "originalName": "cider vinegar",
          "amount": 3,
          "unit": "tbsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "corn starch",
          "nameClean": "corn starch",
          "original": "•2 tbsp corn starch (+ 2 tbsp water mixed together)",
          "originalName": "corn starch (+ 2 tbsp water mixed together)",
          "amount": 2,
          "unit": "tbsp",
          "meta": [
            "mixed"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "cornstarch",
          "nameClean": "corn starch",
          "original": "•2 tbsp cornstarch",
          "originalName": "cornstarch",
          "amount": 2,
          "unit": "tbsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 99296,
          "aisle": "Health Foods",
          "image": "edamame.png",
          "consistency": "SOLID",
          "name": "edamame",
          "nameClean": "edamame",
          "original": "•1 cup edamame",
          "originalName": "edamame",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 148,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "egg",
          "nameClean": "egg",
          "original": "•1 beaten egg",
          "originalName": "beaten egg",
          "amount": 1,
          "unit": "",
          "meta": [
            "beaten"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "wheat flour",
          "original": "•½ cup flour",
          "originalName": "flour",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 62.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "•1 medium size onion, cut into strips",
          "originalName": "onion, cut into strips",
          "amount": 1,
          "unit": "medium size",
          "meta": [
            "cut into strips"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "medium size",
              "unitLong": "medium size"
            },
            "metric": {
              "amount": 1,
              "unitShort": "medium size",
              "unitLong": "medium size"
            }
          }
        },
        {
          "id": 9273,
          "aisle": "Beverages",
          "image": "pineapple-juice.jpg",
          "consistency": "LIQUID",
          "name": "pineapple juice",
          "nameClean": "pineapple juice",
          "original": "•1/4 cup pineapple juice (optional if available)",
          "originalName": "pineapple juice (optional if available)",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "(optional if available)"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 16124,
          "aisle": "Condiments",
          "image": "soy-sauce.jpg",
          "consistency": "LIQUID",
          "name": "soy sauce",
          "nameClean": "soy sauce",
          "original": "•2 tbsp soy sauce",
          "originalName": "soy sauce",
          "amount": 2,
          "unit": "tbsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "•3 tbsp sugar",
          "originalName": "sugar",
          "amount": 3,
          "unit": "tbsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 3,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 4669,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "vegetable-oil.jpg",
          "consistency": "LIQUID",
          "name": "vegetable oil",
          "nameClean": "vegetable oil",
          "original": "Vegetable Oil",
          "originalName": "Vegetable Oil",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "•1 cup of water",
          "originalName": "of water",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 236.588,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "summary": "Korean Sweet n Sour Chicken requires roughly <b>30 minutes</b> from start to finish. One serving contains <b>604 calories</b>, <b>56g of protein</b>, and <b>22g of fat</b>. This recipe serves 4 and costs $2.71 per serving. A mixture of sugar, soy sauce, cider vinegar, and a handful of other ingredients are all it takes to make this recipe so flavorful. This recipe from Foodista has 2 fans. This recipe is typical of Chinese cuisine. It works well as a main course. It is a good option if you're following a <b>dairy free</b> diet. With a spoonacular <b>score of 78%</b>, this dish is pretty good. Similar recipes are <a href=\"https://spoonacular.com/recipes/korean-sweet-n-sour-chicken-1229083\">Korean Sweet n Sour Chicken</a>, <a href=\"https://spoonacular.com/recipes/korean-cabbage-wraps-with-sweet-and-sour-cucumber-salad-301159\">Korean Cabbage Wraps with Sweet-and-Sour Cucumber Salad</a>, and <a href=\"https://spoonacular.com/recipes/grilled-korean-bbq-short-rib-dogs-with-sweet-peach-relish-spicy-korean-slaw-549399\">Grilled Korean BBQ Short Rib Dogs with Sweet Peach Relish + Spicy Korean Slaw</a>.",
      "cuisines": [
        "Chinese",
        "Asian"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "dairy free"
      ],
      "occasions": [],
      "instructions": "<ol><li>Cut the chicken into thin strips, about 1 or 2-inch pieces. Add soy sauce to the chicken for a short marination; mix well and set aside.</li><li>Cut the vegetables into large bite-sized pieces. Set aside until the sauce is ready and thickened.</li><li>Make batter by mixing the flour, cornstarch, water and beaten egg. Add more flour until a thick consistency is reached. Dip the marinated chicken strips into the batter.</li><li>Bring vegetable oil to medium high heat. Deep fry each of the strips for about 3, 4 min for each batch or until browned and cooked through. When finished, place on paper towel-lined dish to remove excess oil. Once the first round of frying is done, heat the oil and re-fry the batch for the 2nd time to make it really crispy (optional).</li><li>To make the sauce bring the following ingredients in a saucepan: one cup of water along 3 tbsp vinegar, 3 tbsp sugar, and 2 tbsp of soy sauce. Bring to a rapid boil and then add the mixture of cornstarch and water. Add desired vegetables and let simmer for about 5 minutes or until it thickens.</li><li>On a large plate, add the fried chicken strips, then pour over the sauce/vegetable mixture and serve while warm.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Cut the chicken into thin strips, about 1 or 2-inch pieces.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Add soy sauce to the chicken for a short marination; mix well and set aside.",
              "ingredients": [
                {
                  "id": 16124,
                  "name": "soy sauce",
                  "localizedName": "soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Cut the vegetables into large bite-sized pieces. Set aside until the sauce is ready and thickened.Make batter by mixing the flour, cornstarch, water and beaten egg.",
              "ingredients": [
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 11583,
                  "name": "vegetable",
                  "localizedName": "vegetable",
                  "image": "mixed-vegetables.png"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Add more flour until a thick consistency is reached. Dip the marinated chicken strips into the batter.Bring vegetable oil to medium high heat. Deep fry each of the strips for about 3, 4 min for each batch or until browned and cooked through. When finished, place on paper towel-lined dish to remove excess oil. Once the first round of frying is done, heat the oil and re-fry the batch for the 2nd time to make it really crispy (optional).To make the sauce bring the following ingredients in a saucepan: one cup of water along 3 tbsp vinegar, 3 tbsp sugar, and 2 tbsp of soy sauce. Bring to a rapid boil and then add the mixture of cornstarch and water.",
              "ingredients": [
                {
                  "id": 1015062,
                  "name": "chicken tenders",
                  "localizedName": "chicken tenders",
                  "image": "chicken-tenders-or-fingers.png"
                },
                {
                  "id": 4669,
                  "name": "vegetable oil",
                  "localizedName": "vegetable oil",
                  "image": "vegetable-oil.jpg"
                },
                {
                  "id": 20027,
                  "name": "corn starch",
                  "localizedName": "corn starch",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 16124,
                  "name": "soy sauce",
                  "localizedName": "soy sauce",
                  "image": "soy-sauce.jpg"
                },
                {
                  "id": 2053,
                  "name": "vinegar",
                  "localizedName": "vinegar",
                  "image": "vinegar-(white).jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                },
                {
                  "id": 19335,
                  "name": "sugar",
                  "localizedName": "sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 0,
                  "name": "dip",
                  "localizedName": "dip",
                  "image": ""
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 405895,
                  "name": "paper towels",
                  "localizedName": "paper towels",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/paper-towels.jpg"
                },
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 4,
                "unit": "minutes"
              }
            },
            {
              "number": 5,
              "step": "Add desired vegetables and let simmer for about 5 minutes or until it thickens.On a large plate, add the fried chicken strips, then pour over the sauce/vegetable mixture and serve while warm.",
              "ingredients": [
                {
                  "id": 1015062,
                  "name": "chicken tenders",
                  "localizedName": "chicken tenders",
                  "image": "chicken-tenders-or-fingers.png"
                },
                {
                  "id": 11583,
                  "name": "vegetable",
                  "localizedName": "vegetable",
                  "image": "mixed-vegetables.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                }
              ],
              "equipment": [],
              "length": {
                "number": 5,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 80.89018249511719,
      "spoonacularSourceUrl": "https://spoonacular.com/korean-sweet-n-sour-chicken-638369"
    },
    {
      "id": 661925,
      "image": "https://img.spoonacular.com/recipes/661925-556x370.jpg",
      "imageType": "jpg",
      "title": "Strawberry-Mango Quinoa Salad",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/K2BYJP76/strawberry-mango-quinoa-salad",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 9,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 41,
      "healthScore": 66,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 187.33,
      "extendedIngredients": [
        {
          "id": 11206,
          "aisle": "Produce",
          "image": "cucumber.jpg",
          "consistency": "SOLID",
          "name": "cucumber",
          "nameClean": "cucumber",
          "original": "3/4 cup cucumber",
          "originalName": "cucumber",
          "amount": 0.75,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 99.75,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2064,
          "aisle": "Produce",
          "image": "mint.jpg",
          "consistency": "SOLID",
          "name": "mint",
          "nameClean": "mint",
          "original": "2 tablespoons chopped fresh mint",
          "originalName": "chopped fresh mint",
          "amount": 2,
          "unit": "tablespoons",
          "meta": [
            "fresh",
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 19296,
          "aisle": "Nut butters, Jams, and Honey",
          "image": "honey.png",
          "consistency": "LIQUID",
          "name": "honey",
          "nameClean": "honey",
          "original": "1 T. honey",
          "originalName": "honey",
          "amount": 1,
          "unit": "T",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 9160,
          "aisle": "Produce",
          "image": "lime-juice.png",
          "consistency": "LIQUID",
          "name": "lime juice",
          "nameClean": "lime juice",
          "original": "2 T. lime juice",
          "originalName": "lime juice",
          "amount": 2,
          "unit": "T",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 2,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 1009159,
          "aisle": "Produce",
          "image": "zest-lime.jpg",
          "consistency": "SOLID",
          "name": "lime zest",
          "nameClean": "lime peel",
          "original": "1/2 t. lime zest",
          "originalName": "lime zest",
          "amount": 0.5,
          "unit": "t",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.167,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.167,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 9176,
          "aisle": "Produce",
          "image": "mango.jpg",
          "consistency": "SOLID",
          "name": "mango",
          "nameClean": "mango",
          "original": "1/2 mango",
          "originalName": "mango",
          "amount": 0.5,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "1/4 c. olive oil",
          "originalName": "olive oil",
          "amount": 0.25,
          "unit": "c",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 54,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10211821,
          "aisle": "Produce",
          "image": "bell-pepper-orange.png",
          "consistency": "SOLID",
          "name": "bell pepper",
          "nameClean": "bell pepper",
          "original": "pepper",
          "originalName": "pepper",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 20035,
          "aisle": "Health Foods",
          "image": "uncooked-quinoa.png",
          "consistency": "SOLID",
          "name": "quinoa",
          "nameClean": "quinoa",
          "original": "1 c. quinoa, well rinsed",
          "originalName": "quinoa, well rinsed",
          "amount": 1,
          "unit": "c",
          "meta": [
            "rinsed",
            "well"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 170,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "table salt",
          "original": "salt",
          "originalName": "salt",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1001116,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "plain-yogurt.jpg",
          "consistency": "LIQUID",
          "name": "cream",
          "nameClean": "plain yogurt",
          "original": "1 T. sour cream (or plain yogurt can be subbed)",
          "originalName": "sour cream (or plain yogurt can be subbed)",
          "amount": 1,
          "unit": "T",
          "meta": [
            "plain",
            "sour",
            "canned",
            "(or yogurt can be subbed)"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 9316,
          "aisle": "Produce",
          "image": "strawberries.png",
          "consistency": "SOLID",
          "name": "strawberries",
          "nameClean": "strawberries",
          "original": "1 1/2 cups strawberries, hulled and quartered",
          "originalName": "strawberries, hulled and quartered",
          "amount": 1.5,
          "unit": "cups",
          "meta": [
            "hulled",
            "quartered"
          ],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 216,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "1 1/2 c. water",
          "originalName": "water",
          "amount": 1.5,
          "unit": "c",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 354.882,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "summary": "Need a <b>gluten free and lacto ovo vegetarian hor d'oeuvre</b>? Strawberry-Mango Quinoa Salad could be an awesome recipe to try. This recipe serves 4. One serving contains <b>354 calories</b>, <b>8g of protein</b>, and <b>17g of fat</b>. For <b>$1.87 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. 41 person were impressed by this recipe. This recipe from Foodista requires cucumber, cream, mango, and strawberries. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is tremendous. Similar recipes are <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1578467\">Strawberry-Mango Quinoa Salad</a>, <a href=\"https://spoonacular.com/recipes/strawberry-mango-quinoa-salad-1588251\">Strawberry-Mango Quinoa Salad</a>, and <a href=\"https://spoonacular.com/recipes/strawberry-mango-chopped-spinach-quinoa-salad-with-sesame-lime-vinaigrette-1469287\">Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette</a>.",
      "cuisines": [],
      "dishTypes": [
        "side dish",
        "antipasti",
        "salad",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ],
      "diets": [
        "gluten free",
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "<ol><li>Prepare the quinoa: In a medium saucepan combine the quinoa, water and 1/4 t. salt. Bring to a boil, reduce heat to low, cover and simmer until the liquid is just absorbed, about 15 minutes. Spread the cooked quinoa out on a baking sheet to cool for about 20 minutes.</li><li>In a large bowl whisk together lime juice, zest, honey, sour cream and olive oil. Add the cooled quinoa, strawberries, mango, cucumber and mint. Toss well to combine and season with salt &amp; pepper. Serve immediately.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Prepare the quinoa: In a medium saucepan combine the quinoa, water and 1/4 t. salt. Bring to a boil, reduce heat to low, cover and simmer until the liquid is just absorbed, about 15 minutes.",
              "ingredients": [
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404669,
                  "name": "sauce pan",
                  "localizedName": "sauce pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg"
                }
              ],
              "length": {
                "number": 15,
                "unit": "minutes"
              }
            },
            {
              "number": 2,
              "step": "Spread the cooked quinoa out on a baking sheet to cool for about 20 minutes.In a large bowl whisk together lime juice, zest, honey, sour cream and olive oil.",
              "ingredients": [
                {
                  "id": 20137,
                  "name": "cooked quinoa",
                  "localizedName": "cooked quinoa",
                  "image": "cooked-quinoa.png"
                },
                {
                  "id": 9160,
                  "name": "lime juice",
                  "localizedName": "lime juice",
                  "image": "lime-juice.png"
                },
                {
                  "id": 1056,
                  "name": "sour cream",
                  "localizedName": "sour cream",
                  "image": "sour-cream.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 0,
                  "name": "spread",
                  "localizedName": "spread",
                  "image": ""
                },
                {
                  "id": 19296,
                  "name": "honey",
                  "localizedName": "honey",
                  "image": "honey.png"
                }
              ],
              "equipment": [
                {
                  "id": 404727,
                  "name": "baking sheet",
                  "localizedName": "baking sheet",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                },
                {
                  "id": 404661,
                  "name": "whisk",
                  "localizedName": "whisk",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                },
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ],
              "length": {
                "number": 20,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Add the cooled quinoa, strawberries, mango, cucumber and mint. Toss well to combine and season with salt &amp; pepper.",
              "ingredients": [
                {
                  "id": 9316,
                  "name": "strawberries",
                  "localizedName": "strawberries",
                  "image": "strawberries.png"
                },
                {
                  "id": 11206,
                  "name": "cucumber",
                  "localizedName": "cucumber",
                  "image": "cucumber.jpg"
                },
                {
                  "id": 1002030,
                  "name": "pepper",
                  "localizedName": "pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 20035,
                  "name": "quinoa",
                  "localizedName": "quinoa",
                  "image": "uncooked-quinoa.png"
                },
                {
                  "id": 9176,
                  "name": "mango",
                  "localizedName": "mango",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/mango.jpg"
                },
                {
                  "id": 2064,
                  "name": "mint",
                  "localizedName": "mint",
                  "image": "mint.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Serve immediately.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 97.19607543945312,
      "spoonacularSourceUrl": "https://spoonacular.com/strawberry-mango-quinoa-salad-661925"
    },
    {
      "id": 631756,
      "image": "https://img.spoonacular.com/recipes/631756-556x370.jpg",
      "imageType": "jpg",
      "title": "Savory Radicchio and Prosciutto Crostini Topped with Sweet Syrupy Sapa",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/JV3KMPQW/savory-radicchio-and-prosciutto-crostini-topped-with-sweet-syrupy-sapa",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 3,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 19,
      "healthScore": 7,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 119,
      "extendedIngredients": [
        {
          "id": 18064,
          "aisle": "Bakery/Bread",
          "image": "white-bread.jpg",
          "consistency": "SOLID",
          "name": "toasty bread",
          "nameClean": "bread",
          "original": "toasty bread",
          "originalName": "toasty bread",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "clove of garlic",
          "originalName": "garlic",
          "amount": 1,
          "unit": "clove",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "clove",
              "unitLong": "clove"
            },
            "metric": {
              "amount": 1,
              "unitShort": "clove",
              "unitLong": "clove"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "glugs of olive oil",
          "nameClean": "olive oil",
          "original": "1-2 glugs of olive oil",
          "originalName": "glugs of olive oil",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10010123,
          "aisle": "Meat",
          "image": "proscuitto.jpg",
          "consistency": "SOLID",
          "name": "pancetta",
          "nameClean": "prosciutto",
          "original": "2-3 slices of pancetta, prosciutto, bacon, speck - whatever fatty component you want.",
          "originalName": "pancetta, prosciutto, bacon, speck - whatever fatty component you want",
          "amount": 2,
          "unit": "slices",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "slice",
              "unitLong": "slices"
            },
            "metric": {
              "amount": 2,
              "unitShort": "slice",
              "unitLong": "slices"
            }
          }
        },
        {
          "id": 11952,
          "aisle": "Produce",
          "image": "radicchio.jpg",
          "consistency": "SOLID",
          "name": "radicchio",
          "nameClean": "radicchio",
          "original": "Head of radicchio",
          "originalName": "radicchio",
          "amount": 1,
          "unit": "Head",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Head",
              "unitLong": "Head"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Head",
              "unitLong": "Head"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt & pepper",
          "nameClean": "salt and pepper",
          "original": "salt & pepper",
          "originalName": "salt & pepper",
          "amount": 4,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1011019,
          "aisle": "Cheese",
          "image": "cheddar-cheese.png",
          "consistency": "SOLID",
          "name": "optional - few of cheese - we use sheep's milk",
          "nameClean": "sheep cheese",
          "original": "optional - few slices of soft cheese - we use sheep's milk (pecorino)",
          "originalName": "optional - few of soft cheese - we use sheep's milk (pecorino)",
          "amount": 1,
          "unit": "slices",
          "meta": [
            "soft",
            "(pecorino)"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "slice",
              "unitLong": "slice"
            },
            "metric": {
              "amount": 1,
              "unitShort": "slice",
              "unitLong": "slice"
            }
          }
        },
        {
          "id": 2069,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "balsamic-vinegar.jpg",
          "consistency": "LIQUID",
          "name": "if unavailable",
          "nameClean": "balsamic vinegar",
          "original": "spoonful of sapa - grape must or if unavailable, you can you balsamic vinegar with a tiny bit of honey",
          "originalName": "spoonful of sapa - grape must or if unavailable, you you balsamic vinegar with a tiny bit of honey",
          "amount": 1,
          "unit": "can",
          "meta": [
            "with a tiny bit of honey"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "can",
              "unitLong": "can"
            },
            "metric": {
              "amount": 1,
              "unitShort": "can",
              "unitLong": "can"
            }
          }
        }
      ],
      "summary": "If you want to add more <b>Mediterranean</b> recipes to your repertoire, Savory Radicchio and Prosciutto Crostini Topped with Sweet Syrupy Sapa might be a recipe you should try. This recipe makes 4 servings with <b>114 calories</b>, <b>5g of protein</b>, and <b>3g of fat</b> each. For <b>$1.19 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up toasty bread, optional - few of cheese - we use sheep's milk, if unavailable, and a few other things to make it today. It works well as an affordable hor d'oeuvre. 19 people found this recipe to be yummy and satisfying. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 52%</b>, which is solid. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/crostini-of-radicchio-prosciutto-and-sapa-18755\">Crostini Of Radicchio, Prosciutto And Sapa</a>, <a href=\"https://spoonacular.com/recipes/bluestems-crostini-with-prosciutto-and-hot-and-sweet-cipollini-195951\">Bluestem's Crostini with Prosciutto and Hot and Sweet Cipollini</a>, and <a href=\"https://spoonacular.com/recipes/radicchio-crostini-18748\">Radicchio Crostini</a>.",
      "cuisines": [
        "Mediterranean",
        "Italian",
        "European"
      ],
      "dishTypes": [
        "fingerfood",
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ],
      "diets": [],
      "occasions": [],
      "instructions": "<ol><li>In a pan, heat the olive oil on low heat, add in the clove of garlic. Cook until lightly brown on all sides.</li><li>Turn up the heat, rough chop your head of radicchio, removing the core and cook down for a couple of minutes until the radicchio wilts.</li><li>Turn the heat down, chop up your prosciutto or bacon and add to the pan. You want to render the fat of this slowly - if you have the heat too high, the pork will crisp up & become chewy - you dont want this with the soft radicchio.</li><li>Allow to cook until most of the moisture in the pan has cooked out. The radicchio & pork should still be soft. Season with salt & pepper. Remove the clove of garlic and drizzle over the sapa or balsamic & honey mixture. Check your seasonings.</li><li>Toast the bread, top with a slice of pecorino then a spoonful of the mixture and serve immediately. Goes great with a glass of red wine.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a pan, heat the olive oil on low heat, add in the clove of garlic. Cook until lightly brown on all sides.Turn up the heat, rough chop your head of radicchio, removing the core and cook down for a couple of minutes until the radicchio wilts.Turn the heat down, chop up your prosciutto or bacon and add to the pan. You want to render the fat of this slowly - if you have the heat too high, the pork will crisp up & become chewy - you dont want this with the soft radicchio.Allow to cook until most of the moisture in the pan has cooked out. The radicchio & pork should still be soft. Season with salt & pepper.",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 10010123,
                  "name": "prosciutto",
                  "localizedName": "prosciutto",
                  "image": "proscuitto.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11952,
                  "name": "radicchio",
                  "localizedName": "radicchio",
                  "image": "radicchio.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 10123,
                  "name": "bacon",
                  "localizedName": "bacon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                },
                {
                  "id": 1002011,
                  "name": "clove",
                  "localizedName": "clove",
                  "image": "cloves.jpg"
                },
                {
                  "id": 10010219,
                  "name": "pork",
                  "localizedName": "pork",
                  "image": "pork-tenderloin-raw.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 2,
              "step": "Remove the clove of garlic and drizzle over the sapa or balsamic & honey mixture. Check your seasonings.Toast the bread, top with a slice of pecorino then a spoonful of the mixture and serve immediately. Goes great with a glass of red wine.",
              "ingredients": [
                {
                  "id": 1042027,
                  "name": "seasoning",
                  "localizedName": "seasoning",
                  "image": "seasoning.png"
                },
                {
                  "id": 1038,
                  "name": "pecorino",
                  "localizedName": "pecorino",
                  "image": "parmesan.jpg"
                },
                {
                  "id": 14096,
                  "name": "red wine",
                  "localizedName": "red wine",
                  "image": "red-wine.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 18064,
                  "name": "bread",
                  "localizedName": "bread",
                  "image": "white-bread.jpg"
                },
                {
                  "id": 1002011,
                  "name": "clove",
                  "localizedName": "clove",
                  "image": "cloves.jpg"
                },
                {
                  "id": 19296,
                  "name": "honey",
                  "localizedName": "honey",
                  "image": "honey.png"
                },
                {
                  "id": 0,
                  "name": "sandwich bread",
                  "localizedName": "sandwich bread",
                  "image": "white-bread.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 55.78706359863281,
      "spoonacularSourceUrl": "https://spoonacular.com/savory-radicchio-and-prosciutto-crostini-topped-with-sweet-syrupy-sapa-631756"
    },
    {
      "id": 642256,
      "image": "https://img.spoonacular.com/recipes/642256-556x370.jpg",
      "imageType": "jpg",
      "title": "Eggless Cardamom and Chocolate Cheesecake",
      "readyInMinutes": 90,
      "servings": 12,
      "sourceUrl": "http://www.foodista.com/recipe/PH6RYZVL/eggless-cardamom-and-chocolate-cheesecake",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 23,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 1,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 100.88,
      "extendedIngredients": [
        {
          "id": 18369,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking powder",
          "nameClean": "baking powder",
          "original": "1 tsp baking powder",
          "originalName": "baking powder",
          "amount": 1,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1001,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "butter",
          "original": "1/4 cup butter at room temperature",
          "originalName": "butter at room temperature",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "at room temperature"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 56.75,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2006,
          "aisle": "Spices and Seasonings",
          "image": "cardamom.jpg",
          "consistency": "SOLID",
          "name": "cardamom",
          "nameClean": "cardamom",
          "original": "½ tsp cardamom, ground into powder",
          "originalName": "cardamom, ground into powder",
          "amount": 0.5,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19165,
          "aisle": "Baking",
          "image": "cocoa-powder.png",
          "consistency": "SOLID",
          "name": "cocoa powder",
          "nameClean": "cacao powder",
          "original": "1/3 cup cocoa powder, sifted",
          "originalName": "cocoa powder, sifted",
          "amount": 0.33333334,
          "unit": "cup",
          "meta": [
            "sifted"
          ],
          "measures": {
            "us": {
              "amount": 0.33333334,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 28.667,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 20027,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "cornflour",
          "nameClean": "corn starch",
          "original": "1 tbsp cornflour",
          "originalName": "cornflour",
          "amount": 1,
          "unit": "tbsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1017,
          "aisle": "Cheese",
          "image": "cream-cheese.jpg",
          "consistency": "SOLID",
          "name": "cream cheese",
          "nameClean": "cream cheese",
          "original": "500g cream cheese, at room temperature",
          "originalName": "cream cheese, at room temperature",
          "amount": 500,
          "unit": "g",
          "meta": [
            "at room temperature"
          ],
          "measures": {
            "us": {
              "amount": 1.102,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 500,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1011053,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "white-cream.png",
          "consistency": "LIQUID",
          "name": "double cream",
          "nameClean": "double cream",
          "original": "1 1/3 cups double cream",
          "originalName": "double cream",
          "amount": 1.3333334,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.3333334,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 317.333,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "1/3 cup lemon juice",
          "originalName": "lemon juice",
          "amount": 0.33333334,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.33333334,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 81.333,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 20081,
          "aisle": "Baking",
          "image": "flour.png",
          "consistency": "SOLID",
          "name": "flour",
          "nameClean": "wheat flour",
          "original": "1 cup plain flour",
          "originalName": "plain flour",
          "amount": 1,
          "unit": "cup",
          "meta": [
            "plain"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 125,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1036,
          "aisle": "Cheese",
          "image": "ricotta.png",
          "consistency": "SOLID",
          "name": "ricotta cheese",
          "nameClean": "ricotta cheese",
          "original": "500g ricotta cheese",
          "originalName": "ricotta cheese",
          "amount": 500,
          "unit": "g",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.102,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 500,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1/4 cup sugar",
          "originalName": "sugar",
          "amount": 0.25,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 50,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 19335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "sugar",
          "original": "1 ½ cups sugar",
          "originalName": "sugar",
          "amount": 1.5,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 300,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 2050,
          "aisle": "Baking",
          "image": "vanilla-extract.jpg",
          "consistency": "LIQUID",
          "name": "vanilla extract",
          "nameClean": "vanilla extract",
          "original": "1 ½ tsps vanilla extract",
          "originalName": "vanilla extract",
          "amount": 1.5,
          "unit": "tsps",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 1.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        }
      ],
      "summary": "Eggless Cardamom and Chocolate Cheesecake requires around <b>1 hour and 30 minutes</b> from start to finish. This dessert has <b>504 calories</b>, <b>10g of protein</b>, and <b>34g of fat</b> per serving. This recipe serves 12 and costs $1.01 per serving. This recipe is liked by 3 foodies and cooks. A mixture of cream cheese, sugar, cardamom, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 22%</b>. This score is rather bad. Similar recipes are <a href=\"https://spoonacular.com/recipes/eggless-blueberry-and-white-chocolate-baked-cheesecake-642259\">Eggless Blueberry and White Chocolate Baked Cheesecake</a>, <a href=\"https://spoonacular.com/recipes/eggless-blueberry-and-white-chocolate-baked-cheesecake-1433451\">Eggless Blueberry and White Chocolate Baked Cheesecake</a>, and <a href=\"https://spoonacular.com/recipes/eggless-banana-and-cardamom-ice-cream-642251\">Eggless Bananan and Cardamom Ice Cream</a>.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "<ol><li>Method for the base:</li><li>Sift together the flour and baking powder. Cream together the sugar and butter and add the vanilla extract.</li><li>Combine the flour mixture with the butter mixture quickly with cold hands or a fork.</li><li>Press the mixture into a greased 10 inch springform tin.</li><li>Method for the filling:</li><li>Beat together all of the ingredients excluding the cocoa powder and ground cardamom until it has thickened. Kurma suggests not to overmix this.</li><li>Place half of the mixture into a separate bowl and add the cocoa powder and cardamom powder. Combine thoroughly.</li><li>Place the white layer of filling over the uncooked base and finally the chocolate filling over the white layer.</li><li>Bake at 180 degrees Celsius for 1  hours until set (I left mine for 1 hour because my fan oven cooks things a little quicker).</li><li>Allow to cool and refrigerate for day. You will just have to resist the temptation of diving right in!</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine the flour mixture with the butter mixture quickly with cold hands or a fork.Press the mixture into a greased 10 inch springform tin.Method for the filling:Beat together all of the ingredients excluding the cocoa powder and ground cardamom until it has thickened. Kurma suggests not to overmix this.",
              "ingredients": [
                {
                  "id": 1032006,
                  "name": "cardamom powder",
                  "localizedName": "cardamom powder",
                  "image": "cardamom-ground.jpg"
                },
                {
                  "id": 19165,
                  "name": "cocoa powder",
                  "localizedName": "cocoa powder",
                  "image": "cocoa-powder.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                },
                {
                  "id": 20081,
                  "name": "all purpose flour",
                  "localizedName": "all purpose flour",
                  "image": "flour.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Place half of the mixture into a separate bowl and add the cocoa powder and cardamom powder.",
              "ingredients": [
                {
                  "id": 1032006,
                  "name": "cardamom powder",
                  "localizedName": "cardamom powder",
                  "image": "cardamom-ground.jpg"
                },
                {
                  "id": 19165,
                  "name": "cocoa powder",
                  "localizedName": "cocoa powder",
                  "image": "cocoa-powder.png"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Combine thoroughly.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Place the white layer of filling over the uncooked base and finally the chocolate filling over the white layer.",
              "ingredients": [
                {
                  "id": 19081,
                  "name": "chocolate",
                  "localizedName": "chocolate",
                  "image": "milk-chocolate.jpg"
                },
                {
                  "id": 0,
                  "name": "base",
                  "localizedName": "base",
                  "image": ""
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Bake at 180 degrees Celsius for 1  hours until set (I left mine for 1 hour because my fan oven cooks things a little quicker).Allow to cool and refrigerate for day. You will just have to resist the temptation of diving right in!",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 180,
                    "unit": "Celsius"
                  }
                }
              ],
              "length": {
                "number": 60,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 28.049043655395508,
      "spoonacularSourceUrl": "https://spoonacular.com/eggless-cardamom-and-chocolate-cheesecake-642256"
    },
    {
      "id": 652442,
      "image": "https://img.spoonacular.com/recipes/652442-556x370.jpg",
      "imageType": "jpg",
      "title": "Moroccan Spiced Chicken Under A Brick",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/XZ875TD7/moroccan-spiced-chicken-under-a-brick",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 14,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 7,
      "creditsText": "foodista.com",
      "license": null,
      "sourceName": "foodista.com",
      "pricePerServing": 154.99,
      "extendedIngredients": [
        {
          "id": 5006,
          "aisle": "Meat",
          "image": "whole-chicken.jpg",
          "consistency": "SOLID",
          "name": "chicken",
          "nameClean": "whole chicken",
          "original": "1 whole chicken (3-4 lb.), backbone removed, butterflied",
          "originalName": "whole chicken , backbone removed, butterflied",
          "amount": 3,
          "unit": "lb",
          "meta": [
            "whole"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 653.173,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10211215,
          "aisle": "Produce",
          "image": "garlic.jpg",
          "consistency": "SOLID",
          "name": "garlic cloves",
          "nameClean": "whole garlic cloves",
          "original": "4 garlic cloves",
          "originalName": "garlic cloves",
          "amount": 4,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 11165,
          "aisle": "Produce",
          "image": "cilantro.png",
          "consistency": "SOLID",
          "name": "cilantro leaves",
          "nameClean": "cilantro",
          "original": "1/4 cup fresh cilantro leaves",
          "originalName": "fresh cilantro leaves",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "fresh"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 4,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1012047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "sea salt",
          "nameClean": "coarse sea salt",
          "original": "2 teaspoons sea salt",
          "originalName": "sea salt",
          "amount": 2,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 2,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 9156,
          "aisle": "Produce",
          "image": "zest-lemon.jpg",
          "consistency": "SOLID",
          "name": "lemon zest",
          "nameClean": "lemon peel",
          "original": "1 teaspoon finely grated lemon zest",
          "originalName": "finely grated lemon zest",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [
            "finely grated"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2037,
          "aisle": "Spices and Seasonings",
          "image": "saffron.jpg",
          "consistency": "SOLID",
          "name": "saffron threads",
          "nameClean": "saffron",
          "original": "1/4 teaspoon saffron threads",
          "originalName": "saffron threads",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "4 tablespoons olive oil",
          "originalName": "olive oil",
          "amount": 4,
          "unit": "tablespoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            },
            "metric": {
              "amount": 4,
              "unitShort": "Tbsps",
              "unitLong": "Tbsps"
            }
          }
        },
        {
          "id": 2028,
          "aisle": "Spices and Seasonings",
          "image": "paprika.jpg",
          "consistency": "SOLID",
          "name": "paprika",
          "nameClean": "paprika",
          "original": "1 tablespoon paprika",
          "originalName": "paprika",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1012014,
          "aisle": "Spices and Seasonings",
          "image": "ground-cumin.jpg",
          "consistency": "SOLID",
          "name": "ground cumin",
          "nameClean": "ground cumin",
          "original": "1 teaspoon ground cumin",
          "originalName": "ground cumin",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "pepper",
          "nameClean": "black pepper",
          "original": "1/2 teaspoon freshly ground black pepper",
          "originalName": "freshly ground black pepper",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [
            "black",
            "freshly ground"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2031,
          "aisle": "Spices and Seasonings",
          "image": "chili-powder.jpg",
          "consistency": "SOLID",
          "name": "cayenne",
          "nameClean": "ground cayenne pepper",
          "original": "1/4 teaspoon cayenne, or to taste",
          "originalName": "cayenne, or to taste",
          "amount": 0.25,
          "unit": "teaspoon",
          "meta": [
            "to taste"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.25,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        }
      ],
      "summary": "If you have around <b>45 minutes</b> to spend in the kitchen, Moroccan Spiced Chicken Under A Brick might be a great <b>gluten free, dairy free, paleolithic, and primal</b> recipe to try. One portion of this dish contains approximately <b>31g of protein</b>, <b>39g of fat</b>, and a total of <b>488 calories</b>. This recipe serves 4. For <b>$1.55 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. Only a few people really liked this main course. Head to the store and pick up cayenne, ground cumin, pepper, and a few other things to make it today. 2 people have made this recipe and would make it again. It is brought to you by Foodista. With a spoonacular <b>score of 42%</b>, this dish is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/moroccan-spiced-chicken-74219\">Moroccan-spiced Chicken</a>, <a href=\"https://spoonacular.com/recipes/moroccan-spiced-chicken-167562\">Moroccan Spiced Chicken</a>, and <a href=\"https://spoonacular.com/recipes/moroccan-spiced-chicken-and-squash-1532137\">Moroccan Spiced Chicken and Squash</a>.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free",
        "paleolithic",
        "primal",
        "whole 30",
        "ketogenic"
      ],
      "occasions": [],
      "instructions": "Make the paste:\nCombine garlic, cilantro, one teaspoon salt, lemon zest and saffron in a mortar with pestle.\nSmash to a paste.\nAdd 3 tablespoons olive oil and stir to combine.\nRub chicken all over with paste, including between skin and breast meat.\nPlace on tray or platter, skin side up and cover loosely with plastic wrap.\nRefrigerate at least 2 hours and up to 6 hours.\nRemove from refrigerator 30 minutes before roasting.\nPrepare chicken:\nPreheat oven to 450 F.\nMix one teaspoon salt, paprika, cumin, black pepper and cayenne together in a small bowl.\nSprinkle over all sides of chicken.\nHeat one tablespoon olive oil in oven-proof skillet over medium-high heat.\nPlace chicken, skin-side down, in skillet.\nPlace brick wrapped in foil (or heavy pan or Dutch-oven) over chicken.\nCook chicken over medium-high heat without moving brick or chicken, 10 minutes.\nRotate skillet occasionally, to ensure even cooking.\nRemove from heat.\nUsing a spatula, turn over chicken, skin-side up.\nPlace in oven (without brick) and continue cooking until done, 20-30 minutes, depending on size of chicken.\nLet rest 10 minutes before carving into serving pieces.",
      "analyzedInstructions": [
        {
          "name": "Make the paste",
          "steps": [
            {
              "number": 1,
              "step": "Combine garlic, cilantro, one teaspoon salt, lemon zest and saffron in a mortar with pestle.",
              "ingredients": [
                {
                  "id": 9156,
                  "name": "lemon zest",
                  "localizedName": "lemon zest",
                  "image": "zest-lemon.jpg"
                },
                {
                  "id": 11165,
                  "name": "cilantro",
                  "localizedName": "cilantro",
                  "image": "cilantro.png"
                },
                {
                  "id": 2037,
                  "name": "saffron",
                  "localizedName": "saffron",
                  "image": "saffron.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404751,
                  "name": "mortar and pestle",
                  "localizedName": "mortar and pestle",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/mortar-and-pestle.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Smash to a paste.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 3,
              "step": "Add 3 tablespoons olive oil and stir to combine.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Rub chicken all over with paste, including between skin and breast meat.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                },
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                },
                {
                  "id": 1012034,
                  "name": "dry seasoning rub",
                  "localizedName": "dry seasoning rub",
                  "image": "seasoning.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "Place on tray or platter, skin side up and cover loosely with plastic wrap.",
              "ingredients": [
                {
                  "id": 10018364,
                  "name": "wrap",
                  "localizedName": "wrap",
                  "image": "flour-tortilla.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404730,
                  "name": "plastic wrap",
                  "localizedName": "plastic wrap",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/plastic-wrap.jpg"
                }
              ]
            },
            {
              "number": 6,
              "step": "Refrigerate at least 2 hours and up to 6 hours.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 480,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Remove from refrigerator 30 minutes before roasting.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            }
          ]
        },
        {
          "name": "Prepare chicken",
          "steps": [
            {
              "number": 1,
              "step": "Preheat oven to 450 F.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg",
                  "temperature": {
                    "number": 450,
                    "unit": "Fahrenheit"
                  }
                }
              ]
            },
            {
              "number": 2,
              "step": "Mix one teaspoon salt, paprika, cumin, black pepper and cayenne together in a small bowl.",
              "ingredients": [
                {
                  "id": 1002030,
                  "name": "black pepper",
                  "localizedName": "black pepper",
                  "image": "pepper.jpg"
                },
                {
                  "id": 2031,
                  "name": "ground cayenne pepper",
                  "localizedName": "ground cayenne pepper",
                  "image": "chili-powder.jpg"
                },
                {
                  "id": 2028,
                  "name": "paprika",
                  "localizedName": "paprika",
                  "image": "paprika.jpg"
                },
                {
                  "id": 1002014,
                  "name": "cumin",
                  "localizedName": "cumin",
                  "image": "ground-cumin.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Sprinkle over all sides of chicken.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Heat one tablespoon olive oil in oven-proof skillet over medium-high heat.",
              "ingredients": [
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Place chicken, skin-side down, in skillet.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 6,
              "step": "Place brick wrapped in foil (or heavy pan or Dutch-oven) over chicken.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404765,
                  "name": "aluminum foil",
                  "localizedName": "aluminum foil",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/aluminum-foil.png"
                },
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 7,
              "step": "Cook chicken over medium-high heat without moving brick or chicken, 10 minutes.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Rotate skillet occasionally, to ensure even cooking.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 9,
              "step": "Remove from heat.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 10,
              "step": "Using a spatula, turn over chicken, skin-side up.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404642,
                  "name": "spatula",
                  "localizedName": "spatula",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                }
              ]
            },
            {
              "number": 11,
              "step": "Place in oven (without brick) and continue cooking until done, 20-30 minutes, depending on size of chicken.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "chicken",
                  "localizedName": "chicken",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 30,
                "unit": "minutes"
              }
            },
            {
              "number": 12,
              "step": "Let rest 10 minutes before carving into serving pieces.",
              "ingredients": [],
              "equipment": [],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 48.54642105102539,
      "spoonacularSourceUrl": "https://spoonacular.com/moroccan-spiced-chicken-under-a-brick-652442"
    },
    {
      "id": 658126,
      "image": "https://img.spoonacular.com/recipes/658126-556x370.jpg",
      "imageType": "jpg",
      "title": "Red Wine Stewed Oxtail",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "https://www.foodista.com/recipe/ZXV5HC2C/red-wine-stewed-oxtail",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 17,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 2,
      "healthScore": 4,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 416.91,
      "extendedIngredients": [
        {
          "id": 2004,
          "aisle": "Produce",
          "image": "bay-leaves.jpg",
          "consistency": "SOLID",
          "name": "bay leaf",
          "nameClean": "bay leaves",
          "original": "1 Bay leaf",
          "originalName": "Bay leaf",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10011693,
          "aisle": "Canned and Jarred",
          "image": "tomatoes-canned.png",
          "consistency": "SOLID",
          "name": "canned tomatoes",
          "nameClean": "canned tomatoes",
          "original": "1 16 oz. can of chopped tomatoes",
          "originalName": "chopped tomatoes",
          "amount": 16,
          "unit": "oz",
          "meta": [
            "chopped",
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 16,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 453.592,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "3 cloves garlic, roughly chopped",
          "originalName": "garlic, roughly chopped",
          "amount": 3,
          "unit": "cloves",
          "meta": [
            "roughly chopped"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 3,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "Olive oil",
          "originalName": "Olive oil",
          "amount": 6,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 93778,
          "aisle": "Meat",
          "image": "ox-tail.png",
          "consistency": "SOLID",
          "name": "approximately oxtail",
          "nameClean": "oxtail",
          "original": "Approximately 2 lbs. oxtail",
          "originalName": "Approximately oxtail",
          "amount": 2,
          "unit": "lbs",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 907.185,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 14096,
          "aisle": "Alcoholic Beverages",
          "image": "red-wine.jpg",
          "consistency": "LIQUID",
          "name": "red wine",
          "nameClean": "red wine",
          "original": "Red wine",
          "originalName": "Red wine",
          "amount": 6,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 1102047,
          "aisle": "Spices and Seasonings",
          "image": "salt-and-pepper.jpg",
          "consistency": "SOLID",
          "name": "salt and pepper",
          "nameClean": "salt and pepper",
          "original": "Salt and pepper",
          "originalName": "Salt and pepper",
          "amount": 6,
          "unit": "servings",
          "meta": [],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 6,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 10511282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "yellow onion",
          "original": "1 medium yellow onion, sliced",
          "originalName": "yellow onion, sliced",
          "amount": 1,
          "unit": "medium",
          "meta": [
            "yellow",
            "sliced"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            },
            "metric": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            }
          }
        }
      ],
      "summary": "Red Wine Stewed Oxtail is a main course that serves 6. One serving contains <b>656 calories</b>, <b>48g of protein</b>, and <b>34g of fat</b>. For <b>$4.17 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires red wine, canned tomatoes, garlic, and olive oil. This recipe is liked by 2 foodies and cooks. It is a good option if you're following a <b>gluten free and dairy free</b> diet. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Overall, this recipe earns a <b>rather bad spoonacular score of 34%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/red-wine-stewed-oxtail-1281915\">Red Wine Stewed Oxtail</a>, <a href=\"https://spoonacular.com/recipes/oxtail-and-red-wine-stew-1037018\">Oxtail and Red Wine Stew</a>, and <a href=\"https://spoonacular.com/recipes/oxtail-and-red-wine-stew-1359827\">Oxtail and Red Wine Stew</a>.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "soup",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free"
      ],
      "occasions": [],
      "instructions": "<ol><li>In a large stockpot or pressure cooker, brown the onions, garlic and oxtail in a splash of olive oil. After browning, add the red wine (and chicken stock if you need more liquid) until it just covers the oxtail. Toss in the bay leaf, a good pinch of salt and freshly cracked black pepper.</li><li>Bring to a boil, then reduce to simmer; cover. If you are using a stockpot allow the oxtail to simmer for a few hours, or until the meat starts to fall easily from the bone. If you are using a pressure cooker, cook for about 40 minutes.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "In a large stockpot or pressure cooker, brown the onions, garlic and oxtail in a splash of olive oil. After browning, add the red wine (and chicken stock if you need more liquid) until it just covers the oxtail. Toss in the bay leaf, a good pinch of salt and freshly cracked black pepper.Bring to a boil, then reduce to simmer; cover. If you are using a stockpot allow the oxtail to simmer for a few hours, or until the meat starts to fall easily from the bone. If you are using a pressure cooker, cook for about 40 minutes.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "cracked black peppercorns",
                  "localizedName": "cracked black peppercorns",
                  "image": "black-pepper.png"
                },
                {
                  "id": 6172,
                  "name": "chicken stock",
                  "localizedName": "chicken stock",
                  "image": "chicken-broth.png"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 2004,
                  "name": "bay leaves",
                  "localizedName": "bay leaves",
                  "image": "bay-leaves.jpg"
                },
                {
                  "id": 14096,
                  "name": "red wine",
                  "localizedName": "red wine",
                  "image": "red-wine.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "localizedName": "onion",
                  "image": "brown-onion.png"
                },
                {
                  "id": 93778,
                  "name": "oxtail",
                  "localizedName": "oxtail",
                  "image": "ox-tail.png"
                },
                {
                  "id": 0,
                  "name": "bone",
                  "localizedName": "bone",
                  "image": ""
                },
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404658,
                  "name": "pressure cooker",
                  "localizedName": "pressure cooker",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pressure-cooker.jpg"
                }
              ],
              "length": {
                "number": 40,
                "unit": "minutes"
              }
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 40.2746696472168,
      "spoonacularSourceUrl": "https://spoonacular.com/red-wine-stewed-oxtail-658126"
    },
    {
      "id": 639209,
      "image": "https://img.spoonacular.com/recipes/639209-556x370.jpg",
      "imageType": "jpg",
      "title": "Chocolate Spelt Cake",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/B6XNBWP6/chocolate-spelt-cake",
      "vegetarian": true,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 19,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 4,
      "healthScore": 3,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 92.61,
      "extendedIngredients": [
        {
          "id": 20140,
          "aisle": "Pasta and Rice",
          "image": "farro-or-spelt.jpg",
          "consistency": "SOLID",
          "name": "spelt",
          "nameClean": "spelt",
          "original": "2 cups spelt",
          "originalName": "spelt",
          "amount": 2,
          "unit": "cups",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 348,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1145,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "butter-sliced.jpg",
          "consistency": "SOLID",
          "name": "butter",
          "nameClean": "unsalted butter",
          "original": "½ cup unsalted butter",
          "originalName": "unsalted butter",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "unsalted"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 113.5,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 14209,
          "aisle": "Tea and Coffee",
          "image": "brewed-coffee.jpg",
          "consistency": "SOLID",
          "name": "warm coffee",
          "nameClean": "coffee",
          "original": "1 cup warm coffee",
          "originalName": "warm coffee",
          "amount": 1,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "cup",
              "unitLong": "cup"
            },
            "metric": {
              "amount": 237,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 14214,
          "aisle": "Tea and Coffee",
          "image": "instant-coffee-or-instant-espresso.png",
          "consistency": "SOLID",
          "name": "coffee",
          "nameClean": "instant coffee",
          "original": "1 tablespoon instant coffee",
          "originalName": "instant coffee",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [
            "instant"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 1052050,
          "aisle": "Baking",
          "image": "vanilla.jpg",
          "consistency": "SOLID",
          "name": "vanilla",
          "nameClean": "vanilla",
          "original": "1 tsp. vanilla",
          "originalName": "vanilla",
          "amount": 1,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "SOLID",
          "name": "baking soda",
          "nameClean": "baking soda",
          "original": "1 tsp. baking soda",
          "originalName": "baking soda",
          "amount": 1,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "table salt",
          "original": "¾ tsp. salt",
          "originalName": "salt",
          "amount": 0.75,
          "unit": "tsp",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.75,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 19334,
          "aisle": "Baking",
          "image": "light-brown-sugar.jpg",
          "consistency": "SOLID",
          "name": "brown sugar",
          "nameClean": "golden brown sugar",
          "original": "½ cup brown sugar",
          "originalName": "brown sugar",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 110,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 10719335,
          "aisle": "Baking",
          "image": "sugar-in-bowl.png",
          "consistency": "SOLID",
          "name": "sugar",
          "nameClean": "granulated sugar",
          "original": "½ cup white sugar",
          "originalName": "white sugar",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "white"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 100,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1123,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "egg.png",
          "consistency": "SOLID",
          "name": "eggs",
          "nameClean": "egg",
          "original": "2 eggs",
          "originalName": "eggs",
          "amount": 2,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 10093831,
          "aisle": "Baking",
          "image": "coconut-sugar.jpg",
          "consistency": "SOLID",
          "name": "coco powder",
          "nameClean": "coconut sugar",
          "original": "¾ cup instant hot coco powder",
          "originalName": "instant hot coco powder",
          "amount": 0.75,
          "unit": "cup",
          "meta": [
            "hot",
            "instant"
          ],
          "measures": {
            "us": {
              "amount": 0.75,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 120,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 1056,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "sour-cream.jpg",
          "consistency": "SOLID",
          "name": "cream",
          "nameClean": "sour cream",
          "original": "½ cup sour cream",
          "originalName": "sour cream",
          "amount": 0.5,
          "unit": "cup",
          "meta": [
            "sour"
          ],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 115,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 9085,
          "aisle": "Produce",
          "image": "blueberries-dried.jpg",
          "consistency": "SOLID",
          "name": "currants",
          "nameClean": "dried currants",
          "original": "½ cup currants or raisins",
          "originalName": "currants or raisins",
          "amount": 0.5,
          "unit": "cup",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 72,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        }
      ],
      "summary": "Chocolate Spelt Cake takes about <b>45 minutes</b> from beginning to end. For <b>93 cents per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>9g of protein</b>, <b>16g of fat</b>, and a total of <b>472 calories</b>. This recipe serves 8. A mixture of brown sugar, baking soda, coffee, and a handful of other ingredients are all it takes to make this recipe so tasty. 4 people were impressed by this recipe. It is brought to you by Foodista. It works well as a dessert. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 34%</b>. This score is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/chocolate-espresso-spelt-cake-64843\">Chocolate Espresso Spelt Cake</a>, <a href=\"https://spoonacular.com/recipes/persimmon-cake-with-whole-spelt-flour-556429\">Persimmon cake with whole spelt flour</a>, and <a href=\"https://spoonacular.com/recipes/banana-spelt-quinoa-muffins-or-cake-125255\">Banana, Spelt, Quinoa Muffins (Or Cake)</a>.",
      "cuisines": [],
      "dishTypes": [
        "dessert"
      ],
      "diets": [
        "lacto ovo vegetarian"
      ],
      "occasions": [],
      "instructions": "Preheat Oven 350 degrees:\nAdd tablespoon of instant coffee to the warm coffee along with the vanilla, baking soda and currants; and stir till frothy.\nCombine in a medium bowl the spelt, instant coco and salt.\nIn a mix-master beat the butter, brown sugar and white sugar and mix until smooth.  Add the eggs and continue to mix; slowly add the coffee mixture and continue to mix.\nWhile still mixing on low add the spelt mixture and mix.\nPrepare a bundt pan with butter all around and then dust all over with the instant coco.\nBake 50  55 minutes or until tooth pick test comes out clean.\nLet the cake cool a bit before trying to remove from pan.",
      "analyzedInstructions": [
        {
          "name": "Preheat Oven 350 degrees",
          "steps": [
            {
              "number": 1,
              "step": "Add tablespoon of instant coffee to the warm coffee along with the vanilla, baking soda and currants; and stir till frothy.",
              "ingredients": [
                {
                  "id": 14214,
                  "name": "instant coffee",
                  "localizedName": "instant coffee",
                  "image": "instant-coffee-or-instant-espresso.png"
                },
                {
                  "id": 18372,
                  "name": "baking soda",
                  "localizedName": "baking soda",
                  "image": "white-powder.jpg"
                },
                {
                  "id": 9085,
                  "name": "currants",
                  "localizedName": "currants",
                  "image": "currants.jpg"
                },
                {
                  "id": 1052050,
                  "name": "vanilla",
                  "localizedName": "vanilla",
                  "image": "vanilla.jpg"
                },
                {
                  "id": 14209,
                  "name": "coffee",
                  "localizedName": "coffee",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Combine in a medium bowl the spelt, instant coco and salt.",
              "ingredients": [
                {
                  "id": 20140,
                  "name": "spelt",
                  "localizedName": "spelt",
                  "image": "farro-or-spelt.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "In a mix-master beat the butter, brown sugar and white sugar and mix until smooth.",
              "ingredients": [
                {
                  "id": 19334,
                  "name": "brown sugar",
                  "localizedName": "brown sugar",
                  "image": "dark-brown-sugar.png"
                },
                {
                  "id": 10719335,
                  "name": "granulated sugar",
                  "localizedName": "granulated sugar",
                  "image": "sugar-in-bowl.png"
                },
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Add the eggs and continue to mix; slowly add the coffee mixture and continue to mix.",
              "ingredients": [
                {
                  "id": 14209,
                  "name": "coffee",
                  "localizedName": "coffee",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/brewed-coffee.jpg"
                },
                {
                  "id": 1123,
                  "name": "egg",
                  "localizedName": "egg",
                  "image": "egg.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 5,
              "step": "While still mixing on low add the spelt mixture and mix.",
              "ingredients": [
                {
                  "id": 20140,
                  "name": "spelt",
                  "localizedName": "spelt",
                  "image": "farro-or-spelt.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Prepare a bundt pan with butter all around and then dust all over with the instant coco.",
              "ingredients": [
                {
                  "id": 1001,
                  "name": "butter",
                  "localizedName": "butter",
                  "image": "butter-sliced.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404748,
                  "name": "kugelhopf pan",
                  "localizedName": "kugelhopf pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bundt-cake-pan.jpg"
                }
              ]
            },
            {
              "number": 7,
              "step": "Bake 50  55 minutes or until tooth pick test comes out clean.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ],
              "length": {
                "number": 55,
                "unit": "minutes"
              }
            },
            {
              "number": 8,
              "step": "Let the cake cool a bit before trying to remove from pan.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 39.424678802490234,
      "spoonacularSourceUrl": "https://spoonacular.com/chocolate-spelt-cake-639209"
    },
    {
      "id": 634588,
      "image": "https://img.spoonacular.com/recipes/634588-556x370.jpg",
      "imageType": "jpg",
      "title": "Beef Braised In Red Wine",
      "readyInMinutes": 45,
      "servings": 8,
      "sourceUrl": "https://www.foodista.com/recipe/ZLR3STSY/beef-braised-in-red-wine",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 3,
      "healthScore": 15,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 272.89,
      "extendedIngredients": [
        {
          "id": 10123,
          "aisle": "Meat",
          "image": "raw-bacon.png",
          "consistency": "SOLID",
          "name": "bacon",
          "nameClean": "applewood smoked bacon",
          "original": "1/4 pound bacon, finely chopped",
          "originalName": "bacon, finely chopped",
          "amount": 0.25,
          "unit": "pound",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 113.398,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 13786,
          "aisle": "Meat",
          "image": "beef-chuck-roast.png",
          "consistency": "SOLID",
          "name": "beef chuck roast",
          "nameClean": "beef chuck roast",
          "original": "1 ( 3lb ) boneless beef chuck roast",
          "originalName": ") boneless beef chuck roast",
          "amount": 3,
          "unit": "lb",
          "meta": [
            "boneless"
          ],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "lb",
              "unitLong": "pounds"
            },
            "metric": {
              "amount": 1.361,
              "unitShort": "kgs",
              "unitLong": "kgs"
            }
          }
        },
        {
          "id": 11124,
          "aisle": "Produce",
          "image": "sliced-carrot.png",
          "consistency": "SOLID",
          "name": "carrot",
          "nameClean": "carrot",
          "original": "1 medium carrot, finely chopped",
          "originalName": "carrot, finely chopped",
          "amount": 1,
          "unit": "medium",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            },
            "metric": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            }
          }
        },
        {
          "id": 10111143,
          "aisle": "Produce",
          "image": "celery.jpg",
          "consistency": "SOLID",
          "name": "celery",
          "nameClean": "celery sticks",
          "original": "2 celery ribs, finely chopped",
          "originalName": "celery ribs, finely chopped",
          "amount": 2,
          "unit": "rib",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "rib",
              "unitLong": "ribs"
            },
            "metric": {
              "amount": 2,
              "unitShort": "rib",
              "unitLong": "ribs"
            }
          }
        },
        {
          "id": 14096,
          "aisle": "Alcoholic Beverages",
          "image": "red-wine.jpg",
          "consistency": "LIQUID",
          "name": "full-bodied wine",
          "nameClean": "red wine",
          "original": "2 cups of full-bodied dry red wine",
          "originalName": "full-bodied dry red wine",
          "amount": 2,
          "unit": "cups",
          "meta": [
            "dry red"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 480,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        },
        {
          "id": 10211215,
          "aisle": "Produce",
          "image": "garlic.jpg",
          "consistency": "SOLID",
          "name": "garlic cloves",
          "nameClean": "whole garlic cloves",
          "original": "4 garlic cloves, thinly sliced",
          "originalName": "garlic cloves, thinly sliced",
          "amount": 4,
          "unit": "",
          "meta": [
            "thinly sliced"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 4,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 4053,
          "aisle": "Oil, Vinegar, Salad Dressing",
          "image": "olive-oil.jpg",
          "consistency": "LIQUID",
          "name": "olive oil",
          "nameClean": "olive oil",
          "original": "1 tablespoon olive oil",
          "originalName": "olive oil",
          "amount": 1,
          "unit": "tablespoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Tbsp",
              "unitLong": "Tbsp"
            }
          }
        },
        {
          "id": 11282,
          "aisle": "Produce",
          "image": "brown-onion.png",
          "consistency": "SOLID",
          "name": "onion",
          "nameClean": "onion",
          "original": "1 medium onion, finely chopped",
          "originalName": "onion, finely chopped",
          "amount": 1,
          "unit": "medium",
          "meta": [
            "finely chopped"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            },
            "metric": {
              "amount": 1,
              "unitShort": "medium",
              "unitLong": "medium"
            }
          }
        },
        {
          "id": 1002030,
          "aisle": "Spices and Seasonings",
          "image": "pepper.jpg",
          "consistency": "SOLID",
          "name": "pepper",
          "nameClean": "black pepper",
          "original": "1/2 teaspoon pepper",
          "originalName": "pepper",
          "amount": 0.5,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 0.5,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 2036,
          "aisle": "Spices and Seasonings",
          "image": "rosemary.jpg",
          "consistency": "SOLID",
          "name": "rosemary",
          "nameClean": "rosemary",
          "original": "2 sprigs rosemary",
          "originalName": "rosemary",
          "amount": 2,
          "unit": "sprigs",
          "meta": [],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "sprigs",
              "unitLong": "sprigs"
            },
            "metric": {
              "amount": 2,
              "unitShort": "sprigs",
              "unitLong": "sprigs"
            }
          }
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "SOLID",
          "name": "salt",
          "nameClean": "table salt",
          "original": "1 teaspoon salt",
          "originalName": "salt",
          "amount": 1,
          "unit": "teaspoon",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            },
            "metric": {
              "amount": 1,
              "unitShort": "tsp",
              "unitLong": "teaspoon"
            }
          }
        },
        {
          "id": 2049,
          "aisle": "Produce",
          "image": "thyme.jpg",
          "consistency": "SOLID",
          "name": "thyme",
          "nameClean": "thyme",
          "original": "4 sprigs thyme",
          "originalName": "thyme",
          "amount": 4,
          "unit": "sprigs",
          "meta": [],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "sprigs",
              "unitLong": "sprigs"
            },
            "metric": {
              "amount": 4,
              "unitShort": "sprigs",
              "unitLong": "sprigs"
            }
          }
        },
        {
          "id": 11887,
          "aisle": "Pasta and Rice",
          "image": "tomato-paste.jpg",
          "consistency": "SOLID",
          "name": "tomato paste",
          "nameClean": "tomato paste",
          "original": "3 teaspoons tomato paste",
          "originalName": "tomato paste",
          "amount": 3,
          "unit": "teaspoons",
          "meta": [],
          "measures": {
            "us": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            },
            "metric": {
              "amount": 3,
              "unitShort": "tsps",
              "unitLong": "teaspoons"
            }
          }
        },
        {
          "id": 14412,
          "aisle": "Beverages",
          "image": "water.png",
          "consistency": "LIQUID",
          "name": "water",
          "nameClean": "water",
          "original": "1/4 cup cold water",
          "originalName": "cold water",
          "amount": 0.25,
          "unit": "cup",
          "meta": [
            "cold"
          ],
          "measures": {
            "us": {
              "amount": 0.25,
              "unitShort": "cups",
              "unitLong": "cups"
            },
            "metric": {
              "amount": 59.147,
              "unitShort": "ml",
              "unitLong": "milliliters"
            }
          }
        }
      ],
      "summary": "Beef Braised In Red Wine takes roughly <b>45 minutes</b> from beginning to end. For <b>$2.73 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This main course has <b>445 calories</b>, <b>35g of protein</b>, and <b>27g of fat</b> per serving. This recipe serves 8. This recipe from Foodista has 3 fans. It is a good option if you're following a <b>gluten free and dairy free</b> diet. If you have bacon, full-bodied wine, tomato paste, and a few other ingredients on hand, you can make it. With a spoonacular <b>score of 60%</b>, this dish is good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/beef-braised-in-red-wine-12559\">Beef Braised in Red Wine</a>, <a href=\"https://spoonacular.com/recipes/red-wine-braised-beef-shanks-319910\">Red-Wine-Braised Beef Shanks</a>, and <a href=\"https://spoonacular.com/recipes/red-wine-braised-beef-shanks-627351\">Red Wine Braised Beef Shanks</a>.",
      "cuisines": [],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "diets": [
        "gluten free",
        "dairy free"
      ],
      "occasions": [],
      "instructions": "<ol><li>Put oven rack in the middle and preheat oven to 325</li><li>Heat oil in a large dutch oven until hot but not smoking. Meanwhile, pat meat dry and season with salt and pepper. Brown meat on both sides for about 10 minutes total. ( if the bottom of your pan starts to scorch turn down the heat some).</li><li>Remove meat from pan and let rest on a plate. Add bacon to pan and saute until browned.</li><li>Add the veggies and cook until they are softened and golden brown.</li><li>Add garlic, thyme, rosemary and saute for 1 minute. Then add tomato paste and stir in and cook for 1 minute. Add wine and boil until liquid is reduced by half.</li><li>Add water to the pan and bring to a simmer. Return meat and any juices to the pan. Cover the pot with the lid and transfer to the oven.</li><li>Cook for 2 1/2 to 3 hours or until meat is very tender.</li><li>Remove from pan and slice across the grain. Serve on top of potatoes or grits and top with sauce from pan.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Put oven rack in the middle and preheat oven to 325",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Heat oil in a large dutch oven until hot but not smoking. Meanwhile, pat meat dry and season with salt and pepper. Brown meat on both sides for about 10 minutes total. ( if the bottom of your pan starts to scorch turn down the heat some).",
              "ingredients": [
                {
                  "id": 1102047,
                  "name": "salt and pepper",
                  "localizedName": "salt and pepper",
                  "image": "salt-and-pepper.jpg"
                },
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404667,
                  "name": "dutch oven",
                  "localizedName": "dutch oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/dutch-oven.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ],
              "length": {
                "number": 10,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Remove meat from pan and let rest on a plate.",
              "ingredients": [
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add bacon to pan and saute until browned.",
              "ingredients": [
                {
                  "id": 10123,
                  "name": "bacon",
                  "localizedName": "bacon",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Add the veggies and cook until they are softened and golden brown.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Add garlic, thyme, rosemary and saute for 1 minute. Then add tomato paste and stir in and cook for 1 minute.",
              "ingredients": [
                {
                  "id": 11887,
                  "name": "tomato paste",
                  "localizedName": "tomato paste",
                  "image": "tomato-paste.jpg"
                },
                {
                  "id": 2036,
                  "name": "rosemary",
                  "localizedName": "rosemary",
                  "image": "rosemary.jpg"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                },
                {
                  "id": 2049,
                  "name": "thyme",
                  "localizedName": "thyme",
                  "image": "thyme.jpg"
                }
              ],
              "equipment": [],
              "length": {
                "number": 2,
                "unit": "minutes"
              }
            },
            {
              "number": 7,
              "step": "Add wine and boil until liquid is reduced by half.",
              "ingredients": [
                {
                  "id": 14084,
                  "name": "wine",
                  "localizedName": "wine",
                  "image": "red-wine.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Add water to the pan and bring to a simmer. Return meat and any juices to the pan. Cover the pot with the lid and transfer to the oven.Cook for 2 1/2 to 3 hours or until meat is very tender.",
              "ingredients": [
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                },
                {
                  "id": 1065062,
                  "name": "meat",
                  "localizedName": "meat",
                  "image": "whole-chicken.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404784,
                  "name": "oven",
                  "localizedName": "oven",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                },
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                },
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ],
              "length": {
                "number": 180,
                "unit": "minutes"
              }
            },
            {
              "number": 9,
              "step": "Remove from pan and slice across the grain.",
              "ingredients": [
                {
                  "id": 0,
                  "name": "grains",
                  "localizedName": "grains",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 10,
              "step": "Serve on top of potatoes or grits and top with sauce from pan.",
              "ingredients": [
                {
                  "id": 11352,
                  "name": "potato",
                  "localizedName": "potato",
                  "image": "potatoes-yukon-gold.png"
                },
                {
                  "id": 8160,
                  "name": "grits",
                  "localizedName": "grits",
                  "image": "cornmeal.png"
                },
                {
                  "id": 0,
                  "name": "sauce",
                  "localizedName": "sauce",
                  "image": ""
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 63.28714370727539,
      "spoonacularSourceUrl": "https://spoonacular.com/beef-braised-in-red-wine-634588"
    },
    {
      "id": 636212,
      "image": "https://img.spoonacular.com/recipes/636212-556x370.jpg",
      "imageType": "jpg",
      "title": "Broccoli Rabe with Tomatoes, Anchovies & Spaghetti",
      "readyInMinutes": 45,
      "servings": 4,
      "sourceUrl": "https://www.foodista.com/recipe/NN7GPTYR/broccoli-rabe-with-tomatoes-anchovies-spaghetti",
      "vegetarian": false,
      "vegan": false,
      "glutenFree": false,
      "dairyFree": false,
      "veryHealthy": true,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 16,
      "gaps": "no",
      "preparationMinutes": null,
      "cookingMinutes": null,
      "aggregateLikes": 6,
      "healthScore": 61,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 206.63,
      "extendedIngredients": [
        {
          "id": 11096,
          "aisle": "Produce",
          "image": "broccoli-rabe.jpg",
          "consistency": "SOLID",
          "name": "broccoli rabe",
          "nameClean": "broccoli rabe",
          "original": "1 bunch of broccoli rabe",
          "originalName": "broccoli rabe",
          "amount": 1,
          "unit": "bunch",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "bunch",
              "unitLong": "bunch"
            },
            "metric": {
              "amount": 1,
              "unitShort": "bunch",
              "unitLong": "bunch"
            }
          }
        },
        {
          "id": 15002,
          "aisle": "Canned and Jarred",
          "image": "anchovies.jpg",
          "consistency": "SOLID",
          "name": "anchovies",
          "nameClean": "canned anchovies",
          "original": "2 oz. can of anchovies in oil",
          "originalName": "anchovies in oil",
          "amount": 2,
          "unit": "oz",
          "meta": [
            "in oil",
            "canned"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "oz",
              "unitLong": "ounces"
            },
            "metric": {
              "amount": 56.699,
              "unitShort": "g",
              "unitLong": "grams"
            }
          }
        },
        {
          "id": 11215,
          "aisle": "Produce",
          "image": "garlic.png",
          "consistency": "SOLID",
          "name": "garlic",
          "nameClean": "garlic",
          "original": "6 cloves of garlic – chopped",
          "originalName": "garlic – chopped",
          "amount": 6,
          "unit": "cloves",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 6,
              "unitShort": "cloves",
              "unitLong": "cloves"
            },
            "metric": {
              "amount": 6,
              "unitShort": "cloves",
              "unitLong": "cloves"
            }
          }
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "LIQUID",
          "name": "juice of lemon",
          "nameClean": "lemon juice",
          "original": "1 Juice of lemon",
          "originalName": "Juice of lemon",
          "amount": 1,
          "unit": "",
          "meta": [],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 1,
              "unitShort": "",
              "unitLong": ""
            }
          }
        },
        {
          "id": 1032009,
          "aisle": "Spices and Seasonings",
          "image": "red-pepper-flakes.jpg",
          "consistency": "SOLID",
          "name": "pepper flakes",
          "nameClean": "red pepper flakes",
          "original": "Dashes of red pepper flakes",
          "originalName": "red pepper flakes",
          "amount": 1,
          "unit": "Dashes",
          "meta": [
            "red"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "Dashes",
              "unitLong": "Dashe"
            },
            "metric": {
              "amount": 1,
              "unitShort": "Dashes",
              "unitLong": "Dashe"
            }
          }
        },
        {
          "id": 1038,
          "aisle": "Cheese",
          "image": "parmesan.jpg",
          "consistency": "SOLID",
          "name": "romano cheese",
          "nameClean": "pecorino romano",
          "original": "Grated Romano Cheese",
          "originalName": "Grated Romano Cheese",
          "amount": 4,
          "unit": "servings",
          "meta": [
            "grated"
          ],
          "measures": {
            "us": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            },
            "metric": {
              "amount": 4,
              "unitShort": "servings",
              "unitLong": "servings"
            }
          }
        },
        {
          "id": 11420420,
          "aisle": "Pasta and Rice",
          "image": "spaghetti.jpg",
          "consistency": "SOLID",
          "name": "spaghetti",
          "nameClean": "spaghetti",
          "original": "1 box of your favorite spaghetti",
          "originalName": "your favorite spaghetti",
          "amount": 1,
          "unit": "box",
          "meta": [
            "your favorite"
          ],
          "measures": {
            "us": {
              "amount": 1,
              "unitShort": "box",
              "unitLong": "box"
            },
            "metric": {
              "amount": 1,
              "unitShort": "box",
              "unitLong": "box"
            }
          }
        },
        {
          "id": 11529,
          "aisle": "Produce",
          "image": "tomato.png",
          "consistency": "SOLID",
          "name": "tomatoes",
          "nameClean": "tomato",
          "original": "2 tomatoes – chopped",
          "originalName": "tomatoes – chopped",
          "amount": 2,
          "unit": "",
          "meta": [
            "chopped"
          ],
          "measures": {
            "us": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            },
            "metric": {
              "amount": 2,
              "unitShort": "",
              "unitLong": ""
            }
          }
        }
      ],
      "summary": "Need a <b>pescatarian side dish</b>? Broccoli Rabe with Tomatoes, Anchovies & Spaghetti could be an awesome recipe to try. One portion of this dish contains roughly <b>31g of protein</b>, <b>12g of fat</b>, and a total of <b>596 calories</b>. This recipe serves 4. For <b>$2.07 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. 6 people found this recipe to be yummy and satisfying. This recipe from Foodista requires tomatoes, anchovies, garlic, and juice of lemon. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 92%</b>, which is super. <a href=\"https://spoonacular.com/recipes/my-broccoli-rabe-spaghetti-tomatoes-chicken-10391\">My Broccoli Rabe “spaghetti,” Tomatoes, & Chicken</a>, <a href=\"https://spoonacular.com/recipes/broccoli-rabe-with-anchovies-and-breadcrumbs-84627\">Broccoli Rabe with Anchovies and Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-rabe-with-garlic-anchovies-163\">Broccoli Rabe With Garlic & Anchovies</a> are very similar to this recipe.",
      "cuisines": [],
      "dishTypes": [
        "side dish"
      ],
      "diets": [
        "pescatarian"
      ],
      "occasions": [],
      "instructions": "<ol><li>Cut the stems of the broccoli off, about 1 inch.</li><li>Place the broccoli in a saucepot of boiling water for about 3-4 minutes. Drain and set aside.</li><li>Heat a large frying pan with a few drizzles of olive oil and place the garlic, red pepper flakes and tomatoes in the pan to saut until the tomatoes are soft and the garlic fragrant. Add the broccoli rabe and continue to saut for a few more minutes. Add the anchovies and toss. Continue to saut on low while preparing the spaghetti.</li><li>When preparing the spaghetti, add a  cup of the water from the spaghetti to the broccoli rabe.</li><li>Drain the spaghetti. In a serving plate drizzle olive oil and grate Romano cheese at the bottom of the plate. Add the spaghetti, top with the broccoli rabe. Drizzle a little olive oil over the top, squeeze the juice of 1 lemon over the top and finish with freshly grated Romano cheese.</li></ol>",
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Cut the stems of the broccoli off, about 1 inch.",
              "ingredients": [
                {
                  "id": 11090,
                  "name": "broccoli",
                  "localizedName": "broccoli",
                  "image": "broccoli.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 2,
              "step": "Place the broccoli in a saucepot of boiling water for about 3-4 minutes.",
              "ingredients": [
                {
                  "id": 11090,
                  "name": "broccoli",
                  "localizedName": "broccoli",
                  "image": "broccoli.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "localizedName": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ],
              "length": {
                "number": 4,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Drain and set aside.",
              "ingredients": [],
              "equipment": []
            },
            {
              "number": 4,
              "step": "Heat a large frying pan with a few drizzles of olive oil and place the garlic, red pepper flakes and tomatoes in the pan to saut until the tomatoes are soft and the garlic fragrant.",
              "ingredients": [
                {
                  "id": 1032009,
                  "name": "red pepper flakes",
                  "localizedName": "red pepper flakes",
                  "image": "red-pepper-flakes.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11529,
                  "name": "tomato",
                  "localizedName": "tomato",
                  "image": "tomato.png"
                },
                {
                  "id": 11215,
                  "name": "garlic",
                  "localizedName": "garlic",
                  "image": "garlic.png"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                }
              ]
            },
            {
              "number": 5,
              "step": "Add the broccoli rabe and continue to saut for a few more minutes.",
              "ingredients": [
                {
                  "id": 11096,
                  "name": "broccoli rabe",
                  "localizedName": "broccoli rabe",
                  "image": "broccoli-rabe.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 6,
              "step": "Add the anchovies and toss. Continue to saut on low while preparing the spaghetti.When preparing the spaghetti, add a  cup of the water from the spaghetti to the broccoli rabe.",
              "ingredients": [
                {
                  "id": 11096,
                  "name": "broccoli rabe",
                  "localizedName": "broccoli rabe",
                  "image": "broccoli-rabe.jpg"
                },
                {
                  "id": 15001,
                  "name": "anchovies",
                  "localizedName": "anchovies",
                  "image": "anchovies.jpg"
                },
                {
                  "id": 11420420,
                  "name": "spaghetti",
                  "localizedName": "spaghetti",
                  "image": "spaghetti.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "localizedName": "water",
                  "image": "water.png"
                }
              ],
              "equipment": []
            },
            {
              "number": 7,
              "step": "Drain the spaghetti. In a serving plate drizzle olive oil and grate Romano cheese at the bottom of the plate.",
              "ingredients": [
                {
                  "id": 1038,
                  "name": "romano cheese",
                  "localizedName": "romano cheese",
                  "image": "parmesan.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 11420420,
                  "name": "spaghetti",
                  "localizedName": "spaghetti",
                  "image": "spaghetti.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 8,
              "step": "Add the spaghetti, top with the broccoli rabe.",
              "ingredients": [
                {
                  "id": 11096,
                  "name": "broccoli rabe",
                  "localizedName": "broccoli rabe",
                  "image": "broccoli-rabe.jpg"
                },
                {
                  "id": 11420420,
                  "name": "spaghetti",
                  "localizedName": "spaghetti",
                  "image": "spaghetti.jpg"
                }
              ],
              "equipment": []
            },
            {
              "number": 9,
              "step": "Drizzle a little olive oil over the top, squeeze the juice of 1 lemon over the top and finish with freshly grated Romano cheese.",
              "ingredients": [
                {
                  "id": 1038,
                  "name": "romano cheese",
                  "localizedName": "romano cheese",
                  "image": "parmesan.jpg"
                },
                {
                  "id": 4053,
                  "name": "olive oil",
                  "localizedName": "olive oil",
                  "image": "olive-oil.jpg"
                },
                {
                  "id": 1019016,
                  "name": "juice",
                  "localizedName": "juice",
                  "image": "apple-juice.jpg"
                },
                {
                  "id": 9150,
                  "name": "lemon",
                  "localizedName": "lemon",
                  "image": "lemon.png"
                }
              ],
              "equipment": []
            }
          ]
        }
      ],
      "originalId": null,
      "spoonacularScore": 92.7242660522461,
      "spoonacularSourceUrl": "https://spoonacular.com/broccoli-rabe-with-tomatoes-anchovies-spaghetti-636212"
    }
  ]
}
fetchedRecipes = storedRecipes.recipes



// fetch data from api
const fetchData = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  fetchedRecipes = data.recipes
}

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
                <h3>Cuisines:</h3>
                <p>${recipe.cuisines.join(', ')}</p>
              </span>
              <span>
                <h3>Time:</h3>
                <p>${recipe.readyInMinutes} minutes</p>
              </span>
              <span>
                <h3>Price per Serving:</h3>
                <p>$${(recipe.pricePerServing / 100).toPrecision(2)}</p>
              </span>
              <span>
                <h3>Popularity:</h3>
                <p>${Math.round(recipe.spoonacularScore)}</p>
              </span>
            </div>
            <hr>
            <div class="ingredients">
              <h3>Ingredients:</h3>
              <ul>${recipe.extendedIngredients.map((ingredient) => `<li>${ingredient.amount} ${ingredient.unit} ${ingredient.name}</li>`).join('')}</ul> 
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
document.getElementsByTagName("html")[0].addEventListener("load", showRecipes(fetchedRecipes))
