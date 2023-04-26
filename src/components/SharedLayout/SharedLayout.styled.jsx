import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  weidth: 100%;

  background-color: #ebd8ff;
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 15px;
  display: flex;
  gap: 16px;
`;

export const StyledLi = styled.li`
  padding: 32px 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  &.active {
    color: #5cd3a8;
  }

  &:hover,
  :focus {
    color: #5cd3a8;
    text-decoration: underline;
  }
`;
