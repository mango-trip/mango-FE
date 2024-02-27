'use client';
import { KakaoLoginComponents } from '../app/components/auth/kakao/KakaoLogin.components';
import { NaverLoginComponents } from '../app/components/auth/naver/NaverLogin.components';

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
