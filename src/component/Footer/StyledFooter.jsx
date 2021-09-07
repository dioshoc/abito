import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding-top: 18px;
  border-top: 1px solid #E5E5E5;
  width: 100%;
`
export const StyledFooterCopirate = styled.p`
  margin-bottom: 5px;
  color: ${props => props.theme.colors.textGray}
`
export const StyledFooterPrivacyPolicy = styled.ul`
  margin-bottom: 16px;`
export const StyledFooterPrivacyPolicyItem = styled.li`
  margin-bottom: 5px;

  & a {
    text-decoration: underline;
    color: ${props => props.theme.colors.textGray}
  }
`
export const StyledFooterHelpLinks = styled.ul``
export const StyledFooterHelpLinksItem = styled.li`
  margin-bottom: 5px;

  & a {
    font-size: 12px;
    line-height: 14px;
  }
`
