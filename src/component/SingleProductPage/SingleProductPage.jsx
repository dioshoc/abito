import React from "react";
import {
  StyledSingleProductPage,
  StyledSingleProductPageSideBar
} from "./StyledSingleProductPage";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";
import personImg from "../../assets/images/person.png";
import photoOne from "../../assets/images/productGallery/photoOne.png";
import photoTwo from "../../assets/images/productGallery/photoTwo.png";
import photoThree from "../../assets/images/productGallery/photoThree.png";
import photoFour from "../../assets/images/productGallery/photoFour.png";
import photoFive from "../../assets/images/productGallery/photoFive.png";

const SingleProductPage = () => {
  const product = {
    name: "Электросамокат kugoo Gx",
    price: "75 000",
    description: "Продаю не спеша самокат в хорошем состоянии. Торг возможен. За период эксплуатации не выявлено ни одной проблемы. Из минусов — нужно прокачать задний тормоз. Установлен отсекатель сзади. Покрышки CST внедорожные. Все на подшипниках, болты протянуты. Пробег 881км , это немного для такого зверя.",
    person: {
      name: "Михаил Воровьев",
      profession: "Частное лицо",
      img: personImg,
      rating: 5,
      testimonials: 5
    },
    gallery: [
      photoOne,
      photoTwo,
      photoThree,
      photoFour,
      photoFive
    ]
  }

  return (
    <StyledSingleProductPage>
      <Product
        product={product}
      />
      <StyledSingleProductPageSideBar>
        <Footer/>
      </StyledSingleProductPageSideBar>
    </StyledSingleProductPage>
  )
}

export default SingleProductPage;