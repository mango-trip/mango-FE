import { BorderRadius } from '@public/mango-library/box';
import { Color } from '@public/mango-library/color';
import { Button } from 'antd';
import Image from 'next/image';
import styled, { css } from 'styled-components';

const _signInButton = () => {
  return (
    <A_NaverLoginButton href='http://13.210.209.64:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000/auth'>
      <Image
        width={30}
        height={30}
        src='/sns/naver/btnG_icon.png'
        alt='네이버 아이콘'
      />
      <span className='naver-login__text'>네이버 로그인</span>
    </A_NaverLoginButton>
  );
};

const A_NaverLoginButton = styled.a`
  display: flex !important;
  justify-content: flex-start;
  text-decoration: none;
  align-items: center;
  padding: 9px;
  border-radius: ${BorderRadius.secondary};
  color: ${Color.white};
  background-color: #04c65a;
  &:hover {
    opacity: 0.8;
  }
  .naver-login {
    &__text {
      width: 100%;
      text-align: center;
    }
  }
`;

export const NaverLoginComponents = {
  SigninButton: _signInButton,
};
