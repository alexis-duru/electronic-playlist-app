import NextLink from 'next/link';
import Image from 'next/image';

const Song = ({ id, name, artist, albumCoverUrl }) => {

    return (
        <>
            <Image
         src={albumCoverUrl} alt={name} width={100} height={100} 
         />
    <NextLink href={`/songs/[id]`} as={`/songs/${id}`} passHref>
      <div as='a'>
       <div>
        {name}
       </div>
          <p color='gray.700'>{artist}</p>

      </div>
    </NextLink>
        </>
    );

}
 ;

export default Song;