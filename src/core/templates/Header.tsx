'use client';
import React from 'react';
import MainLogo from '../components/logo/mainLogo';
import Profile from '../components/profile/Profile';
import { Button } from 'antd';
import styled, { css } from 'styled-components';

const Header = () => {
  return (
    <DIV_Header>
      <div>{/* flex */}</div>
      <MainLogo />
      <div className='header__right-side'>
        <Profile
          styles={[
            css`
              margin-right: 10px;
            `,
          ]}
        />
        <Button type='default' href='/trip/create'>
          내 여행 등록
        </Button>
      </div>
    </DIV_Header>
  );
};

const DIV_Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  .header {
    &__right-side {
      display: flex;
      align-items: center;
    }
  }
`;
export default Header;
