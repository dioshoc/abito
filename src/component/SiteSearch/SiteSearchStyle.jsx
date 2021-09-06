import styled from "styled-components";

export const SiteSearchWrapper = styled.div``
export const SiteSearchForm = styled.form`
  display: flex;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;

  button {
    @media ${props => props.theme.media.tablet} {
      font-size: 0;
    }
  }
`
export const SiteSearchFormInput = styled.input`
  width: 100%;
  padding: 14px 24px;
  border: 3px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  outline: none;

  &::placeholder {
    opacity: .4;
  }
`

export const SiteSearchSvg = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 5px;

  @media ${props => props.theme.media.tablet} {
    margin: 0;
  }
`