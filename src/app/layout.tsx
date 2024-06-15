import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from './_lib/queryProvider';
import { cookies } from 'next/headers';
import { AuthStoreProvider } from './components/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Feature-Rich Blogging Platform',
  description:
    'A mini blogging platform that allows users to create, edit, delete, and view blog posts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = cookies();
  const token = cookiesStore.get('token');

  return (
    <html lang="en">
      <ReactQueryProvider>
        <AuthStoreProvider>
          <body className={inter.className}>{children}</body>
        </AuthStoreProvider>
      </ReactQueryProvider>
    </html>
  );
}
