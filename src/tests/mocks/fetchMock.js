const ordinaryDrinks = require('./ordinaryDrinks');
const otherDrinks = require('./otherDrinks');
const goatMeals = require('./goatMeals');
const chickenMeals = require('./chickenMeals');
const breakfastMeals = require('./breakfastMeals');
const dessertMeals = require('./dessertMeals');
const cocktailDrinks = require('./cocktailDrinks');
const drinks = require('./drinks');
const oneMeal = require('./oneMeal');
const oneDrink = require('./oneDrink');
const meals = require('./meals');
const soupMeals = require('./soupMeals');
const beefMeals = require('./beefMeals');
const oneLetterMeal = require('./oneLetterFood');
const oneLetterDrinks = require('./oneLetterDrinks');
const ginDrink = require('./ginDrinks');
const emptyMeals = require('./emptyMeals');
const cocoaDrinks = require('./cocoaDrinks');
const emptyDrinks = require('./emptyDrinks');
const mealIngredients = require('./mealIngredients');
const drinkIngredients = require('./drinkIngredients');
const italianMeals = require('./italianMeals');
const areas = require('./areas');

const fetchMock3 = (url) => {
  if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast') {
    return Promise.resolve({ json: () => Promise.resolve(breakfastMeals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert') {
    return Promise.resolve({ json: () => Promise.resolve(dessertMeals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?i=list') {
    return Promise.resolve({ json: () => Promise.resolve(mealIngredients) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list') {
    return Promise.resolve({ json: () => Promise.resolve(drinkIngredients) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian') {
    return Promise.resolve({ json: () => Promise.resolve(italianMeals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/list.php?a=list') {
    return Promise.resolve({ json: () => Promise.resolve(areas) });
  }
};

const fetchMock2 = (url) => {
  if (url.includes('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')) {
    return Promise.resolve({ json: () => Promise.resolve(drinks) });
  } if (url.includes('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=')) {
    return Promise.resolve({ json: () => Promise.resolve(oneDrink) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/random.php') {
    return Promise.resolve({ json: () => Promise.resolve(oneMeal) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/random.php') {
    return Promise.resolve({ json: () => Promise.resolve(oneDrink) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink') {
    return Promise.resolve({ json: () => Promise.resolve(ordinaryDrinks) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Other/Unknown') {
    return Promise.resolve({ json: () => Promise.resolve(otherDrinks) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail') {
    return Promise.resolve({ json: () => Promise.resolve(cocktailDrinks) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa') {
    return Promise.resolve({ json: () => Promise.resolve(cocoaDrinks) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef') {
    return Promise.resolve({ json: () => Promise.resolve(beefMeals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat') {
    return Promise.resolve({ json: () => Promise.resolve(goatMeals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken') {
    return Promise.resolve({ json: () => Promise.resolve(chickenMeals) });
  } return fetchMock3(url);
};

const fetchMock = (url) => {
  if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=aquamarine') {
    return Promise.resolve({ json: () => Promise.resolve(oneDrink) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=') {
    return Promise.resolve({ json: () => Promise.resolve(meals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=arrabiata') {
    return Promise.resolve({ json: () => Promise.resolve(oneMeal) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=soup') {
    return Promise.resolve({ json: () => Promise.resolve(soupMeals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/filter.php?i=beef') {
    return Promise.resolve({ json: () => Promise.resolve(beefMeals) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?f=a') {
    return Promise.resolve({ json: () => Promise.resolve(oneLetterMeal) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin') {
    return Promise.resolve({ json: () => Promise.resolve(ginDrink) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a') {
    return Promise.resolve({ json: () => Promise.resolve(oneLetterDrinks) });
  } if (url === 'https://www.themealdb.com/api/json/v1/1/search.php?s=pizzas') {
    return Promise.resolve({ json: () => Promise.resolve(emptyMeals) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=chocolate') {
    return Promise.resolve({ json: () => Promise.resolve(cocoaDrinks) });
  } if (url === 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=chocolates') {
    return Promise.resolve({ json: () => Promise.resolve(emptyDrinks) });
  } if (url.includes('https://www.themealdb.com/api/json/v1/1/lookup.php?i=')) {
    return Promise.resolve({ json: () => Promise.resolve(oneMeal) });
  } return fetchMock2(url);
};

export default fetchMock;
