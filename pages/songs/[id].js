import { playlist } from '../../data';
import Link from 'next/link';
import arrow from '../../public/assets/img/arrow.png';
import Image from 'next/image';

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
  <section>
    <div className="container container__id">
      <h1>{song.name}</h1>
      <h3>{song.artist}</h3>
      <iframe
        width='100%'
        height='315'
        src={`https://www.youtube.com/embed/${song.youtubeID}`}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <Link href='/' passHref>
        <button as='a'><span><Image src={arrow} height={200} width={200}></Image></span>Back</button>
      </Link>
    </div>
  </section>
  </>
);
