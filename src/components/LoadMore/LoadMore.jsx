import { LoadMoreButton, ButtonContainer } from './LoadMore.styled';

const LoadMore = ({ onClick }) => {
  return (
    <ButtonContainer>
      <LoadMoreButton type="button" onClick={onClick}>
        load more
      </LoadMoreButton>
    </ButtonContainer>
  );
};

export default LoadMore;
