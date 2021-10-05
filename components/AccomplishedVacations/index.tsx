import { useState } from 'react';

import Card from '../Layout/Card';
import Paragraph from '../Paragraph';

const AccomplishedVacations = () => {
  const [data, setData] = useState([
    ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
    ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
    ['xx/xx/xxxx - xx/xx/xxxx', 'xx dias'],
  ]);

  const renderTable = () => {
    if (data?.length < 0) {
      return data.map((dataRow, index) => (
        <tr key={'row' + index}>
          {dataRow.map((dataCol, index) => (
            <td key={'col' + index}>
              <Paragraph>{dataCol}</Paragraph>
            </td>
          ))}
        </tr>
      ));
    }

    return (
      <tr>
        <td colSpan={2}>
          <Paragraph align="center">você ainda não tirou férias</Paragraph>
        </td>
      </tr>
    );
  };

  return (
    <Card title="férias cumpridas">
      <table style={{ width: '100%' }}>
        <tr>
          <th>período requisitado</th>
          <th>dias totais</th>
        </tr>

        {renderTable()}
      </table>
    </Card>
  );
};

export default AccomplishedVacations;
