import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  borderRadius: '5px',
  [theme.breakpoints.up('md')]: {
    minWidth: '500px',
  },

  background: theme.palette.mode === 'light' ? '#f1f3f4' : '',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  padding: theme.spacing(1),
  marginLeft: theme.spacing(1),

  [theme.breakpoints.up('md')]: {
    minWidth: '500px',
  },

  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '100%',
    fontSize: '16.5px',

    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// sx={{
//   ml: 1,
//   width: '35px',
//   height: '35px',
//   padding: '10px',
//   border: '1px solid',
//   borderColor: 'divider',
//   borderRadius: '10px',
// }}
// color="inher
