import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { ConfigProvider } from 'antd';
import { Color } from '@public/mango-library/color';
import { BorderRadius } from '@public/mango-library/box';

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
            colorPrimary: Color.primary,
            borderRadius: 20,
            colorBgContainer: Color.primary,
          },
        }}
      >
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
