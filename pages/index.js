import { playlist } from '../data';

import Song from '../components/Song';

export const getStaticProps = async () => {
  return {
    props: {
      playlistLists: playlist,
    },
  };
};

export default ({ playlistLists }) => (
  <>
    <div>
      {playlistLists.map((playlistList) => (
        <Song key={playlistList.id} {...playlistList} />
      ))}
    </div>
  </>
);