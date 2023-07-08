import React from "react";
import Main from "../components/Main";
import Rows from "../components/Rows";
import request from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Rows title="Up Coming" fetchURL={request.requestUpcoming} />
      <Rows title="Popular" fetchURL={request.requestPopular} />
      <Rows title="Trending" fetchURL={request.requestTrending} />
      <Rows title="Top Rated" fetchURL={request.requestTopRated} />
      <Rows title="Horor" fetchURL={request.requestHorror} />
    </div>
  );
};

export default Home;
