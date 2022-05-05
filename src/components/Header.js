import React, { useContext, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useLocation, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../style/header.css';

function Header() {
  const { search, setSearch } = useContext(MyContext);
  const [available, setAvailable] = useState(false);

  const location = useLocation();

  const pathRoute = location.pathname;

  let routeName = '';
  const arrayRoute = ['/project-recipes-app/foods',
    '/project-recipes-app/drinks',
    '/project-recipes-app/explore/foods/nationalities'];

  switch (pathRoute) {
  case '/project-recipes-app/foods':
    routeName = 'Foods';
    break;
  case '/project-recipes-app/drinks':
    routeName = 'Drinks';
    break;
  case '/project-recipes-app/explore':
    routeName = 'Explore';
    break;
  case '/project-recipes-app/explore/foods':
    routeName = 'Explore Foods';
    break;
  case '/project-recipes-app/explore/foods/nationalities':
    routeName = 'Explore Nationalities';
    break;
  case '/project-recipes-app/explore/drinks':
    routeName = 'Explore Drinks';
    break;
  case '/project-recipes-app/explore/drinks/ingredients':
    routeName = 'Explore Ingredients';
    break;
  case '/project-recipes-app/explore/foods/ingredients':
    routeName = 'Explore Ingredients';
    break;
  case '/project-recipes-app/profile':
    routeName = 'Profile';
    break;
  case '/project-recipes-app/done-recipes':
    routeName = 'Done Recipes';
    break;
  case '/project-recipes-app/favorite-recipes':
    routeName = 'Favorite Recipes';
    break;
  default:
    return null;
  }

  return (
    <section className="header">
      <button
        type="button"
        data-testid="profile-top-btn"
        src={ profileIcon }
        onClick={ () => setAvailable(true) }
      >
        {available && <Redirect to="/project-recipes-app/profile" />}
        <AiOutlineUser className="react-icon" />
      </button>

      <h1 className="page-title" data-testid="page-title">
        { routeName }
      </h1>

      {arrayRoute.includes(pathRoute) && (
        <button
          type="button"
          src={ searchIcon }
          data-testid="search-top-btn"
          onClick={ () => setSearch(!search) }
        >
          <BsSearch className="react-icon" />
        </button>
      )}
    </section>
  );
}

export default Header;
