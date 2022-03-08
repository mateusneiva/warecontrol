import React from 'react';
import { LinearProgress } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { RowsContext } from '../../contexts/Table';
import noRowsOverlay from './NoRowsOverlay';

const Table = () => {
  const data = React.useContext(RowsContext);

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid
        checkboxSelection
        pagination
        disableSelectionOnClick
        labelRowsPerPage="Rows per page: "
        rowsPerPageOptions={[10, 25, 50, 100, 120]}
        components={{
          LoadingOverlay: LinearProgress,
          NoRowsOverlay: noRowsOverlay,
          //Toolbar: GridToolbar,
        }}
        columns={data.columns}
        rows={data.rows}
        sx={{
          border: 0,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
};

export default Table;
