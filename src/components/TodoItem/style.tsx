import { Box, Chip, ChipProps, Typography, styled } from '@mui/material';
import { Status } from 'types/enums/status';

interface StatusChipProps extends ChipProps {
  status: Status;
}

export const ItemContainer = styled(Box)(() => ({
  borderRadius: '15px',
  background: '#FFF',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  width: '-webkit-fill-available',
  padding: '32px',
}));

export const ItemContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
}));

export const Title = styled(Typography)(() => ({
  color: '#9395D3',
  fontSize: '26px',
  fontWeight: 600,
  marginBottom: '12px',
}));

export const Description = styled(Typography)(() => ({
  color: '#000',
  fontSize: '18px',
  fontWeight: 400,
  marginBottom: '12px',
  span: {
    color: '#636568',
    fontSize: '14px',
  },
}));

export const ActionBtnsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  '& .MuiSvgIcon-root': {
    fill: '#B3B7EE',
  },
  '& .Mui-disabled': {
    '& .MuiSvgIcon-root': {
      fill: '#c5bebe',
    },
  },
}));

export const StatusChip = styled(Chip)<StatusChipProps>(({ status }) => ({
  height: '35px',
  padding: '6px 12px',
  color: '#fff',
  textTransform: 'capitalize',
  background:
    status === Status.OVERDUE
      ? '#ff8a00'
      : status === Status.REMOVED
      ? 'red'
      : status === Status.COMPLETED
      ? '#349010'
      : '#9395D3',
}));

export const CardContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '12px',
}));
