import { Breadcrumbs, Typography, TypographyProps, styled } from '@mui/material';

interface NavItemProps extends TypographyProps {
  isActive: boolean;
}

export const NavItem = styled(Typography)<NavItemProps>(({ isActive, theme }) => ({
  color: isActive ? '#36397b' : '#000',
  fontWeight: isActive ? 700 : 400,
  textDecoration: isActive ? 'underline' : 'none',
  ':hover': {
    textDecoration: 'underline',
    color: '#36397b',
  },
  fontSize: '22px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

export const Container = styled(Breadcrumbs)(() => ({
  padding: '25px 0px',
}));
