import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Avatar,
  Tooltip,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

import { useDispatch, useSelector } from 'react-redux';
import { searchRows } from '@/store/TableData';
import { selectUser, logout } from '@/store/User';
import { selectTheme, toggleTheme } from '@/store/Theme';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';

import { GridFilterListIcon, GridSaveAltIcon } from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';

import Logo from '@/assets/images/logo-icon.svg';
import RenderDrawer from './Drawer';

const Header = () => {
  const [isDrawerActived, setDrawerActive] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const themeMode = useSelector(selectTheme);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerActive(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          boxShadow: 0,
          color: 'text.primary',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor:
            themeMode === 'dark' ? 'common.black' : 'common.white',
        }}
        position="static"
      >
        <Toolbar>
          <img style={{ width: '35px', height: '35px' }} src={Logo} />
          <Search
            sx={{
              background:
                themeMode === 'light'
                  ? 'common.black'
                  : 'rgba(255, 255, 255, 0.16)',
              borderColor: 'grey.800',
            }}
          >
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: themeMode === 'light' ? '#5f6368' : '',
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar"
              onChange={(event) => dispatch(searchRows(event.target.value))}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Tooltip title="Criar">
                <IconButton
                  sx={{
                    ml: 1,
                    width: '40px',
                    height: '40px',
                    padding: '10px',
                    color: themeMode === 'light' ? '#5f6368' : 'common.white',
                  }}
                  color="inherit"
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Filtrar">
                <IconButton
                  sx={{
                    ml: 1,
                    width: '40px',
                    height: '40px',
                    padding: '10px',
                    color: themeMode === 'light' ? '#5f6368' : 'common.white',
                  }}
                  color="inherit"
                >
                  <GridFilterListIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Exportar">
                <IconButton
                  sx={{
                    ml: 1,
                    width: '40px',
                    height: '40px',
                    padding: '10px',
                    color: themeMode === 'light' ? '#5f6368' : 'common.white',
                  }}
                  color="inherit"
                >
                  <GridSaveAltIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Tooltip title="Alterar Configurações">
              <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                  ml: 1,
                  width: '40px',
                  height: '40px',
                  padding: '10px',
                }}
                color="inherit"
              >
                <Avatar sx={{ width: '32px', height: '32px' }}>
                  <img
                    style={{ width: '32px', height: '32px' }}
                    src={`https://avatars.dicebear.com/api/initials/${user.username}.svg`}
                  />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <RenderDrawer
        themeMode={themeMode}
        isDrawerActived={isDrawerActived}
        toggleDrawer={toggleDrawer}
        toggleTheme={toggleTheme}
        user={user}
        logout={logout}
      />
    </Box>
  );
};

export default Header;
