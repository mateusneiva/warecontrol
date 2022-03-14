const RowsNumber = 5524;

const useDemoData = () => {
  let data = [];

  for (let i = 1; i < RowsNumber; i++) {
    const randomNumber = Math.floor(Math.random() * 250) + 1;

    const startDate = new Date(2017, 1, 1);
    const endDate = new Date();

    const randomDate = new Date(
      startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime())
    );

    console.log(randomDate);

    data.push({
      id: i,
      name: `Produto ${i}`,
      category: `Categoria ${i}`,
      quantity: randomNumber,
      date: randomDate,
      obs: `Observação ${i}`,
    });
  }

  return {
    columns: [
      {
        field: 'id',
        headerName: 'ID',
        hide: true,
      },
      {
        field: 'name',
        headerName: 'Nome',
        width: 190,
        editable: true,
        type: 'string',
      },
      {
        field: 'quantity',
        headerName: 'Estoque',
        width: 100,
        editable: true,
        type: 'number',
      },
      {
        field: 'date',
        headerName: 'Criado em',
        width: 190,
        editable: true,
        type: 'date',
      },
      {
        field: 'category',
        headerName: 'Categoria',
        width: 190,
        editable: true,
        type: 'string',
      },
      {
        field: 'obs',
        headerName: 'Observação',
        width: 190,
        editable: true,
        type: 'string',
      },
    ],
    rows: [...data],
  };
};

export default useDemoData;
