import { HoverStyle } from '@mango-library/hover';
import { PropsWithStyles, StyleProps } from '@type/style';
import { Cursor } from 'mongoose';
import { ImageProps } from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface ProfileProps
  extends PropsWithStyles<{
    imageProps?: ImageProps;
  }> {
  //
}

function Profile(props: ProfileProps) {
  return (
    <IMG_Profile
      {...props.imageProps}
      styles={props.styles}
      alt='프로파일 이미지'
      src='/images/profile/profile.svg'
      width={props.imageProps?.width || 30}
      height={props.imageProps?.height || 30}
    />
  );
}

const IMG_Profile = styled.img<StyleProps>`
  display: block;
  ${HoverStyle.Opacity};
  ${(props) => props.styles};
`;
export default Profile;
