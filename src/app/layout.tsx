'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { ConfigProvider } from 'antd';
import { Color } from '@mango-library/color';
import { BorderRadius } from '@mango-library/box';
import { AntdConfig } from '@mango-library/antd/config';
import StyledComponentsRegistry from '@mango-library/styleRegistry';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'mango',
  description: 'mango-trip',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <link rel='icon' href='./favicon.ico' sizes='any' />
      <StyledComponentsRegistry>
        <ConfigProvider
          theme={{
            token: AntdConfig.Token,
            components: AntdConfig.Components,
          }}
        >
          <body className={inter.className}>{children}</body>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
