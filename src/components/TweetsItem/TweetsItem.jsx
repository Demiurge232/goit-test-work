import { useState } from 'react';
import Logo from '../../Images/Logo.png';
import picture from '../../Images/picture.png';
import {
  CardBox,
  StyledImg,
  StyledSpan,
  StyledButton,
  StyledLi,
  StyledLogo,
  StyledPicture,
} from './TweetsItem.styled';

export const TweetsItem = ({
  user,
  followers,
  tweets,
  avatar,
  id,
  saveFollow,
}) => {
  const [isFollow, setIsFollow] = useState(() => {
    const storageData = localStorage.getItem('following');
    const parseData = JSON.parse(storageData);
    const findFollow = parseData ? [...parseData] : [];
    return findFollow.find(userFollowing => userFollowing.user === user);
  });
  const [countFollowers, setCountFollowers] = useState(followers);

  const handleFollow = () => {
    setIsFollow(prevIsFollow => !prevIsFollow);
    if (!isFollow) {
      setCountFollowers(prevCount => prevCount + 1);
      saveFollow(user, countFollowers + 1, id);
    } else {
      setCountFollowers(prevCount => prevCount - 1);
      saveFollow(user, countFollowers - 1, id);
    }
  };

  return (
    <StyledLi>
      <CardBox>
        <StyledLogo src={Logo} alt="Logo" />
        <StyledPicture src={picture} alt="picture" />
        <StyledImg src={avatar} alt="" />
        <StyledSpan>{tweets.toLocaleString()} Tweets</StyledSpan>
        <StyledSpan>{countFollowers.toLocaleString()} Followers</StyledSpan>
        <StyledButton type="button" onClick={handleFollow} isFollow={isFollow}>
          {isFollow ? 'Following' : 'Follow'}
        </StyledButton>
      </CardBox>
    </StyledLi>
  );
};

export default TweetsItem;
