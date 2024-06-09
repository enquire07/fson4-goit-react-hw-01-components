import { Profile } from './Profile/Profile';
import user from '../components/Data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../components/Data/data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
    </>
  );
};
