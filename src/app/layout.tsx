import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { ConfigProvider } from 'antd';
import { Color } from '@mango-library/color';
import { BorderRadius } from '@mango-library/box';

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
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 20,
            colorPrimary: Color.primary,
            colorPrimaryBg: Color.primary,
            colorPrimaryText: Color.white,
            colorText: Color.gray[300],
            colorBgContainer: Color.white,
          },
        }}
      >
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
