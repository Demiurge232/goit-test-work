import { useEffect, useState } from 'react';
import TweetsItem from '../TweetsItem/TweetsItem';
import { addFollowers } from 'sources/fetchTweets';
import { StyledUl } from './TweetsList.styled';

export const TweetsList = ({ users }) => {
  const [following, setFollowing] = useState(() => {
    const storageData = localStorage.getItem('following');
    const parseData = JSON.parse(storageData);
    return parseData ? [...parseData] : [];
  });
  const [updateData, setUpdateData] = useState(null);

  useEffect(() => {
    localStorage.setItem('following', JSON.stringify(following));
  }, [following]);

  useEffect(() => {
    if (!updateData) {
      return;
    }

    addFollowers(updateData.id, updateData.followers);
  }, [updateData]);

  const saveFollow = (user, followers, id) => {
    if (following.find(userName => userName.user === user)) {
      setFollowing(prevFollowing =>
        prevFollowing.filter(userFollowing => userFollowing.user !== user)
      );
      setUpdateData({ user, followers, id });
      return;
    }

    setFollowing(prevFollowing => [{ user, followers, id }, ...prevFollowing]);
    setUpdateData({ user, followers, id });
  };

  return (
    <StyledUl>
      {users?.map(({ user, followers, id, tweets, avatar }) => (
        <TweetsItem
          key={id}
          user={user}
          followers={followers}
          tweets={tweets}
          avatar={avatar}
          id={id}
          saveFollow={saveFollow}
        />
      ))}
    </StyledUl>
  );
};

export default TweetsList;
