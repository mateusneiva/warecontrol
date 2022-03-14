import React from 'react';

import {
  Box,
  Drawer,
  Divider,
  Typography,
  styled,
  IconButton,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
} from '@mui/material';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import Logout from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    borderRadius: '10px 0px 0px 10px',
  },
}));

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  width: '100%',

  '& .MuiToggleButtonGroup-grouped': {
    width: '100%',
    textTransform: 'none',
    lineHeight: '1.5',

    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: '0px 10px 10px 0px',
    },
    '&:first-of-type': {
      borderRadius: '10px 0px 0px 10px',
    },
  },
}));

const StyledUserCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  //   border: '1px solid',
  //   borderColor: theme.palette.divider,
  color: theme.palette.common.white,
  background:
    'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
  borderRadius: '10px',
  padding: '20px',
}));

const RenderDrawer = ({
  isDrawerActived,
  toggleDrawer,
  themeMode,
  toggleTheme,
  user,
  logout,
}) => {
  const dispatch = useDispatch();

  const list = () => (
    <Box
      sx={{ width: 350 }}
      onKeyDown={toggleDrawer(false)}
      borderRadius="20px"
      boxShadow={0}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 20px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            lineHeight: '1.5',
            fontFamily:
              'IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
          }}
        >
          Configurações
        </Typography>
        <Tooltip onClick={toggleDrawer(false)} title="Fechar">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Divider />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', padding: '5px 20px' }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '3.5',
              color: 'text.secondary',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily:
                'IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
            }}
          >
            Sua Conta
          </Typography>
          <StyledUserCard
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Box>
              <Avatar
                sx={{
                  width: '35px',
                  height: '35px',
                  marginRight: '10px',
                  marginBottom: '8px',
                  border: '3px solid',
                  borderColor: 'common.white',
                }}
                src={`https://avatars.dicebear.com/api/initials/${user.username}.svg`}
             />
              <Box>
                <Typography
                  sx={{
                    fontSize: '13px',
                    lineHeight: '1.3',
                    color: 'rgb(128, 191, 255)',
                  }}
                >
                  Logado como
                </Typography>
                <Typography sx={{ lineHeight: '1.4' }}>
                  {user.username}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                marginTop: 2,
              }}
            >
              <Tooltip title="Configurações de Segurança">
                <IconButton
                  sx={{
                    width: '32px',
                    height: '32px',
                    color: 'common.white',
                    marginRight: 1.5,
                  }}
                >
                  <LockIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Sair">
                <IconButton
                  onClick={() => dispatch(logout())}
                  sx={{ width: '32px', height: '32px', color: 'common.white' }}
                >
                  <Logout />
                </IconButton>
              </Tooltip>
            </Box>
          </StyledUserCard>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: '3.5',
              color: 'text.secondary',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily:
                'IBM Plex Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
            }}
          >
            Tema
          </Typography>
          <StyledToggleButtonGroup value={themeMode} exclusive>
            <ToggleButton
              onClick={() => dispatch(toggleTheme('light'))}
              value="light"
              aria-label="light mode"
            >
              <LightModeOutlinedIcon sx={{ marginRight: 1 }} />
              Claro
            </ToggleButton>
            <ToggleButton
              onClick={() => dispatch(toggleTheme('dark'))}
              value="dark"
              aria-label="dark mode"
            >
              <DarkModeOutlinedIcon sx={{ marginRight: 1 }} />
              Escuro
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>
      </Box>
    </Box>
  );

  const anchor = 'right';
  // <Button onClick={toggleDrawer(true)}>{anchor}</Button>
  return (
    <StyledDrawer
      anchor={anchor}
      key={anchor}
      open={isDrawerActived}
      onClose={toggleDrawer(false)}
      sx={{ borderRadius: '10px', margin: '30px' }}
    >
      {list()}
    </StyledDrawer>
  );
};

export default RenderDrawer;
