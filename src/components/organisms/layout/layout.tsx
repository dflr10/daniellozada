import { Footer } from '@/components/molecules/footer/footer';
import Navbar from '@/components/molecules/navbar/navbar';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
