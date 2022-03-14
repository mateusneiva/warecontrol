import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import { selectTable } from '@/store/TableData';
import noRowsOverlay from './NoRowsOverlay';

const Table = () => {
  const tableData = useSelector(selectTable);

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <DataGrid
        checkboxSelection
        pagination
        hideFooterSelectedRowCount
        disableSelectionOnClick
        labelRowsPerPage="Rows per page: "
        rowsPerPageOptions={[10, 25, 50, 100, 120]}
        components={{
          LoadingOverlay: LinearProgress,
          NoRowsOverlay: noRowsOverlay,
          //Toolbar: GridToolbar,
        }}
        columns={tableData.columns}
        rows={tableData.rows}
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
