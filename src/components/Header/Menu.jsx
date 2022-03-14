import React from 'react';
import { Box, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { logout } from '@/store/User';
import { useDispatch } from 'react-redux';

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import LanguageIcon from '@mui/icons-material/Language';
import HelpIcon from '@mui/icons-material/Help';

const RenderMenu = ({ anchorEl, handleMenuClose, menuId }) => {
  const isMenuOpen = Boolean(anchorEl);
  const dispatch = useDispatch();

  return (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 11,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Configurações de Segurança
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <DisplaySettingsIcon fontSize="small" />
        </ListItemIcon>
        Aparência e Acessibilidade
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <HelpIcon fontSize="small" />
        </ListItemIcon>
        Ajuda e Feedback
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <LanguageIcon fontSize="small" />
        </ListItemIcon>
        Idioma
      </MenuItem>
      <MenuItem onClick={() => dispatch(logout())}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Sair
      </MenuItem>
    </Menu>
  );
};

export default RenderMenu;
