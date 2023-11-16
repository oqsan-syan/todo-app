import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container, NavItem } from './styles';

const Navigation: FC = () => {
  const location = useLocation();

  return (
    <Container aria-label='breadcrumb'>
      <Link to='/'>
        <NavItem isActive={location.pathname === '/'}>Home</NavItem>
      </Link>
      <Link color='inherit' to='/trash'>
        <NavItem isActive={location.pathname === '/trash'}>Trash</NavItem>
      </Link>
    </Container>
  );
};

export default Navigation;
