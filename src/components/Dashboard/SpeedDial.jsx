import React from 'react';
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

import {
  GridFilterListIcon,
  GridColumnIcon,
  GridTableRowsIcon,
  GridSaveAltIcon,
} from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';

const actions = [
  {
    icon: <AddIcon />,
    name: 'Criar',
  },
  {
    icon: <GridFilterListIcon />,
    name: 'Filtrar',
  },
  {
    icon: <GridColumnIcon />,
    name: 'Colunas',
  },
  {
    icon: <GridTableRowsIcon />,
    name: 'Densidade',
  },
  {
    icon: <GridSaveAltIcon />,
    name: 'Exportar',
  },
];

const TableSpeedDial = () => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 75, right: 30 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default TableSpeedDial;
