import { configureStore } from '@reduxjs/toolkit';
import TableDataReducer from './TableData';
import ThemeReducer from './Theme';
import UserReducer from './User';

const store = configureStore({
  reducer: {
    user: UserReducer,
    theme: ThemeReducer,
    tableData: TableDataReducer,
  },
});

export default store;
