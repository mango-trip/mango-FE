'use client';
import KakaoLoginProvider from '../app/components/auth/kakao/KakaoLogin.provider';
import { KakaoLoginComponents } from '../app/components/auth/kakao/KakaoLogin.components';
import NaverLoginProvider from '../app/components/auth/naver/NaverLogin.provider';
import { NaverLoginComponents } from '../app/components/auth/naver/NaverLogin.components';

declare global {
  interface Window {
    Kakao: any;
    naver_id_login: any;
  }
}

function Home() {
  return (
    <NaverLoginProvider>
      <KakaoLoginProvider>
        <h1>{'mango-trip'}</h1>
        <NaverLoginComponents.SigninButton />
        <KakaoLoginComponents.SigninButton />
      </KakaoLoginProvider>
    </NaverLoginProvider>
  );
}

export default Home;
