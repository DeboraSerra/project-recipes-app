import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getUser, cleanLocalStorage } from '../services/localStorage';

function Profile(props) {
  const { email } = getUser();
  const { history } = props;

  const redirectToPage = (page) => {
    if (page === '/') cleanLocalStorage();
    history.push(`${page}`);
  };

  return (
    <section>
      <section>
        <Header />
      </section>
      <p data-testid="profile-email">{email}</p>
      <div className="profile-buttons-container">
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => redirectToPage('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => redirectToPage('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => redirectToPage('/') }
        >
          Logout
        </button>
      </div>
      <Footer />
    </section>
  );
}

Profile.propTypes = {
  history: PropTypes.string,
}.isRequired;

export default Profile;
