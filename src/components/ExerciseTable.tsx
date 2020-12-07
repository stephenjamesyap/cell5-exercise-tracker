import React from 'react';
import { Column, 
  useGlobalFilter, 
  useFilters, 
  useSortBy, 
  useTable, 
  UseFiltersColumnProps, 
  UseSortByColumnProps,
  ColumnInstance } from 'react-table';
import { IExercise } from '../interface/IExercise';

  
interface ITableProps {
    columns: Column<IExercise>[];
    data: IExercise[];
}



type ViewExerciseColumn = (ColumnInstance<IExercise> & UseSortByColumnProps<IExercise> & UseFiltersColumnProps<IExercise>)[];



const ExerciseTable: React.FC<ITableProps> = ({ columns, data }) => {
    const {
        headers,
        rows,
        prepareRow,
      } = useTable(
        {
          columns,
          data,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
      )
      const tableHeader = ((headers as unknown) as ViewExerciseColumn).map(column => (
        <th key={column.id} {...column.getSortByToggleProps()}>
          {column.Header}
          <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
          <div>{column.canFilter ? column.render('Filter') : null}</div>
        </th>
      ));
      const tableContent = rows.map(row => {
        prepareRow(row);
        const td = row.cells.map(cell => <td key={cell.column.id}>{cell.render('Cell')}</td>);
        return <tr key={row.id}>{td}</tr>;
      });

    return (
        <>
        <table className="table table-dark">
            <thead className="thead-light">
            <tr>{tableHeader}</tr>
            </thead>
            <tbody>{tableContent}</tbody>
        </table>
        </>
      )
}

export default ExerciseTable;

