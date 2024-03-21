'use client';
import { ConfigProvider } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';

declare global {
  interface Window {
    Kakao: any;
    naver_id_login: any;
  }
}

function Home() {
  return (
    <DIV_Home>
      <h1>{'mango-trip'}</h1>
    </DIV_Home>
  );
}

const DIV_Home = styled.div`
  h1 {
    margin: 0;
    display: none;
  }
`;

export default Home;
