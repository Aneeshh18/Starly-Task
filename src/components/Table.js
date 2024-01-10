import React from 'react';
import { useTable } from 'react-table';

const Table = ({ data, columns, onAddDataClick  }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <>
      <h1 className='px-10 mt-10 font-bold text-gray-600 text-3xl'>Task Table</h1>
      <div className="flex">
      <button onClick={onAddDataClick} className="bg-red-500 text-white px-6 py-4 ml-auto">
          Add Data
        </button>
      </div>
      <table {...getTableProps()} className="table-auto max-w-full mx-auto mt-6 text-xl text-gray-500 border-collapse">
        <thead className="border">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="border px-14 py-4">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border text-center px-4 py-2">
                    {cell.column.id === 'tags' ? (
                      <div className='p-2'>
                        {cell.value.map((tag, index) => (
                          <div key={index} className="inline-block mr-2 p-1 bg-gray-300 text-gray-400 rounded-md text-xs">
                            {tag}{''}
                            <button
                             
                              className="text-black-500 pl-4 text-xs"
                            >
                              &#x2716;
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
