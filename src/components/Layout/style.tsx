import { Box, styled } from '@mui/material';

export const CustomLayout = styled(Box)(({ theme }) => ({
  maxWidth: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '0 40px 40px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90%',
    padding: '0 20px 20px',
  },
}));
