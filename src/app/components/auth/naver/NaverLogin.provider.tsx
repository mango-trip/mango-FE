'use client';
import { ReactNode, useEffect } from 'react';

type NaverLoginProviderProps = {
  children: ReactNode;
};

const NaverLoginProvider = (props: NaverLoginProviderProps) => {
  useEffect(() => {
    if (window.Kakao) return;
    const head = document.getElementsByTagName('head').item(0);
    const naverScript = document.createElement('script');
    naverScript.setAttribute('type', 'text/javascript');
    naverScript.setAttribute(
      'src',
      'https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js',
    );
    naverScript.setAttribute('charset', 'utf-8');
    head?.appendChild(naverScript);

    naverScript.onload = () => {
      if (!window.naver_id_login) return;
      const naverLogin = new window.naver_id_login(
        process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        'http://localhost:3000/auth',
      );

      const state = naverLogin.getUniqState();
      naverLogin.setButton('white', 2, 40);
      naverLogin.setDomain('http://localhost:3000');
      naverLogin.setState(state);
      naverLogin.setPopup();
      naverLogin.init_naver_id_login();
    };
  }, []);

  return <>{props.children}</>;
};

export default NaverLoginProvider;
