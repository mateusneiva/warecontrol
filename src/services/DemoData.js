const RowsNumber = 5524;

export default function CreateData() {
  let data = [];

  for (let i = 0; i < RowsNumber; i++) {
    const randomNumber = Math.floor(Math.random() * 250);

    let day = Math.floor(Math.random() * 30);
    let mouth = Math.floor(Math.random() * 13);
    let year = Math.floor(Math.random() * 3);

    if (day === 0) {
      day = 1;
    }

    if (mouth === 0) {
      mouth = 1;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    if (mouth < 10) {
      mouth = `0${mouth}`;
    }

    if (year === 0) {
      year = 2020;
    }

    if (year === 1) {
      year = 2021;
    }

    if (year === 2) {
      year = 2022;
    }

    data.push({
      id: i,
      name: `Produto ${i}`,
      category: `Categoria ${i}`,
      quantity: randomNumber,
      date: `${day}/${mouth}/${year}`,
    });
  }

  console.log(data);

  return {
    productsData: {
      columns: [
        {
          field: 'id',
          headerName: 'ID',
          hide: false,
        },
        {
          field: 'name',
          headerName: 'Nome',
          width: 230,
          editable: true,
          type: 'string',
        },
        {
          field: 'category',
          headerName: 'Categoria',
          width: 190,
          editable: true,
          type: 'string',
        },
        {
          field: 'quantity',
          headerName: 'Estoque',
          width: 190,
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
      ],
      rows: [...data],
    },
  };
}
