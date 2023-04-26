import styled from '@emotion/styled';

export const StyledLi = styled.li`
  &:not(:last-child) {
    margin: 0 0 20px;
  }
`;

export const CardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  width: 380px;
  height: 460px;
  margin: 0 auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  &::after {
    position: absolute;
    top: 50%;
    content: '';
    width: 380px;
    height: 8px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const StyledPicture = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  z-index: 100;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
  background: #ebd8ff;
`;

export const StyledSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: ${24 / 20}px;
  text-transform: uppercase;
  margin: 16px 0 0 0;
  color: #ebd8ff;
`;

export const StyledButton = styled.button`
  margin: 10px 0 36px 0;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  background-color: ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF;')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: ${22 / 18}px;
  color: #373737;
`;
