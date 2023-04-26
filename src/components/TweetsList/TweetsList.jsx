import { useEffect, useState } from 'react';
import TweetsItem from '../TweetsItem/TweetsItem';
import { addFollowers } from 'sources/fetchTweets';
import { StyledUl } from './TweetsList.styled';

const getVisibleUsers = (users, filter, following) => {
  switch (filter) {
    case 'all':
      return users;
    case 'followings':
      return following;
    case 'follow':
      return users.filter(userFollow =>
        following.every(userFollowing => userFollow.user !== userFollowing.user)
      );
    default:
      return users;
  }
};

export const TweetsList = ({ users, filter }) => {
  const [following, setFollowing] = useState(() => {
    const storageData = localStorage.getItem('following');
    const parseData = JSON.parse(storageData);
    return parseData ? [...parseData] : [];
  });
  const [updateData, setUpdateData] = useState(null);

  const visibleUsers = getVisibleUsers(users, filter, following);

  useEffect(() => {
    localStorage.setItem('following', JSON.stringify(following));
  }, [following]);

  useEffect(() => {
    if (!updateData) {
      return;
    }

    addFollowers(updateData.id, updateData.followers);
  }, [updateData]);

  const saveFollow = (user, followers, id, avatar, tweets) => {
    if (following.find(userName => userName.user === user)) {
      setFollowing(prevFollowing =>
        prevFollowing.filter(userFollowing => userFollowing.user !== user)
      );
      setUpdateData({ user, followers, id, avatar, tweets });
      return;
    }

    setFollowing(prevFollowing => [
      { user, followers, id, avatar, tweets },
      ...prevFollowing,
    ]);
    setUpdateData({ user, followers, id });
  };

  return (
    <StyledUl>
      {visibleUsers?.map(({ user, followers, id, tweets, avatar }) => (
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
