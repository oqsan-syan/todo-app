import { Box, Typography, styled } from '@mui/material';

export const TitleContainer = styled(Box)(() => ({
  background: '#9395D3',
  padding: '20px',
  borderRadius: '0px 0px 8px 8px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: '#FFF',
  fontSize: '36px',
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}));
