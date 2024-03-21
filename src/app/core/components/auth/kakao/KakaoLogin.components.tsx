import { Button } from 'antd';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

type _signInButtonProps = {} & HTMLAttributes<HTMLButtonElement>;
const _signInButton = (props: _signInButtonProps) => {
  return (
    <A_KakaoLoginButton href='http://13.210.209.64:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/auth'>
      <Image
        width={200}
        height={49}
        src='/sns/kakao/kakao_login_large_narrow.png'
        alt='카카오 로그인 버튼'
      />
    </A_KakaoLoginButton>
  );
};

const A_KakaoLoginButton = styled.a`
  &:hover {
    opacity: 0.8;
  }
`;

export const KakaoLoginComponents = {
  SigninButton: _signInButton,
};
