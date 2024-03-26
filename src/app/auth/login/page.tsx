'use client';
import styled from 'styled-components';
import { NaverLoginComponents } from '@components/auth/naver/naver/NaverLogin.components';
import { KakaoLoginComponents } from '@components/auth/kakao/KakaoLogin.components';
import { Color } from '@mango-library/color';
import { BorderRadius } from '@mango-library/box';
import MainLogo from '@components/logo/mainLogo';

declare global {
  interface Window {
    Kakao: any;
    naver_id_login: any;
  }
}

function LoginPage() {
  return (
    <DIV_LoginPage>
      <div className='login-box'>
        <div className='login-box__title'>
          <MainLogo />
          <h2> 로그인 또는 회원가입</h2>
        </div>
        <div className='login-box__buttons'>
          <NaverLoginComponents.SigninButton />
          <KakaoLoginComponents.SigninButton />
        </div>
      </div>
    </DIV_LoginPage>
  );
}

const DIV_LoginPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    padding: 50px;
    width: 452px;
    height: 353px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Color.white};
    border-radius: ${BorderRadius.primary};
    &__title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 48px;
      img {
        display: block;
      }
      h2 {
        font-size: 14px;
        color: ${Color.gray[300]};
        font-weight: bold;
      }
    }
    &__buttons {
      width: 200px;
      a {
        display: block;
        &:first-child {
          margin-bottom: 12px;
        }
      }
    }
  }
`;

export default LoginPage;
