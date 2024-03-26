'use client';
import React, { PropsWithChildren } from 'react';
import Header from '../../core/templates/Header';
import styled from 'styled-components';

function TripLayout(props: PropsWithChildren) {
  return (
    <DIV_TripLayout>
      <Header />
      <div className='trip-body'>{props.children}</div>
    </DIV_TripLayout>
  );
}

const DIV_TripLayout = styled.div`
  .trip-body {
    padding: 24px;
  }
`;
export default TripLayout;
