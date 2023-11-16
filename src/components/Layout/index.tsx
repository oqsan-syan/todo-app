import { FC, ReactNode } from 'react';

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import { CustomLayout } from './style';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <CustomLayout>
      <Header />
      <Navigation />
      {children}
    </CustomLayout>
  );
};

export default Layout;
