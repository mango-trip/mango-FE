'use client';
import React, { PropsWithChildren } from 'react';
import Header from '../../core/templates/Header';

function TripLayout(props: PropsWithChildren) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default TripLayout;
