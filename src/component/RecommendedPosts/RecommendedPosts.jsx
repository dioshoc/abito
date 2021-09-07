import React from 'react'
import {StyledRecommendedPosts, StyledRecommendedPostsTitle} from "./StyledRecommendedPosts";
import PostsList from "../PostsList/PostsList";

const RecommendedPosts = () => {
  return (
    <StyledRecommendedPosts>
      <StyledRecommendedPostsTitle>Рекомедации для вас</StyledRecommendedPostsTitle>
      <PostsList/>
    </StyledRecommendedPosts>
  )
}

export default RecommendedPosts