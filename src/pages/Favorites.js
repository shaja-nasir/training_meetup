import React, { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import MeetupList from "../components/meetup/MeetupList";
const FavoritesPage = (props) => {
  const favoritesCtx = useContext(FavoriteContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
