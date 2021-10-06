import styled from 'styled-components';
import { COLORS } from '../../theme';

import Paragraph from '../Paragraph';

interface TableData {
  columns: Array<string>;
  data: Array<Array<any>>;
}

const renderTableHeader = (headerColumns: Array<string>) => {
  return (
    <tr>
      {headerColumns.map((column, index) => (
        <th key={index}>{column}</th>
      ))}
    </tr>
  );
};

const renderTableDataRows = (dataRows: Array<Array<any>>) => {
  return dataRows.map((dataRow, index) => (
    <tr key={'row' + index} className="row-data">
      {dataRow.map((dataCol, index) => (
        <td key={'col' + index}>
          <Paragraph>{dataCol}</Paragraph>
        </td>
      ))}
    </tr>
  ));
};

const Table = styled(
  ({ tableData, className }: { tableData: TableData; className?: string }) => {
    return (
      <table className={className}>
        <thead>{renderTableHeader(tableData.columns)}</thead>
        <tbody>{renderTableDataRows(tableData.data)}</tbody>
      </table>
    );
  }
)`
  width: 100%;

  tr th {
    color: ${COLORS.white};
    padding-bottom: 10px;
  }

  tr td {
    color: ${COLORS.white};
  }

  tr.row-data:hover {
    transition: background-color 0.3s ease;
  }

  tr.row-data:hover {
    background-color: ${COLORS.white}25;
  }
`;

export default Table;
