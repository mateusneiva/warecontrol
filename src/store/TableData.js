import { createSlice } from '@reduxjs/toolkit';
import useDemoData from '@/services/useDemoData';

const data = useDemoData();

export const slice = createSlice({
  name: 'tableData',
  initialState: {
    columns: data.columns,
    rows: data.rows,
  },
  reducers: {
    searchRows(state, { payload }) {
      const searchRegex = new RegExp(
        payload.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'),
        'i'
      );
      const filteredRows = data.rows.filter((row) => {
        return Object.keys(row).some((field) => {
          return searchRegex.test(row[field].toString());
        });
      });
      return { ...state, rows: filteredRows };
    },
  },
});

export const selectTable = (state) => state.tableData;

export const { searchRows } = slice.actions;

export default slice.reducer;
