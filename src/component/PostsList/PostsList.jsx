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
import LikeIcon from "../icons/Like";
import {Link} from "react-router-dom";

const PostsList = ({itemsList}) => {
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