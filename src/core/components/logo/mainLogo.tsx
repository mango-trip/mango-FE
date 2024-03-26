import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface MainLogoProps {
  imageProps?: ImageProps;
}

const MainLogo = (props: MainLogoProps) => {
  return (
    <A_Link href='/'>
      <Image
        {...props.imageProps}
        width={props.imageProps?.width || 40}
        height={props.imageProps?.height || 40}
        src={'/images/logo/mango-logo.png'}
        alt='망고로고'
      />
    </A_Link>
  );
};

const A_Link = styled(Link)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export default MainLogo;
