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
    <section>
      <div className="container">
        <h1>ELECTRONIC MUSIC PLAYLIST</h1>
          {playlistLists.map((playlistList) => (
            <Song key={playlistList.id} {...playlistList} />
          ))}
      </div>
    </section>
  </>
);