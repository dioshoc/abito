import React from "react";
import RecommendedPosts from "../RecommendedPosts/RecommendedPosts";
import Footer from "../Footer/Footer";
import {StyledHome, StyledHomeSideBar} from "./StyledHome";
import Services from "../Services/Services";

const Home = () => {

  return (
    <StyledHome>
      <RecommendedPosts/>
      <StyledHomeSideBar>
        <Services/>
        <Footer/>
      </StyledHomeSideBar>
    </StyledHome>
  )
}

export default Home;