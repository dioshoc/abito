import React from "react";
import RecommendedPosts from "../RecommendedPosts/RecommendedPosts";
import Footer from "../Footer/Footer";
import {StyledHome, StyledHomeSideBar} from "./StyledHome";

const Home = () => {

  return (
    <StyledHome>
      <RecommendedPosts/>
      <StyledHomeSideBar>
        <Footer/>
      </StyledHomeSideBar>
    </StyledHome>
  )
}

export default Home;