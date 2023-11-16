import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const FormContainer = styled(TextField)(() => ({
  background: '#9395D3',
  padding: '20px',
}));

export const Input = styled(TextField)(() => ({
  background: '#FFFFFF',
  border: '1px solid #DEE2E6',
  boxShadow: 'inset 0px 3px 0px rgba(66, 77, 138, 0.08)',
  borderRadius: '8px',
  color: '#343A40',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  '::placeholder': {
    color: 'red',
  },
  ':hover': {
    border: '1px solid #ADB5BD',
    boxShadow: 'inset 0px 6px 0px rgba(66, 77, 138, 0.06)',
  },
  '& .Mui-error': {
    borderColor: '#DA2F40 !important',
  },
  '& .Mui-focused': {
    boxShadow: '0px 6px 0px 0px rgba(66, 77, 138, 0.06) inset',
  },
  '& .MuiFormLabel-root': {
    display: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    boxShadow: 'none',
  },
}));

export const Title = styled(Typography)(() => ({
  color: '#FFF',
  fontSize: '36px',
  fontWeight: 600,
}));

export const Label = styled(Typography)(() => ({
  color: '#636568',
  fontSize: '14px',
  marginBottom: '6px',
  sup: {
    color: 'red',
  },
}));

export const ErrorText = styled(Typography)(() => ({
  color: '#dc1212',
  fontSize: '12px',
  marginTop: '4px',
}));

export const DateInput = styled(DatePicker)(() => ({
  width: '100%',
  background: '#FFFFFF',
  border: '1px solid #DEE2E6',
  boxShadow: 'inset 0px 3px 0px rgba(66, 77, 138, 0.08)',
  borderRadius: '8px',
  color: '#343A40',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  ':hover': {
    border: '1px solid #ADB5BD',
    boxShadow: 'inset 0px 6px 0px rgba(66, 77, 138, 0.06)',
  },
  '& .Mui-error': {
    borderColor: '#DA2F40 !important',
  },
  '& .Mui-focused': {
    boxShadow: '0px 6px 0px 0px rgba(66, 77, 138, 0.06) inset',
  },
  '& .MuiFormLabel-root': {
    display: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    boxShadow: 'none',
  },
}));

export const AddTaskButton = styled(Button)(({ theme }) => ({
  borderRadius: '15px',
  background: '#9395D3',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  color: '#FFF',
  fontSize: '24px',
  fontWeight: 600,
  height: '65px',
  width: '100%',
  ':hover': {
    background: '#6466a3',
  },
  [theme.breakpoints.down('md')]: {
    fontWeight: 400,
    height: '45px',
    fontSize: '20px',
  },
}));

export const EditTaskButton = styled(Button)(() => ({
  background: '#9395D3',
  ':hover': {
    background: '#6466a3',
  },
}));

export const CancelButton = styled(Button)(() => ({
  background: '#8b8b8b',
  ':hover': {
    background: '#645e5e',
  },
}));

export const EditButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  button: {
    width: '200px',
    borderRadius: '15px',
    color: '#FFF',
    fontSize: '18px',
    height: '40px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    button: {
      width: '100%',
      height: '35px',
      fontSize: '16px',
    },
  },
}));
