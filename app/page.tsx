'use client';
import KakaoLoginProvider from '../front/components/auth/kakao/KakaoLogin.provider';
import { KakaoLoginComponents } from '../front/components/auth/kakao/KakaoLogin.components';

declare global {
  interface Window {
    Kakao: any;
  }
}

function Home() {
  return (
    <KakaoLoginProvider>
      <KakaoLoginComponents.SigninButton />
      <h1>{'mango-trip'}</h1>
    </KakaoLoginProvider>
  );
}

export default Home;
