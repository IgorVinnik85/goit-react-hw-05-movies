import React from "react";
// import { NavLink } from "react-router-dom";
import { Ul, Li, Link } from './Home.styled';


 const Home = () => {
  return (
    <div>
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/movies">Movies</Link>
        </Li>
      </Ul>

      {/* <Outlet/> */}
    </div>
  );
};

export default Home