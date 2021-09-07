import React from 'react'
import {StyledRecommendedPosts, StyledRecommendedPostsTitle} from "./StyledRecommendedPosts";
import PostsList from "../PostsList/PostsList";
import postImgOne from "../../assets/images/post-1.png";
import postImgTwo from "../../assets/images/post-2.png";
import postImgThree from "../../assets/images/post-3.png";
import postImgFour from "../../assets/images/post-4.png";
import postImgFive from "../../assets/images/post-5.png";
import postImgSix from "../../assets/images/post-6.png";

const RecommendedPosts = () => {
  const itemsList = [
    {
      href: "/single",
      image: postImgOne,
      title: "Электросамокат",
      price: "10 980",
      description: "Казань, р-н Ново-Савиновский",
      date: "10 июля 11:39"
    },
    {
      href: "/single",
      image: postImgTwo,
      title: "Пвх материал 2й сорт",
      price: "170",
      description: "Казань, р-н Ново-Савиновский",
      date: "10 июля 11:39"
    },
    {
      href: "/single",
      image: postImgThree,
      title: "Двухсторонняя ветровка для мальчика",
      price: "2 110",
      description: "Казань, р-н Ново-Савиновский",
      date: "10 июля 11:39"
    },
    {
      href: "/single",
      image: postImgFour,
      title: "Пеленальная доска на комод",
      price: "200",
      description: "Казань, р-н Ново-Савиновский",
      date: "10 июля 11:39"
    },
    {
      href: "/single",
      image: postImgFive,
      title: "Участок 8 сот. (ИЖС)",
      price: "101 980",
      description: "Казань, р-н Ново-Савиновский",
      date: "10 июля 11:39"
    },
    {
      href: "/single",
      image: postImgSix,
      title: "Ford Fusion, 2007",
      price: "304 000",
      description: "Казань, р-н Ново-Савиновский",
      date: "10 июля 11:39"
    },
  ]
  return (
    <StyledRecommendedPosts>
      <StyledRecommendedPostsTitle>Рекомедации для вас</StyledRecommendedPostsTitle>
      <PostsList itemsList={itemsList}/>
    </StyledRecommendedPosts>
  )
}

export default RecommendedPosts