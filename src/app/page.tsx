'use client';
import { KakaoLoginComponents } from './core/components/auth/kakao/KakaoLogin.components';
import { NaverLoginComponents } from './core/components/auth/naver/naver/NaverLogin.components';

declare global {
  interface Window {
    Kakao: any;
    naver_id_login: any;
  }
}

function Home() {
  return (
    <>
      <h1>{'mango-trip'}</h1>
      <NaverLoginComponents.SigninButton />
      <KakaoLoginComponents.SigninButton />
    </>
  );
}

export default Home;
