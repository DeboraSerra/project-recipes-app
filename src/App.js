import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Provider from './components/Provider';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoodsByIngredients from './pages/ExploreFoodsByIngredients';
import ExploreFoodsByNationality from './pages/ExploreFoodsByNationality';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinksByIngredients from './pages/ExploreDrinksByIngredients';
import ExploreDrinks from './pages/ExploreDrinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import ProgressFood from './pages/ProgressFood';
import ProgressDrink from './pages/ProgressDrink';
import DetailsDrink from './pages/DetailsDrink';
import DetailsFood from './pages/DetailsFood';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider>
      <section className="main-sect">
        <Switch>
          <Route
            exact
            path="/project-recipes-app/"
            component={ Login }
          />
          <Route
            path="/project-recipes-app/foods/:id/in-progress"
            component={ ProgressFood }
          />
          <Route path="/project-recipes-app/foods/:id" component={ DetailsFood } />
          <Route exact path="/project-recipes-app/foods" component={ Foods } />
          <Route
            path="/project-recipes-app/drinks/:id/in-progress"
            component={ ProgressDrink }
          />
          <Route path="/project-recipes-app/drinks/:id" component={ DetailsDrink } />
          <Route exact path="/project-recipes-app/drinks" component={ Drinks } />
          <Route
            exact
            path="/project-recipes-app/explore/foods/ingredients"
            component={ ExploreFoodsByIngredients }
          />
          <Route
            exact
            path="/project-recipes-app/explore/foods/nationalities"
            component={ ExploreFoodsByNationality }
          />
          <Route
            exact
            path="/project-recipes-app/explore/foods"
            component={ ExploreFoods }
          />
          <Route
            exact
            path="/project-recipes-app/explore/drinks/ingredients"
            component={ ExploreDrinksByIngredients }
          />
          <Route
            exact
            path="/project-recipes-app/explore/drinks"
            component={ ExploreDrinks }
          />
          <Route exact path="/project-recipes-app/explore" component={ Explore } />
          <Route exact path="/project-recipes-app/profile" component={ Profile } />
          <Route path="/project-recipes-app/done-recipes" component={ DoneRecipes } />
          <Route
            path="/project-recipes-app/favorite-recipes"
            component={ FavoriteRecipes }
          />
          <Route
            path="*"
            component={ NotFound }
          />
        </Switch>
      </section>
    </Provider>
  );
}

export default App;
