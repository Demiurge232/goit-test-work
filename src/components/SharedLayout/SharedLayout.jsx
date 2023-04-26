import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from 'components/Spinner/Spinner';
import {
  StyledHeader,
  StyledUl,
  StyledLi,
  StyledLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledUl>
            <StyledLi>
              <StyledLink to="/">Home</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/tweets">Tweets</StyledLink>
            </StyledLi>
          </StyledUl>
        </nav>
      </StyledHeader>
      <main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
