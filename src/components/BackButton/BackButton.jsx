import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { StyledButton } from './BackButton.styled';

export const BackButton = ({ backLinkHref }) => {
  return (
    <div>
      <Link to={backLinkHref.current}>
        <StyledButton type="button">
          <AiOutlineArrowLeft />
          Back
        </StyledButton>
      </Link>
    </div>
  );
};
