import styled from "styled-components";

export const StyledPosts = styled.div``
export const StyledPostsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 264px);
  grid-gap: 30px;
`
export const StyledPostsListItem = styled.li`
  max-width: 264px;
`
export const StyledPostsListItemColumn = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StyledPostsListItemContent = styled.div`
  width: 100%;
  margin-right: 10px;
`
export const StyledPostsListItemImg = styled.img`
  max-width: 100%;
  max-height: 178px;
  margin-bottom: 12px;
  border-radius: 10px;
`
export const StyledPostsListItemTitle = styled.h4`
  margin-bottom: 5px;
  color: ${props => props.theme.colors.primary};
`
export const StyledPostsListItemPrice = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`
export const StyledPostsListItemDescription = styled.p`
  margin-bottom: 4px;
  color: ${props => props.theme.colors.textGray}
`
export const StyledPostsListItemDate = styled.p`
  color: ${props => props.theme.colors.textGray}
`