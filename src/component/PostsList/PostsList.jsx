import React, {useMemo} from "react";
import {
  StyledPosts,
  StyledPostsList,
  StyledPostsListItem,
  StyledPostsListItemColumn,
  StyledPostsListItemContent,
  StyledPostsListItemDate,
  StyledPostsListItemDescription,
  StyledPostsListItemImg,
  StyledPostsListItemPrice,
  StyledPostsListItemTitle
} from "./StyledPostsList";
import LikeIcon from "../icons/like";
import postImgOne from "../../assets/images/post-1.png"
import postImgTwo from "../../assets/images/post-2.png"
import postImgThree from "../../assets/images/post-3.png"
import postImgFour from "../../assets/images/post-4.png"
import postImgFive from "../../assets/images/post-5.png"
import postImgSix from "../../assets/images/post-6.png"
import {Link} from "react-router-dom";

const PostsList = () => {
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

  const postList = useMemo(() => {
    return (
      itemsList.map((item, index) => {
        return (
          <StyledPostsListItem key={index}>
            <Link to={item.href}>
              <StyledPostsListItemImg src={item.image} alt={item.title}/>
              <StyledPostsListItemColumn>
                <StyledPostsListItemContent>
                  <StyledPostsListItemTitle>
                    {item.title}
                  </StyledPostsListItemTitle>
                  <StyledPostsListItemPrice>
                    {item.price} ₽
                  </StyledPostsListItemPrice>
                  <StyledPostsListItemDescription>
                    {item.description}
                  </StyledPostsListItemDescription>
                  <StyledPostsListItemDate>
                    {item.date}
                  </StyledPostsListItemDate>
                </StyledPostsListItemContent>
                <div>
                  <LikeIcon/>
                </div>
              </StyledPostsListItemColumn>
            </Link>
          </StyledPostsListItem>
        )
      })
    )
  }, [itemsList])
  return (
    <StyledPosts>
      <StyledPostsList>
        {postList}
      </StyledPostsList>
    </StyledPosts>
  )
}

export default PostsList;