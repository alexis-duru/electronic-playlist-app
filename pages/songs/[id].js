import { playlist } from '../../data';
import Link from 'next/link';

export const getStaticProps = async ({ params }) => {
  const playlistList = playlist.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = playlist.map((song) => ({
    params: { id: song.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ song }) => (
  <>
    <p>{song.name}</p>
    <p>{song.artist}</p>
    <iframe
      width='100%'
      height='315'
      src={`https://www.youtube.com/embed/${song.youtubeID}`}
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    />
    <Link href='/' passHref>
      <button as='a'>Back</button>
    </Link>
  </>
);
