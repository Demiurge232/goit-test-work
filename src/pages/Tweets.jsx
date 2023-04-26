import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTweets } from '../sources/fetchTweets';
import TweetsList from '../components/TweetsList/TweetsList';
import LoadMore from '../components/LoadMore/LoadMore';
import { StyledContainer } from 'components/container/Container.styled';
import { BackButton } from 'components/BackButton/BackButton';

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchTweets(page).then(response =>
      setUsers(prevUsers => [...prevUsers, ...response])
    );
  }, [page]);

  const handleIncrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <StyledContainer>
      <BackButton backLinkHref={backLinkHref} />
      <TweetsList users={users} />
      {users.length < 21 && <LoadMore onClick={handleIncrementPage} />}
    </StyledContainer>
  );
};
export default Tweets;
