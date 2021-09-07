import React from "react";
import {
  StyledSingleProductPage,
  StyledSingleProductPageSideBar
} from "./StyledSingleProductPage";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";

const SingleProductPage = () => {
  return (
    <StyledSingleProductPage>
      <Product/>
      <StyledSingleProductPageSideBar>
        <Footer/>
      </StyledSingleProductPageSideBar>
    </StyledSingleProductPage>
  )
}

export default SingleProductPage;