import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
  Paper,
} from '@mui/material';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { searchRows } from '@/store/TableData';
import { selectUser, logout } from '@/store/User';
import { selectTheme, toggleTheme } from '@/store/Theme';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';

import {
  GridFilterListIcon,
  GridColumnIcon,
  GridTableRowsIcon,
  GridSaveAltIcon,
} from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';

import Logo from '@/assets/images/logo-icon.svg';

import RenderMenu from './Menu';
import RenderMobileMenu from './MobileMenu';
import RenderDrawer from './Drawer';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isDrawerActived, setDrawerActive] = React.useState(false);

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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

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
