import React from 'react';

import DemoData from '../services/DemoData';

export const RowsContext = React.createContext();

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

let API = DemoData();

export const RowsProvider = ({ children }) => {
  const [data, setData] = React.useState(API.productsData.rows);

  const contextValue = {
    columns: API.productsData.columns,
    rows: data,
    searchInRows: (searchValue) => {
      const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
      const filteredRows = API.productsData.rows.filter((row) => {
        return Object.keys(row).some((field) => {
          return searchRegex.test(row[field].toString());
        });
      });
      console.log(searchValue);
      console.log(filteredRows);
      setData(filteredRows);
    },
  };

  return (
    <RowsContext.Provider value={contextValue}>{children}</RowsContext.Provider>
  );
};
