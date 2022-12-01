import NextLink from 'next/link';
import Image from 'next/image';

const Song = ({ id, name, artist, albumCoverUrl }) => {

    return (
        <>
            <article>
                <Image src={albumCoverUrl} alt={name} width={100} height={100} />
                <NextLink href={`/songs/[id]`} as={`/songs/${id}`} passHref>
                    <div as='a'>
                        <h2>{name}</h2>
                        <h3 color='gray.700'>{artist}</h3>
                    </div>
                </NextLink>
            </article>
        </>
    );
};

export default Song;